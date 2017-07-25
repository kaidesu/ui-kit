<template>
    <div>
        <h1>UiWysiwyg</h1>
        <p class="lead">Provide a smooth and clean design, limitless flexibility and extensibility, simple and super-efficient WYSIWYG editor.</p>

        <h3>Examples</h3>
        <div class="ui-example">
            <ui-wysiwyg name="example"></ui-wysiwyg>
        </div>

        <div class="highlight">
            <pre v-highlightjs><code class="html">

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
                                        <p>The name of the WYSIWYG field.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>val</td>
                                    <td>String</td>
                                    <td></td>
                                    <td>
                                        <p>The initial value to be passed through when creating a new instance of the WYSIWYG.</p>
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
    export default {
        name: 'view-ui-wysiwyg'
    }
</script>
