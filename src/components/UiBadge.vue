<template>
    <span
        :class="{
            'badge': true,
            'badge-pill': pill,
            'badge-default': (type == 'default'),
            'badge-primary': (type == 'primary'),
            'badge-success': (type == 'success'),
            'badge-warning': (type == 'warning'),
            'badge-info': (type == 'info'),
            'badge-danger': (type == 'danger')
        }"
    >
        <slot></slot>
    </span>
</template>

<script>
    export default {
        name: 'ui-badge',

        props: {
            type: {
                type: String,
                default: 'default'
            },
            pill: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
