import UiAlert from './components/UiAlert.vue';
import UiDateTime from './components/UiDateTime.vue';
import UiInput from './components/UiInput.vue';

const UIKit = {
    UiAlert,
    UiDateTime,
    UiInput,

    install(Vue) {
        Vue.component('ui-alert', UiAlert);
        Vue.component('ui-datetime', UiDateTime);
        Vue.component('ui-input', UiInput);
    }
};

window.UIKit = UIKit;
