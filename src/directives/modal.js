(function() {
    var vModal = {};

    vModal.install = function(Vue) {
        Vue.directive('ui-modal', {
            bind: function (el, binding, vnode) {
                el.addEventListener('click', function (event) {
                    vnode.context.$UIevents.fire('toggle.modal.' + binding.arg);
                });
            }
        });
    }

    if (typeof exports == 'object') {
        module.exports = vModal;
    } else if (typeof define == 'function' && define.amd) {
        define([], function() {
            return vModal;
        });
    } else if (window.Vue) {
        window.vModal = vModal;
        Vue.use(vModal);
    }
})();
