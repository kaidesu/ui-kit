import './bootstrap';
import router from './routes';
import _ from 'lodash';
import {u} from 'umbrellajs';

// Partials
import Navbar from './partials/Navbar.vue';
import Sidebar from './partials/Sidebar.vue';

var docs = new Vue({
    el: '#docs',

    router,

    components: {
        'navbar': Navbar,
        'sidebar': Sidebar
    }
});
