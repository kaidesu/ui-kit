import Vue from 'vue';
import VueRouter from 'vue-router';
import hljs from 'highlight.js';
import _ from 'lodash';

window.Vue = Vue;

Vue.use(VueRouter);

Vue.directive('highlightjs', {
    deep: true,

    bind: function(el, binding) {
        let targets = el.querySelectorAll('code');

        targets.forEach((target) => {
            if (binding.value) {
                target.innerHTML = _.escape(binding.value);
            }

            hljs.highlightBlock(target);
        });
    },

    componentUpdated: function(el, binding) {
        let targets = el.querySelectorAll('code');

        targets.forEach((target) => {
            if (binding.value) {
                target.innerHTML = _.escape(binding.value);

                console.log(target.innerHTML);

                hljs.highlightBlock(target);
            }
        });
    }
});
