<template>
    <div>
        <h1>UiInput</h1>
        <p class="lead">Create your base input fields with ease.</p>

        <h3>Examples</h3>
        <div class="ui-example">
            <ui-input name="example1"></ui-input>
            
            <ui-slug delimiter="."></ui-slug>
            
            <ui-input name="example2" val="Hello Universe!" large required></ui-input>

            <ui-input type="textarea" name="example3"></ui-input>
            <ui-input type="textarea" name="example4" val="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></ui-input>
            
            <ui-slug watch="example1"></ui-slug>
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
        name: 'view-ui-input'
    }
</script>
