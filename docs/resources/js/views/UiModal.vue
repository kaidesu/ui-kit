<template>
    <div>
        <h1>UiModal</h1>
        <p class="lead">Modals are streamlined, but flexible dialog prompts. They support a number of use cases from user notification to completely custom content and feature a handful of helpful subcomponents, sizes, and more.</p>

        <h3>Examples</h3>
        <p>To toggle the show/hide property of a given modal, we'll make use of the <code>v-ui-modal</code> directive.</p>

        <div class="ui-example">
            <button type="button" class="btn btn-primary" v-ui-modal:demo-modal>Launch Demo Modal</button>

            <ui-modal id="demo-modal" title="Modal Title">
                <div slot="body">
                    Woohoo, you're reading this text in a modal!
                </div>

                <div slot="footer">
                    <button type="button" class="btn btn-secondary" v-ui-modal:demo-modal>Close</button>
                </div>
            </ui-modal>
        </div>

        <div class="highlight">
            <pre v-highlightjs><code class="html">
&lt;button type="button" class="btn btn-primary" v-ui-modal:demo-modal&gt;Launch Demo Modal&lt;/button&gt;

&lt;ui-modal id="demo-modal" title="Modal Title"&gt;
    &lt;div slot="body"&gt;
        Woohoo, you're reading this text in a modal!
    &lt;/div&gt;

    &lt;div slot="footer"&gt;
        &lt;button type="button" class="btn btn-secondary" v-ui-modal:demo-modal&gt;Close&lt;/button&gt;
    &lt;/div&gt;
&lt;/ui-modal&gt;
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
                                    <td><code>id</code></td>
                                    <td>String</td>
                                    <td><i>Required</i></td>
                                    <td>
                                        <p>The ID of the modal. Used in reference with the <code>v-ui-modal</code> directive to toggle the modal.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td><code>title</code></td>
                                    <td>String</td>
                                    <td><i>Required</i></td>
                                    <td>
                                        <p>The title of the modal.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td><code>large</code></td>
                                    <td>Boolean</td>
                                    <td><code>false</code></td>
                                    <td>
                                        <p>Whether or not the modal should be rendered as a large modal.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td><code>small</code></td>
                                    <td>Boolean</td>
                                    <td><code>false</code></td>
                                    <td>
                                        <p>Whether or not the modal should be rendered as a small modal.</p>
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
                                    <td><code>body</code></td>
                                    <td>Content for the body of the modal.</td>
                                </tr>

                                <tr>
                                    <td><code>footer</code></td>
                                    <td>Content for the footer of the modal. Best used for things like buttons to close/save content within the modal.</td>
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
        name: 'view-ui-modal'
    }
</script>
