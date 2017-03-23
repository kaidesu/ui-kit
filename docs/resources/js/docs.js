import './bootstrap';
import router from './routes';
import UIKit from '../../../dist/ui-kit.js';

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
