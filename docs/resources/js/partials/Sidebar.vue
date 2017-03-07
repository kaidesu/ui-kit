<template>
    <div>
        <p><small>A lightweight and fast front-end framework to enhance Bootstrap 4 with Vue.js.</small></p>

        <hr>

        <ul class="nav nav-sidebar flex-column">
            <li class="nav-item">Getting Started</li>
            <li class="nav-link"><router-link to="/">Introduction</router-link></li>
            <li class="nav-link"><router-link to="/usage">Usage</router-link></li>

            <li class="nav-item">Components</li>
            <li class="nav-link"><router-link to="/ui-alert">UiAlert</router-link></li>
            <li class="nav-link"><router-link to="/ui-badge">UiBadge</router-link></li>
            <li class="nav-link"><router-link to="/ui-graph">UiGraph</router-link></li>

            <li class="nav-item">Graphs</li>
            <li class="nav-link"><router-link to="/graphs">Introduction</router-link></li>
            <li class="nav-link"><router-link to="/graph-line">Line Chart</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'partial-sidebar'
    }
</script>

<style lang="scss">
    .nav-sidebar {
        .nav-item {
            font-weight: bold;
            padding: .3em 0;
        }

        .nav-link {
            padding: .3em 1em;
            font-weight: normal;
            font-size: .95em;
        }
    }
</style>
