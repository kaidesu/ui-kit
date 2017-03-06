<template>
    <div>
        <input type="hidden" :name="name" v-model="ordering">

        <div class="nest-group" :id="name">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import nestable from '../../node_modules/nestable/jquery.nestable';

    export default {
        name: 'ui-nest-group',

        data() {
            return {
                ordering: ''
            }
        },

        props: {
            name: {
                type: String,
                require: true
            }
        },

        methods: {
            updateOrdering(e) {
                let list = e.length ? e : $(e.target);

                this.ordering = window.JSON.stringify(list.nestable('serialize'));
            }
        },

        mounted() {
            var vm = this;

            let nestable = $('#' + this.name).nestable({
                serialize: true,
                rootClass: 'nest-group',
                listClass: 'nest-list',
                itemClass: 'nest-group-item',
                handleClass: 'nest-item-handle',
                emptyClass: 'nest-item-empty',
                placeClass: 'nest-item-placeholder'
            });

            this.updateOrdering(nestable);

            $('#' + this.name).on('change', function(e) {
                vm.updateOrdering(e);
            });
        }
    }
</script>

<style lang="scss">
    .dd-dragel {
        position: absolute;
        pointer-events: none;
        z-index: 9999;
    }

    .dd-dragel > .nest-group-item .nest-item-handle {
        margin-top: 0;
    }

    .nest-group {
        position: relative;
        display: block;
        margin: 0;
        padding: 0;
        list-style: none;
        line-height: 1;
    }

    .nest-list {
        display: block;
        position: relative;
        margin: 0;
        padding: 0;
        list-style: none;

        .nest-list {
            padding-left: 40px;
        }
    }

    .nest-group-item {
        display: block;
        position: relative;
        margin: 0;
        padding: 0;

        > button {
            background: transparent;
            border: 0;
            display: block;
            position: relative;
            text-indent: 100%;
            padding: 0;
            white-space: nowrap;
            margin: 5px 0;
            margin-left: 40px;
            overflow: hidden;
            float: left;
            text-align: center;
            line-height: 1;
            width: 40px;
            height: 30px;
            font-size: 13px;
            cursor: pointer;
        }

        > button[data-action=collapse]:before {
            content: '-';
        }

        > button:before {
            content: '+';
            display: block;
            position: absolute;
            width: 100%;
            text-align: center;
            text-indent: 0;
        }

        .nest-item-handle {
            position: absolute;
            display: block;
            margin: 0;
            left: 0;
            top: 0;
            cursor: pointer;
            width: 40px;
            text-indent: 100%;
            white-space: nowrap;
            overflow: hidden;
            border: 1px solid #ebebeb;
            background: #fff;
            height: 100%;
            padding: 12px;

            &:before {
                content: '\2261';
                display: block;
                position: absolute;
                left: 0;
                width: 100%;
                text-align: center;
                text-indent: 0;
                color: #ccc;
            }
        }

        .nest-item-content {
            display: block;
            margin: 5px 0;
            padding: 5px 10px 5px 50px;
            height: 100%;
            text-decoration: none;
            border: 1px solid #ebebeb;
            background: #fff;
        }
    }

    .nest-item-empty,
    .nest-item-placeholder {
        margin: 5px 0;
        padding: 0;
        background: #f5f5f5;
        border: none;
        box-sizing: border-box;
    }
</style>
