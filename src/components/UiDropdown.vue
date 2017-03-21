<template>
    <div class="dropdown" :class="{ 'show': show }">
        <button class="btn btn-primary dropdown-toggle" type="button" @click="toggleDropdown($event)" :class="{
                'btn-success': (type == 'success'),
                'btn-warning': (type == 'warning'),
                'btn-info': (type == 'info'),
                'btn-danger': (type == 'danger'),
                'btn-secondary': (type == 'secondary'),
                'btn-lg': large,
                'btn-sm': small
            }">
            <span v-html="name"></span>
        </button>

        <div class="dropdown-menu" :class="{'dropdown-menu-right': right}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ui-dropdown',

        data() {
            return {
                show: false
            }
        },

        props: {
            name: {
                type: String,
                required: true
            },

            type: {
                type: String,
                default: 'secondary'
            },

            large: {
                type: Boolean,
                default: false
            },

            small: {
                type: Boolean,
                default: false
            },

            right: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            toggleDropdown(event) {
                var showing = this.show;

                this.$UIevents.fire('hide.dropdown');

                this.show = ! showing;

                if (this.show) {
                    this.$UIevents.fire('show.dropdown');
                    event.stopPropagation();
                } else {
                    this.$UIevents.fire('hidden.dropdown');
                }
            }
        },

        created() {
            this.$UIevents.on('hide.dropdown', () => {
                this.show = false;
            });
        }
    }
</script>
