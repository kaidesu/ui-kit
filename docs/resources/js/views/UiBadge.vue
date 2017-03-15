<template>
    <div>
        <h1>UiBadge</h1>
        <p class="lead">Small and adaptive tag for adding context to just about any content.</p>

        <h3>Examples</h3>
        <p>Badges scale to match the size of the immediate parent element by using relative font sizing and em units.</p>

        <div class="ui-example">
            <h1>Example heading <ui-badge>New</ui-badge></h1>
            <h2>Example heading <ui-badge>New</ui-badge></h2>
            <h3>Example heading <ui-badge>New</ui-badge></h3>
            <h4>Example heading <ui-badge>New</ui-badge></h4>
            <h5>Example heading <ui-badge>New</ui-badge></h5>
            <h6>Example heading <ui-badge>New</ui-badge></h6>
        </div>

        <div class="highlight">
            <pre v-highlightjs><code class="html">
&lt;h1&gt;Example heading &lt;ui-badge&gt;New&lt;/ui-badge&gt;&lt;/h1&gt;
&lt;h2&gt;Example heading &lt;ui-badge&gt;New&lt;/ui-badge&gt;&lt;/h2&gt;
&lt;h3&gt;Example heading &lt;ui-badge&gt;New&lt;/ui-badge&gt;&lt;/h3&gt;
&lt;h4&gt;Example heading &lt;ui-badge&gt;New&lt;/ui-badge&gt;&lt;/h4&gt;
&lt;h5&gt;Example heading &lt;ui-badge&gt;New&lt;/ui-badge&gt;&lt;/h5&gt;
&lt;h6&gt;Example heading &lt;ui-badge&gt;New&lt;/ui-badge&gt;&lt;/h6&gt;
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
                                    <td>type</td>
                                    <td>String</td>
                                    <td><code>"default"</code></td>
                                    <td>
                                        <p>The type of the badge. Sets the contextual class required to determine the look and feel of the badge.</p>
                                        <p>Can be one of the following: <code>default</code>, <code>info</code>, <code>success</code>, <code>warning</code>, or <code>danger</code>.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>pill</td>
                                    <td>Boolean</td>
                                    <td><code>false</code></td>
                                    <td>
                                        <p>Whether or not the badge should be rendered as a pill.</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </ui-tab>

                <ui-tab name="Slots">
                    <div class="pt-3">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td><i>default</i></td>
                                    <td>Holds the content for the badge.</td>
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
    export default {
        name: 'view-ui-badge'
    }
</script>
