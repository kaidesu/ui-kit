<template>
    <div class="collapse" :class="{show: show}" :id="id">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'ui-collapse',

        data() {
            return {
                show: false
            }
        },

        props: {
            id: {
                type: String,
                required: true
            }
        },

        methods: {
            toggle() {
                this.show = !this.show;
            }
        },

        created() {
            this.$UIevents.listen('toggle.collapse.' + this.id, () => {
                this.toggle();
            });
        },
    }
</script>
