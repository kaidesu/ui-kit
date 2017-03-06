<template>
    <div class="form-group" :class="{'row': horizontal}">

        <label v-if="label" :class="{'col-input-label': horizontal, 'col-form-label': horizontal}" :for="name">{{ label }}</label>

        <div :class="{'col': horizontal}">
            <select
                :class="{'form-control': true, 'form-control-lg': large, 'form-control-sm': small}"
                :name="name"
                @change="updateValue($event.target.value, $event)"
            >
                <slot></slot>
            </select>

            <p v-if="help" class="form-text text-muted" v-html="help"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ui-select',

        store: ['component'],

        data() {
            return {
                options: [],
                show: false,
                value: 0
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
            readonly: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            }
        },

        created() {
            this._select = true;

            this.value = this.val;

            this.updateValue(this.value);
        },

        methods: {
            updateValue(value, event) {
                this.$set(this.component, this.name, value);

                this.value = value;

                this.$events.fire('input', {
                    id: this.name,
                    value: this.value
                });

                if (typeof event !== 'undefined') {
                    this.$nextTick(function () {
                        event.target.value = this.value;
                    });
                }
            },
        }
    }
</script>
