<template>
    <div>
        <h1>UiGraph</h1>
        <p class="lead">Visualize your data in 8 different ways; each of them animated and customisable.</p>

        <h3>Examples</h3>

        <div class="ui-example">
            <ui-graph
                name="example"
                type="line"
                :values="{
                    labels: ['Janruary', 'February', 'March', 'April', 'May'],
                    datasets: [
                        {
                            label: 'My First dataset',
                            lineTension: 0.1,
                            backgroundColor: 'rgba(75,192,192,0.4)',
                            borderColor: 'rgba(75,192,192,1)',
                            pointBorderColor: 'rgba(75,192,192,1)',
                            pointBackgroundColor: '#fff',
                            pointBorderWidth: 0,
                            pointHoverRadius: 6,
                            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                            pointHoverBorderColor: 'rgba(220,220,220,1)',
                            pointHoverBorderWidth: 2,
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                    ]
                }"
            ></ui-graph>
        </div>

        <div class="highlight">
            <pre v-highlightjs><code class="html">
&lt;ui-graph name="example"&gt;&lt;/ui-graph&gt;
            </code></pre>
        </div>

        <h3>API</h3>
        <div class="pt-3">
            <ui-tabs>
                <ui-tab name="Props">
                    <div class="pt-3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>name</td>
                                    <td>String</td>
                                    <td><i>Required</i></td>
                                    <td>
                                        <p>The name of the chart.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>type</td>
                                    <td>String</td>
                                    <td><code>"bar"</code></td>
                                    <td>
                                        <p>The type of chart to be rendered.</p>

                                        <p>Can be one of the following: <code>bar</code>, <code>line</code>, <code>radar</code>, <code>polarArea</code>, <code>pie</code>, <code>doughnut</code>, or <code>bubble</code>.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>values</td>
                                    <td>Object</td>
                                    <td><i>Required</i></td>
                                    <td>
                                        <p>The values or dataset for the given chart. Read more details within the respective <router-link to="/graphs">Graph Documentation</router-link> section.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>options</td>
                                    <td>Object</td>
                                    <td>
                                        <code>responsive: true</code>
                                    </td>
                                    <td>
                                        <p>The options for the given chart. Read more details within the respective <router-link to="/graphs">Graph Documentation</router-link> section.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ui-tab>
            </ui-tabs>
        </div>
    </div>
</template>

<script>
    import graphTooltip from '../../../../src/support/graph-tooltip.js';

    export default {
        name: 'view-ui-graph',

        data: function() {
            return {
                graphTooltip: graphTooltip
            }
        }
    }
</script>
