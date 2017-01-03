<template>
    <div class="modal fade">
        <div
            class="modal-dialog"
            :class="{'modal-lg': large, 'modal-sm': small}"
            role="document"
        >
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" aria-label="Close" @click="this.$events.fire('toggle.modal' + id)">
                        <span aria-hidden="true">&times;</span>
                    </button>

                    <h4 class="modal-title" v-if="title">{{ title }}</h4>
                </div>

                <slot></slot>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" @click="close">{{ cancelText }}</button>
                    <button type="button" class="btn btn-primary" @click="callback">{{ okText }}</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {u} from 'umbrellajs';

    export default {
        data: function () {
            return {
                show: false
            }
        },

        props: {
            id: {
                type: String
            },
            okText: {
                type: String,
                default: "Save"
            },
            cancelText: {
                type: String,
                default: "Cancel"
            },
            title: {
                type: String
            },
            callback: {
                type: Function,
                default() {}
            },
            large: {
                type: Boolean,
                default: false
            },
            small: {
                type: Boolean,
                default: false
            }
        },

        watch: {
            show(val) {
                const el = this.$el;
                const body = document.body;

                if (val) {
                    el.style.display = 'block';
                    setTimeout(() => u(el).addClass('in'), 0);

                    u(body).addClass('modal-open');
                } else {
                    el.style.display = 'none';
                    body.style.paddingRight = '0';
                    setTimeout(() => u(el).removeClass('in'), 0);

                    u(body).removeClass('modal-open');
                }
            }
        },

        methods: {
            close() {
                this.show = false;
            }
        },

        created() {
            this.$events.listen('toggle.modal.' + this.id, () => {
                this.show = !this.show;
            });
        }
    }
</script>
