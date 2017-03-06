<template>
    <div class="tab-pane in" :class="{active: isActive}" v-show="isActive" role="tabpanel">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-tab',

        props: {
            name: {
                required: true,
                type: String
            },

            active: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                isActive: false
            }
        },

        computed: {
            href() {
                return '#' + this.name.toLowerCase().replace(/ /g, '-');
            }
        },

        created() {
            this.active = this.isActive;
        }
    }
</script>
