<template>
    <div class="form-group" :class="{'row': horizontal, 'required': required}">
        <label v-if="label" :class="{'col-input-label': horizontal, 'col-form-label': horizontal}" :for="name">{{ label }}</label>
        <div :class="{'col': horizontal}">
            <select
                class="form-control"
                ref="select"
                v-model="selected"
                :class="{'form-control-lg': large, 'form-control-sm': small}"
                :name="name"
                :multiple="multiple"
            >
                <option v-if="placeholder"
                    :value="null"
                    selected
                    disabled
                    hidden
                >
                    {{ placeholder }}
                </option>
            
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
                selected: this.value
            }
        },
        
        props: {
            large: {
                type: Boolean,
                default: false
            },
            multiple: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
            small: {
                type: Boolean,
                default: false
            },
            value: {
                type: [String, Number, Boolean, Object, Array, Symbol, Function],
                default: null
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
        
        watch: {
            value(value) {
                this.selected = value
            },
            
            selected(value) {
                this.$set(this.component, this.name, value)
                
                this.$UIevents.fire('input', {
                    id: this.name,
                    value: value
                })
            }
        },
        
        mounted() {
            this.$set(this.component, this.name, this.value)
        }
    }
</script>
