<template>
    <div :class="{row: vertical}">
        <ul class="nav" :class="{'nav-tabs': !pill, 'nav-pills': pill, 'nav-justified': justify}" v-if="!vertical">
            <li v-for="tab in tabs" class="nav-item">
                <a
                    :href="tab.href"
                    :class="{'nav-link': true, 'active': tab.isActive}"
                    role="tab"
                    @click.prevent="selectTab(tab)"
                >{{ tab.name }}</a>
            </li>
        </ul>

        <div class="col-3" v-else>
            <div class="list-group">
                <a v-for="tab in tabs" :href="tab.href" :class="{'list-group-item': true, 'list-group-item-action': true, 'active': tab.isActive}" @click.prevent="selectTab(tab)">
                    {{ tab.name }}
                </a>
            </div>
        </div>

        <div class="tab-content" :class="{col: vertical}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ui-tabs',

        data() {
            return {
                tabs: []
            }
        },

        props: {
            vertical: {
                type: Boolean,
                default: false
            },

            pill: {
                type: Boolean,
                default: false
            },

            justify: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            selectTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name == selectedTab.name);
                })
            }
        },

        mounted() {
            this.tabs[0].isActive = true;
        },

        created() {
            this.tabs = this.$children;
        }
    }
</script>
