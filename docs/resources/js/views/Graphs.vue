<template>
    <div>
        <h1>Graphs</h1>
        <p class="lead">Learn how to utilize, pass data, and customize each chart type.</p>

        <p>
            The UiGraph component utilizes the awesome <a href="http://www.chartjs.org">Chart.js</a> library to render beautiful graphs of varying types.
        </p>

        <h2>Chart Configuration</h2>
        <p>
            Chart.js provides a number of options for changing the behaviour of created charts. These configuration options can be changed on a per chart basis by passing in an options object when creating the chart.
        </p>

        <h3>Chart Data</h3>
        <p>
            To display data, the chart must be passed a data object that contains all of the information needed by the chart. The data object can contain the following parameters:
        </p>

        <table class="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td>datasets</td>
                    <td>Array</td>
                    <td>
                        <p>
                            Contains data for each dataset. See the documention for each chart type to determine the valid options that can be attached to the dataset.
                        </p>
                    </td>
                </tr>

                <tr>
                    <td>labels</td>
                    <td>Array</td>
                    <td>
                        <p>
                            Optional parameter that is used with the <strong>category axis</strong>.
                        </p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'view-graphs'
    }
</script>
