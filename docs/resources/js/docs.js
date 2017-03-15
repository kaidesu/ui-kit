import './bootstrap';
import router from './routes';

import UIKit from '../../../src/ui-kit.js';

// Partials
import Navbar from './partials/Navbar.vue';
import Sidebar from './partials/Sidebar.vue';

Vue.use(UIKit);

var docs = new Vue({
    el: '#docs',

    router,

    components: {
        'navbar': Navbar,
        'sidebar': Sidebar
    }
});
