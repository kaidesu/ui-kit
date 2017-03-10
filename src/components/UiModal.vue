<template>
    <div>
        <div class="modal" :class="{'in': show}" :style="styles">
            <div
                class="modal-dialog"
                :class="{'modal-lg': large, 'modal-sm': small}"
                role="document"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" v-if="title">{{ title }}</h5>

                        <button type="button" class="close" aria-label="Close" @click="$UIevents.fire('toggle.modal.' + id)">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <slot name="body"></slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer"></slot>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal-backdrop fade show" v-if="show"></div>
    </div>
</template>

<script>
    import {u} from 'umbrellajs';

    export default {
        name: 'ui-modal',

        store: ['component'],

        data: function () {
            return {
                show: false,
                styles: {
                    display: 'none'
                }
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
                const body = document.body;

                if (val) {
                    this.styles.display = 'block';

                    u(body).addClass('modal-open');
                } else {
                    this.styles.display = 'none';

                    body.style.paddingRight = '0';

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
            this.$UIevents.listen('toggle.modal.' + this.id, () => {
                this.show = !this.show;
            });
        }
    }
</script>
