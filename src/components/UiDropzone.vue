<template>
    <form :action="url" class="dropzone" :id="id"></form>
</template>

<script>
    var Dropzone = require('dropzone');

    Dropzone.autoDiscover = false;

    export default {
        name: 'ui-dropzone',

        props: {
            id: {
                type: String,
                required: true
            },

            url: {
                type: String,
                required: true
            }
        },

        methods: {
            removeAllFiles: function() {
                this.dropzone.removeAllFiles(true)
            },

            processQueue: function() {
                this.dropzone.processQueue()
            }
        },

        mounted() {
            let element = this.$el;
            let vm = this;

            this.dropzone = new Dropzone(element, {
                //
            });

            this.dropzone.on('addedfile', function(file) {
                vm.$events.fire('dropzone-fileadded', file);
            });

            this.dropzone.on('removedfile', function(file) {
                vm.$events.fire('dropzone-fileremoved', file);
            });

            this.dropzone.on('success', function(file, response) {
                vm.$events.fire('dropzone-succcess', file, response);
            });

            this.dropzone.on('error', function(file, error, xhr) {
                vm.$events.fire('dropzone-error', file, error, xhr);
            });

            this.dropzone.on('sending', function(file, xhr, formData) {
                vm.$events.fire('dropzone-sending', file, xhr, formData);
            });
        }
    }
</script>

<style>

</style>
