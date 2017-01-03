import UiAlert from './components/UiAlert.vue';

const UIKit = {
    UiAlert,

    install(Vue) {
        Vue.component('ui-alert', UiAlert);
    }
};

window.UIKit = UIKit;
