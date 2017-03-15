<template>
    <div>
        <h1>UiGrid</h1>
        <p class="lead">A lightweight, Excel inspired grid component to easily build dashboards with.</p>

        <h2>Examples</h2>
        <div class="ui-example">
            <div class="dashboard">
                <ui-grid position="a1:b1">
                    <div class="bg-danger text-white">
                        <!-- <div class=""> -->
                            <p class="text-center">a1:b1</p>
                        <!-- </div> -->
                    </div>
                </ui-grid>

                <ui-grid position="c1">
                    <div class="bg-success text-white">
                        <p class="text-center">c1</p>
                    </div>
                </ui-grid>

                <ui-grid position="c3">
                    <div class="bg-primary text-white">
                        <p class="text-center">c3</p>
                    </div>
                </ui-grid>

                <ui-grid position="c2">
                    <div class="bg-warning text-white">
                        <p class="text-center">c2</p>
                    </div>
                </ui-grid>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'view-ui-grid'
    }
</script>
