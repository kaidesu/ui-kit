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
    import redactor from '../vendors/redactor/redactor.js';
    import inlinestyle from '../vendors/redactor/plugins/inlinestyle.js';
    import source from '../vendors/redactor/plugins/source.js';
    import table from '../vendors/redactor/plugins/table.js';

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

            $(this.$el).find('textarea').redactor({

                callbacks: {
                    sync: function() {
                        vm.updateValue(this.code.get());
                    }
                },

                minHeight: 200,

                plugins: ['inlinestyle', 'source', 'table']
            });
        },

        methods: {
            updateValue(value) {
                // this.$set(this.component, this.name, value);

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
