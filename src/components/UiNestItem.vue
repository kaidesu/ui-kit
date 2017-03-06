<template>
    <li class="nest-group-item" :data-id="id">
        <div class="nest-item-handle">+</div>

        <div class="nest-item-content">
            <slot></slot>
        </div>

        <slot name="nested"></slot>
    </li>
</template>

<script>
    export default {
        name: 'ui-nest-item',

        props: {
            id: {
                type: String,
                required: true
            }
        }
    }
</script>
