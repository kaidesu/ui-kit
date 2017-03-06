<template>
    <div>
        <div :class="{'form-group': true, 'row': horizontal}">
            <label v-if="label" :class="{'col-input-label': horizontal, 'col-form-label': horizontal}" :for="name">{{ label }}</label>
        </div>

        <div class="form-group">
            <div class="markdown-box">
                <ul class="markdown-toolbar">
                    <li><a :class="{'active': editing}" @click="toggleViews" title="Edit Markdown"><i class="fa fa-pencil fa-fw"></i></a></li><li><a :class="{'active': previewing}" @click="toggleViews" title="Preview Markdown"><i class="fa fa-eye fa-fw"></i></a></li>
                </ul>

                <div class="markdown-block">
                    <ui-input :name="name" :val="val" type="textarea" monospace v-show="editing"></ui-input>

                    <div v-show="previewing">
                        <div class="card-block" v-html="preview"></div>

                        <div class="jumbotron" v-if="!preview">
                            <p class="text-center lead">Looks like you haven't written anything yet...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import marked from 'marked';
    import UiInput from './UiInput.vue';

    export default {
        name: 'ui-markdown',

        store: ['component'],

        data() {
            return {
                value: '',
                editing: true,
                previewing: false,
                preview: ''
            }
        },

        components: {
            'ui-input': UiInput
        },

        props: {
            val: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: null
            },
            horizontal: {
                type: Boolean,
                default: false
            },
            label: {
                type: String,
                default: null
            },
            help: {
                type: String,
                default: null
            }
        },

        created() {
            this.$events.listen('input', (event) => {
                if (event.id == this.name) {
                    let preview = marked(event.value, {
                        sanitize: true
                    });

                    this.preview = preview;
                }
            });
        },

        methods: {
            toggleViews() {
                var editing = this.editing;
                var previewing = this.previewing;

                this.editing = !this.editing;
                this.previewing = !this.previewing;
            }
        }
    }
</script>

<style lang="scss">
    .markdown-box {
        margin-left: -20px;
        margin-right: -20px;
    }

    .markdown-toolbar {
        border: 0;
        margin: 0 !important;
        box-shadow: none;
        background-color: #f5f5f5;
        padding: 1rem !important;
        z-index: auto !important;

        li {
            vertical-align: top;
            display: inline-block;
            margin: 0 !important;
            padding: 0 !important;
            outline: none;
            list-style: none !important;
        }

        li:first-child a {
            border-top-left-radius: 2px;
        }

        li a {
            font-size: 13px;
            display: block;
            text-align: center;
            padding: 15px 14px 14px;
            cursor: pointer;
            outline: none;
            border: none;
            line-height: 1;
            text-decoration: none;
            zoom: 1;
            color: #29323d;
        }

        li a:hover {
            background-color: #d5d8dd;
            color: #29323d;
        }

        li a.active,
        li a.active:hover {
            background-color: #737f8c;
            color: #fff;
        }
    }

    .markdown-block {
        margin-left: 15px;
        margin-right: 15px;
        border: 0;
        color: #47474f;
    }
</style>
