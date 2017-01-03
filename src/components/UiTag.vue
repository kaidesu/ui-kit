<template>
    <span
        :class="{
            'tag': true,
            'tag-pill': pill,
            'tag-default': (type == 'default'),
            'tag-primary': (type == 'primary'),
            'tag-success': (type == 'success'),
            'tag-warning': (type == 'warning'),
            'tag-info': (type == 'info'),
            'tag-danger': (type == 'danger')
        }"
    >
        <slot></slot>
    </span>
</template>

<script>
    export default {
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
