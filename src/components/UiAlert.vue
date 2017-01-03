<template>
    <div
        v-show="show"
        :class="{
            'alert': true,
            'alert-success': (type == 'success'),
            'alert-warning': (type == 'warning'),
            'alert-info': (type == 'info'),
            'alert-danger': (type == 'danger')
        }"
        transition="fade"
        role="alert"
    >
        <button
            v-show="dismissable"
            type="button"
            class="close"
            @click="show = false"
        >
            <span aria-hidden="true">&times;</span>
        </button>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            type: {
                type: String,
                default: "info"
            },
            dismissable: {
                type: Boolean,
                default: false
            },
            show: {
                type: Boolean,
                default: true
            },
            timeout: {
                type: Number,
                default: 5
            }
        },

        ready() {
            if (! this.dismissable) {
                setTimeout(
                    () => this.show = false,
                    (this.timeout * 1000)
                )
            }
        }
    }
</script>
