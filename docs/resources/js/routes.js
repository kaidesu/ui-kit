import VueRouter from 'vue-router';

let routes = [
    { path: '/', component: require('./views/Introduction') },
    { path: '/usage', component: require('./views/Usage') },

    { path: '/ui-alert', component: require('./views/UiAlert') },
    { path: '/ui-badge', component: require('./views/UiBadge') },
    { path: '/ui-graph', component: require('./views/UiGraph') },
    { path: '/ui-grid', component: require('./views/UiGrid') },
    { path: '/ui-modal', component: require('./views/UiModal') },

    { path: '/graphs', component: require('./views/Graphs') },
    { path: '/graph-line', component: require('./views/GraphLine') },
];

export default new VueRouter({
    routes
});
