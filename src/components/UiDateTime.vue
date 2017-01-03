<template>
    <div class="input-group">
        <span class="input-group-btn">
            <a class="btn btn-secondary" data-toggle><i class="fa fa-calendar fa-fw"></i></a>
        </span>
        <input
            data-input
            v-model="value"
            :placeholder="placeholder"
            :name="name"
            :id="name"
            class="form-control"
        >
        <span class="input-group-btn">
            <a class="btn btn-secondary" data-clear><i class="fa fa-close fa-fw"></i></a>
        </span>
    </div>
</template>

<script>
    import Flatpickr from 'flatpickr';

    export default {
        data: function () {
            return {
                value: this.initialValue
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
            initialValue: {
                default: null
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

        mounted() {
            new Flatpickr(this.$el.querySelector('input'), {
                enableTime: this.time,
                altInput: Boolean(this.format),
                altFormat: this.format
            });
        }
    }
</script>
