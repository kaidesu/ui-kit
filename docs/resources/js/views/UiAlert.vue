<template>
    <div>
        <h1>UiAlert</h1>
        <p class="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p>

        <h3>Examples</h3>
        <div class="pt-3">
            <ui-alert type="success">
                <strong>Well done!</strong> You successfully read this important alert message.
            </ui-alert>

            <ui-alert>
                <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
            </ui-alert>

            <ui-alert type="warning">
                <strong>Warning!</strong> Better check yourself, you're not looking too good.
            </ui-alert>

            <ui-alert type="danger">
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
            </ui-alert>
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
                                    <td><code>"info"</code></td>
                                    <td>
                                        <p>The type of the alert. Sets the contextual class required to determine the look and feel of the alert.</p>
                                        <p>Can be one of the following: <code>info</code>, <code>success</code>, <code>warning</code>, or <code>danger</code>.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>dismissible</td>
                                    <td>Boolean</td>
                                    <td><code>true</code></td>
                                    <td>
                                        <p>Whether or not the alert shows a dismissible icon to close the alert manually.</p>
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
                                    <td>Holds the content for the alert.</td>
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
    import UiAlert from '../../../../src/components/UiAlert';
    import UiTabs from '../../../../src/components/UiTabs';
    import UiTab from '../../../../src/components/UiTab';

    export default {
        name: 'view-ui-alert',

        components: {
            UiAlert,
            UiTab,
            UiTabs
        }
    }
</script>
