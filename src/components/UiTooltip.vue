<template>
    <span>
        <span class="tooltip-trigger" ref="trigger">
            <slot></slot>
        </span>

        <div class="tooltip" :class="tooltipAlignment" ref="tooltip">
            <div class="tooltip-inner">
                <div class="tooltip-arrow"></div>

                <div class="tooltip-content">
                    <span v-html="text" v-if="text"></span>
                    <slot name="content" v-if="!text"></slot>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
    import Tether from 'tether';
    import {u} from 'umbrellajs';

    export default {
        name: 'ui-tooltip',

        data() {
            return {
                show: false,
                trigger: null,
                tooltip: null,
            }
        },

        computed: {
            tooltipAlignment() {
                return !this.position || this.position === `default` ? `tooltip-top` : `tooltip-${this.position}`
            }
        },

        props: {
            position: {
                type: String,
                default: 'top'
            },

            text: {
                type: String,
                default: ''
            }
        },

        methods: {
            toggle(e, newState) {
                this.show = (typeof newState !== 'undefined') ? newState : !this.show;

                if (this.show) {
                    // Show the tooltip
                    let position = this.setPosition();

                    u(this._tooltip).addClass('show');

                    this._tether = new Tether({
                        element: this._tooltip,
                        target: this._trigger,
                        attachment: position.attachment,
                        targetAttachment: position.targetAttachment
                    });
                } else {
                    // Hide the tooltip
                    if (this._tether) {
                        u(this._tooltip).removeClass('show');
                        this._tether.destroy();
                    }
                }
            },

            handleEvent(e) {
                e.stopPropagation();

                if (e.type === 'mouseenter') {
                    this.toggle(e, true);
                } else {
                    this.toggle(e, false);
                }
            },

            setPosition() {
                return {
                    attachment: 'bottom center',
                    targetAttachment: 'top center'
                }
            }
        },

        mounted() {
            this._trigger = this.$refs.trigger;
            this._tooltip = this.$refs.tooltip;

            const _this = this;

            this._trigger.addEventListener('mouseenter', (e) => _this.handleEvent(e));
            this._trigger.addEventListener('mouseleave', (e) => _this.handleEvent(e));
        }
    }
</script>

<style lang="scss">
    .tooltip {
        display: none;
        &.show {
            display: block;
        }
    }
</style>
