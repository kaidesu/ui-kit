<template>
    <div>
        <h1>Line Chart</h1>
        <p class="lead">A line chart is a way of plotting data points on a line. Often, it is used to show trend data, and the comparison of two data sets.</p>

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
                            pointBorderWidth: 3,
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
    </div>
</template>

<script>
    export default {
        name: 'view-graph-line'
    }
</script>
