<template>
    <canvas :id="name"></canvas>
</template>

<script>
    import Chart from 'chart.js';

    export default {
        name: 'ui-graph',

        props: {
            name: {
                type: String,
                required: true
            },

            type: {
                type: String,
                default: 'bar'
            },

            values: {
                required: true
            }
        },

        mounted() {
            var context = this.$el.getContext('2d');

            new Chart(context, {
                type: this.type,

                data: this.values,

                options: {
                    responsive: true
                }
            });
        }
    }
</script>
