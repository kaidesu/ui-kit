<template>
    <div :class="{'form-group': true, 'row': horizontal}">
        <label v-if="label" :class="{'col-input-label': horizontal, 'col-form-label': horizontal}" :for="name">{{ label }}</label>

        <div :class="{'col': horizontal}">
            <input class="form-control"
                ref="slug"
                type="text"
                :value="value"
                :name="name"
                :id="name"

                @input="updateValue($event.target.value)"
            >

            <p v-if="showHelp" class="form-text text-muted">{{ help }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ui-slug',

        store: ['component'],

        data() {
            return {
                value: '',
                manuallyChanged: false
            }
        },

        props: {
            watch: {
                required: true,
                type: String
            },
            name: {
                type: String,
                default: 'slug'
            },
            val: {
                type: String,
                default: ''
            },
            help: {
                type: String,
                default: null
            },
            showHelp: {
                type: Boolean,
                default: true
            },
            label: {
                type: String,
                default: null
            },
            horizontal: {
                type: Boolean,
                default: false
            },
            delimiter: {
                type: String,
                default: '-',
            }
        },

        methods: {
            updateValue(value) {
                value = this.slugify(value);

                this.$set(this.component, this.name, value);
                this.value = value;
                this.manuallyChanged = true;
            },

            slugify(value) {
                return value.toString().toLowerCase()
                    .replace(/\s+/g, this.delimiter)    // Replace spaces with delimiter
                    .replace(/[^\w\-]+/g, '')           // Remove all non-word characters
                    .replace(/\-\-+/g, this.delimiter)  // Replace multiple delimiters with a single one
                    .replace(/^-+/, '')                 // Trim from beginning of value
                    .replace(/-+$/, '');                // Trim from ending of value
            }
        },

        created() {
            this.value = this.slugify(this.val);
            this.$set(this.component, this.name, this.value);

            this.$events.listen('input', (event) => {
                if (this.manuallyChanged == false && event.id == this.watch) {
                    let value = this.slugify(event.value);
                    this.value = value;

                    this.$set(this.component, this.name, value);
                }
            });
        }
    }
</script>
