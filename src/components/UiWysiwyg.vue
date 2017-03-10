<template>
    <div>
        <div :class="{'form-group': true, 'row': horizontal}">
            <label v-if="label" :class="{'col-input-label': horizontal, 'col-form-label': horizontal}" :for="name">{{ label }}</label>
        </div>

        <div class="form-group">
            <textarea
                ref="input"
                :name="name"
                :id="name"
                :placeholder="placeholder"
                :value="value"

                @input="updateValue($event.target.value)"
                ></textarea>

            <p v-if="help" class="form-text text-muted">{{ help }}</p>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import redactor from '../../../vendors/redactor/redactor.js';

    export default {
        name: 'ui-wysiwyg',

        store: ['component'],

        data() {
            return {
                value: ''
            }
        },

        props: {
            val: {
                type: String,
                default: ''
            },
            horizontal: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            },
            help: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
        },

        mounted() {
            let vm = this;

            $.Redactor.prototype.iconic = function() {
                return {
                    init: function () {
                        var icons = {
                            'format': '<i class="fa fa-paragraph fa-fw"></i>',
                            'lists': '<i class="fa fa-list fa-fw"></i>',
                            'link': '<i class="fa fa-link fa-fw"></i>',
                            'horizontalrule': '<i class="fa fa-minus fa-fw"></i>',
                            'image': '<i class="fa fa-picture-o fa-fw"></i>',
                            'html': '<i class="fa fa-code fa-fw"></i>',
                            'table': '<i class="fa fa-table fa-fw"></i>',
                            'properties': '<i class="fa fa-flask fa-fw"></i>',
                            'alignment': '<i class="fa fa-align-center fa-fw"></i>'
                        };

                        $.each(this.button.all(), $.proxy(function(i,s) {
                            var key = $(s).attr('rel');
                            if (typeof icons[key] !== 'undefined') {
                                var icon = icons[key];
                                var button = this.button.get(key);
                                this.button.setIcon(button, icon);
                            }
                        }, this));
                    }
                };
            };

            $(this.$el).find('textarea').redactor({
                callbacks: {
                    sync: function() {
                        vm.updateValue(this.code.get());
                    }
                },

                minHeight: 200,
                plugins: ['alignment', 'source', 'table', 'properties', 'iconic'],
            });
        },

        methods: {
            updateValue(value) {
                this.$set(this.component, this.name, value);

                this.value = value;

                this.$UIevents.fire('input', {
                    id: this.name,
                    value: this.value
                });
            }
        },

        created() {
            this.value = this.val;

            this.updateValue(this.value);
        }
    }
</script>
