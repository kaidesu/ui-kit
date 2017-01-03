import UiAlert from './components/UiAlert.vue';
import UiDateTime from './components/UiDateTime.vue';
import UiInput from './components/UiInput.vue';
import UiModal from './components/UiModal.vue';
import UiTable from './components/UiTable.vue';
import UiTableTbody from './components/UiTableTbody.vue';
import UiTableTd from './components/UiTableTd.vue';
import UiTableTh from './components/UiTableTh.vue';
import UiTableThead from './components/UiTableThead.vue';
import UiTableTr from './components/UiTableTr.vue';
import UiTag from './components/UiTag.vue';

import VueEvents from './events.js';

const UIKit = {
    UiAlert,
    UiDateTime,
    UiInput,
    UiModal,
    UiTable,
    UiTableTbody,
    UiTableTd,
    UiTableTh,
    UiTableThead,
    UiTableTr,
    UiTag,

    install(Vue) {
        Vue.component('ui-alert', UiAlert);
        Vue.component('ui-datetime', UiDateTime);
        Vue.component('ui-input', UiInput);
        Vue.component('ui-modal', UiModal);
        Vue.component('ui-table', UiTable);
        Vue.component('ui-tbody', UiTableTbody);
        Vue.component('ui-td', UiTableTd);
        Vue.component('ui-th', UiTableTh);
        Vue.component('ui-thead', UiTableThead);
        Vue.component('ui-tr', UiTableTr);
        Vue.component('ui-tag', UiTag);

        Vue.use(VueEvents);
    }
};

window.UIKit = UIKit;
