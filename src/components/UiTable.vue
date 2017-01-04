<template>
    <table class="table table-striped">
        <slot></slot>

        <thead>
            <tr>
                <th v-for="column in columns">
                    {{ column }}
                </th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="entry in data">
                <td v-for="(column, key) in columns" v-html="entry[key]"></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        data: function () {
            return {
                columns: [],
                data: []
            }
        },

        methods: {
            objectIsEmpty(obj) {
                for (let x in obj) { return false; }

                return true;
            },

            populateColumns() {
                let vm = this;

                if (this.$children.length) {
                    this.$children.forEach((component, index) => {
                        if (component.$options.name === 'ui-thead') {
                            let columns = component.$children[0].$children;
                            columns.forEach((column, index) => {
                                let title = '';

                                if (column.$slots.default) {
                                    title = column.$slots.default[0].text;
                                }

                                vm.columns.push(title);
                            });
                        }
                    })
                }
            },

            populateData() {
                let vm = this;

                if (this.$children.length) {
                    this.$children.forEach((component, index) => {
                        if (component.$options.name === 'ui-tbody') {
                            let rows = component.$children;

                            rows.forEach((row, index) => {
                                let rowData = [];

                                row.$children.forEach((data) => {
                                    let value = '';
                                    let rowText = '';
                                    let rowRawHTML = '';

                                    if (! vm.objectIsEmpty(data.$slots)) {
                                        rowText = data.$slots.default[0].text;
                                        rowRawHTML = data.$slots.default[0].elm.outerHTML;

                                        if (rowText == undefined) {
                                            value = rowRawHTML;
                                        } else {
                                            value = rowText;
                                        }
                                    }

                                    rowData.push(value);
                                });

                                vm.data.push(rowData);
                            });
                        }
                    });
                }
            }
        },

        mounted() {
            this.populateColumns();
            this.populateData();
        }
    }
</script>
