<template>
    <option :value="value" :selected="selected"><slot></slot></option>
</template>

<script>
    export default {
        name: 'ui-option',

        store: ['component'],

        data() {
            return {
                selected: false
            }
        },

        props: {
            value: {
                type: String,
                required: true
            }
        },

        mounted() {
            let select = this;

            while (select && select._select !== true && select.$parent) {
                select = select.$parent;
            }

            if (! select._select) {
                this._select = {};

                console.warn('Warning: "ui-option" depends on "ui-select" to work properly.');
            } else {
                if (select.value === this.value) {
                    this.selected = true;
                }

                select.options.push(this);

                this._select = select;
            }
        }
    }
</script>
