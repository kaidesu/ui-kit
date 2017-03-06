<template>
    <div
        class="progress-bar"
        role="progressbar"
        :id="name"
        :class="{
            'progress-bar-striped': striped,
            'progress-bar-animated': animated,
            'bg-primary': (type == 'primary'),
            'bg-success': (type == 'success'),
            'bg-warning': (type == 'warning'),
            'bg-info': (type == 'info'),
            'bg-danger': (type == 'danger')
        }"
        :style="styles"
        :aria-valuenow="value"
        :aria-valuemin="min"
        :aria-valueman="max">
    </div>
</template>

<script>
    export default {
        name: 'ui-progress-bar',

        store: ['component'],

        data() {
            return {
                value: '0',
                styles: {
                    width: '0'
                }
            }
        },

        props: {
            name: {
                type: String,
                required: true
            },
            val: {
                type: String,
                default: '0'
            },

            min: {
                type: String,
                default: '0'
            },

            max: {
                type: String,
                default: '100'
            },

            type: {
                type: String,
                default: 'primary'
            },

            striped: {
                type: Boolean,
                default: false
            },

            animated: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            updateValue(value) {
                this.$set(this.component, this.name, value);

                this.value = value;
                this.styles.width = value + '%';

                this.$events.fire('input', {
                    id: this.name,
                    value: this.value
                });
            }
        },

        created() {
            this.value = this.val;

            this.updateValue(this.value);
        }
    }
</script>
