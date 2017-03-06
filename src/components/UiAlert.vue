<template>
    <div
        v-show="visible"
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
            v-show="dismissible"
            type="button"
            class="close"
            @click="visible = false"
        >
            <span aria-hidden="true">&times;</span>
        </button>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-alert',

        data() {
            return {
                visible: true
            }
        },

        props: {
            type: {
                type: String,
                default: "info"
            },
            dismissible: {
                type: Boolean,
                default: false
            },
            show: {
                type: Boolean,
                default: true
            },
            timeout: {
                type: Number,
                default: 0
            }
        },

        mounted() {
            this.visible = this.show;

            if (! this.dismissible && this.timeout > 0) {
                setTimeout(
                    () => this.visible = false,
                    (this.timeout * 1000)
                )
            }
        }
    }
</script>
