<template>
    <li
        :id="id"
        class="list-group-item"
        :class="{'disabled': disabled, 'active': active, }"
    >
        <slot></slot>
    </li>
</template>

<script>
    export default {
        name: 'ui-list-item',

        props: {
            id: {
                type: String,
                default: ''
            },

            active: {
                type: Boolean,
                default: false
            },

            disabled: {
                type: Boolean,
                default: false
            },

            type: {
                type: String,
                default: ''
            }
        }
    }
</script>
