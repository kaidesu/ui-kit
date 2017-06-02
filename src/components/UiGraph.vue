<template>
    <canvas :id="name"></canvas>
</template>

<script>
    import Chart from 'chart.js';
    import graphTooltip from '../support/graph-tooltip.js';

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
                type: Object,
                default: [],
                required: true
            },

            options: {
                type: Object,
                default: function () {
                    return { 
                        responsive: true
                    }
                }
            }
        },

        mounted() {
            var context = this.$el.getContext('2d');

            new Chart(context, {
                type: this.type,

                data: this.values,

                options: this.options
                
            });
        },
    }
</script>
