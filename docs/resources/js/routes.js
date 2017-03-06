import VueRouter from 'vue-router';

let routes = [
    {
        path: '/',
        component: require('./views/Introduction')
    },

    {
        path: '/usage',
        component: require('./views/Usage')
    },

    {
        path: '/ui-alert',
        component: require('./views/UiAlert')
    }
];

export default new VueRouter({
    routes
});
