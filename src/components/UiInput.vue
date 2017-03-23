<template>
    <div :class="{'form-group': true, 'row': horizontal}">

        <label v-if="label" :class="{'col-input-label': horizontal, 'col-form-label': horizontal}" :for="name">{{ label }}</label>

        <div :class="{'col': horizontal}">
            <input
                v-if="type != 'textarea'"
                :class="{'form-control': true, 'form-control-lg': large, 'form-control-sm': small}"
                ref="input"
                :type="type"
                :value="value"
                :name="name"
                :id="name"
                :title="title"
                :readonly="readonly"
                :required="required"
                :disabled="disabled"
                :maxlength="maxlength"
                :placeholder="placeholder"
                :style="styles"

                @input="updateValue($event.target.value)"
            >

            <textarea
                v-if="type == 'textarea'"
                class="form-control"
                ref="textarea"
                :name="name"
                :id="name"
                :readonly="readonly"
                :required="required"
                :disabled="disabled"
                :maxlength="maxlength"
                :placeholder="placeholder"
                :style="styles"

                @input="updateValue($event.target.value)"
            >{{ value }}</textarea>

            <p v-if="maxlength" class="form-text text-muted">{{ count }} / {{ maxlength }} characters left</p>

            <p v-if="help" class="form-text text-muted">{{ help }}</p>
        </div>
    </div>
</template>

<script>
    import autosize from 'autosize';

    export default {
        name: 'ui-input',

        store: ['component'],

        data() {
            return {
                value: '',
                count: 0
            }
        },

        props: {
            val: {
                type: String,
                default: ''
            },
            large: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false
            },
            horizontal: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'text'
            },
            title: {
                type: String,
                default: null
            },
            disabled: {
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
            readonly: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
            rows: {
                type: Number,
                default: 3
            },
            cols: {
                type: Number,
                default: 20
            },
            maxlength: {
                type: Number,
                default: null
            },
            monospace: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            styles: function() {
                var styling = {};

                if (this.monospace == true) {
                    styling['font-family'] = 'monospace';
                }

                return styling;
            }
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

        watch: {
            value: function(newValue) {
                if (this.maxlength != null) {
                    this.count = this.maxlength - newValue.length;

                    if (this.count > this.maxlength) {
                        return newValue.substring(0, this.maxlength);
                    }
                }
            }
        },

        created() {
            this.value = this.val;
            this.count = this.maxlength;

            this.updateValue(this.value);
        },

        mounted() {
            autosize(this.$refs.textarea);
            autosize.update(this.$refs.textarea);
        }
    }
</script>
