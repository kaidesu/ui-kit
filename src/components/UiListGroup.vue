<template>
    <div v-if="sortable">
        <input v-for="(item, index) in items" type="hidden" :name="name + '[' + index + ']'" :value="item">

        <ul class="list-group" :class="{'list-group-flush': flush}" v-sortable="{onUpdate: updateItems}">
            <slot></slot>
        </ul>
    </div>

    <div v-else>
        <ul class="list-group" :class="{'list-group-flush': flush}">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    var _ = require('lodash');

    export default {
        name: 'ui-list-group',

        data() {
            return {
                items: []
            }
        },

        props: {
            name: {
                type: String,
                default: ''
            },

            flush: {
                type: Boolean,
                default: false
            },

            sortable: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            updateItems(event) {
                this.items.splice(event.newIndex, 0, this.items.splice(event.oldIndex, 1)[0]);
            },

            populateItems() {
                let vm = this;

                if (this.$children.length) {
                    this.$children.forEach((component, index) => {
                        if (component.$options.name === 'ui-list-item') {
                            vm.items.push(component.id);
                        }
                    });
                }
            }
        },

        mounted() {
            this.populateItems();
        }
    }
</script>
