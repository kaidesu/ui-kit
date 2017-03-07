<template>
    <div>
        <h1>Usage</h1>
        <p class="lead">Learn how to use UIKit in a variety of applications.</p>

        <h2>ES6</h2>

        <h3>Use Globally</h3>
        <p>Register the entire UIKit with Vue for global use:</p>

        <div class="highlight">
            <pre v-highlightjs><code class="javascript">
import Vue from 'vue';
import UIKit from 'ui-kit';

Vue.use(UIKit);

const app = new Vue({
    el: '#app',

    // All UIKit components will be automatically registered for you.
});
            </code></pre>
        </div>


        <h3>Use Components Individually</h3>
        <p>Pick and choose the exact components you need without the need to load the entire component library:</p>

        <div class="highlight">
            <pre v-highlightjs><code class="javascript">
import Vue from 'vue';
import { UiAlert, UiButton } from 'ui-kit';

const app = new Vue({
    el: '#app',

    components: {
        UiAlert,
        UiButton
    }
});
            </code></pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'view-home'
    }
</script>
