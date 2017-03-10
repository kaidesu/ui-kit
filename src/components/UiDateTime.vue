<template>
    <div class="input-group">
        <span class="input-group-btn">
            <a class="btn btn-secondary"><i class="fa fa-calendar fa-fw"></i></a>
        </span>
        <input
            :value="value"
            :placeholder="placeholder"
            :name="name"
            :id="name"
            class="form-control"

            @input="updateValue($event.target.value)"
        >
        <span class="input-group-btn">
            <a class="btn btn-secondary" @click="clear"><i class="fa fa-close fa-fw"></i></a>
        </span>
    </div>
</template>

<script>
    import Flatpickr from 'flatpickr';

    export default {
        name: 'ui-datetime',

        store: ['component'],

        data: function () {
            return {
                value: '',
                flatpickr: null
            }
        },

        props: {
            time: {
                type: Boolean,
                default: false
            },
            format: {
                default: false
            },
            val: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
        },

        methods: {
            clear() {
                this.flatpickr.clear();
            },

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
        },

        mounted() {
            this.flatpickr = new Flatpickr(this.$el.querySelector('input'), {
                enableTime: this.time,
                altInput: Boolean(this.format),
                altFormat: this.format
            });
        }
    }
</script>
