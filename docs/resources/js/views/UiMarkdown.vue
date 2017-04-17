<template>
    <div>
        <h1>UiMarkdown</h1>
        <p class="lead">Provide an editor to write in markdown, a minimal syntax for marking up documents with formatting, using puncuation and special characters.</p>

        <h3>Examples</h3>
        <div class="ui-example">
            <ui-markdown name="example" val="
Inventors have long dreamed of creating machines that think. This desire dates back to at least the time of ancient Greece. The mythical figures Pygmalion Daedalus, and Hephaestus may all be interpreted as legendary inventors, and Galatea, Talos, and Pandora may all be regarded as artificial life \(_Ovid and Martin, 2004; Sparkes, 1996; Tandy, 1997_\).

When programmable computers were first conceived, people wondered whether such machines might become intelligent, over a hundred years before one was built \(Lovelace, 1842\). Today, **artificial intelligence **\(AI\) is a thriving field with many practical applications and active research topics. We look to intelligent software to automate routine labor, understand speech or images, make diagnoses in medicine and support basic scientific research.

In the early days of artificial intelligence, the field rapidly tackled and solved problems that are intellectually difficult for human beings but relatively straight-forward for computers -- problems that can be described by a list of formal, mathematical rules. The true challenge to artificial intelligence proved to be solving the tasks that are easy for people to perform but hard for people to describe formally -- problems that we solve intuitively, that feel automatic, like recognizing spoken words or faces in images.
            "></ui-markdown>
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
                                        <p>The name of the Markdown field.</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td>val</td>
                                    <td>String</td>
                                    <td></td>
                                    <td>
                                        <p>The initial value to be passed through when creating a new instance of the Markdown editor.</p>
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
