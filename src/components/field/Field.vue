<template>
    <div class="form-group" :class="{'row': horizontal, 'required': required}">
        <label v-if="label" :class="{'col-input-label': horizontal, 'col-form-label': horizontal}">{{ label }}</label>
        
        <div :class="{'col': horizontal}">
            <slot></slot>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'ui-field',
        
        props: {
            help: {
                type: String,
                default: null
            },
            horizontal: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: null
            },
            required: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
