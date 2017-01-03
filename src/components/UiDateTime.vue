<template>
    <ui-input
        :name="name"
        :brand="brand"
        :title="title"
        :required="required"
        :disabled="disabled"
        :placeholder="placeholder">
    </fx-input>
</template>

<script>
    import UiInput from './UiInput.vue';
    import Flatpickr from 'flatpickr';

    export default {
        components: {
            UiInput
        },

        props: {
            title: {
                type: String,
                default: null
            },
            options: {
                type: Object
            },
            value: {
                twoWay: true,
                default: null
            },
            brand: {
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
            showHelp: {
                type: Boolean,
                default: true
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
            }
        },

        mounted() {
            new Flatpickr(this.$el.querySelector('input'));
        }
    }
</script>
