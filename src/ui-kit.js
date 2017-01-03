import UiAlert from './components/UiAlert.vue';
import UiDateTime from './components/UiDateTime.vue';
import UiInput from './components/UiInput.vue';
import UiTag from './components/UiTag.vue';

const UIKit = {
    UiAlert,
    UiDateTime,
    UiInput,
    UiTag,

    install(Vue) {
        Vue.component('ui-alert', UiAlert);
        Vue.component('ui-datetime', UiDateTime);
        Vue.component('ui-input', UiInput);
        Vue.component('ui-tag', UiTag);
    }
};

window.UIKit = UIKit;
