(function() {
    var vCollapse = {};

    vCollapse.install = function(Vue) {
        Vue.directive('collapse', {
            bind: function (el, binding, vnode) {
                el.addEventListener('mouseup', function (event) {
                    vnode.context.$UIevents.fire('toggle.collapse.' + binding.arg);
                });
            }
        });
    }

    if (typeof exports == 'object') {
        module.exports = vCollapse;
    } else if (typeof define == 'function' && define.amd) {
        define([], function() {
            return vCollapse;
        });
    } else if (window.Vue) {
        window.vCollapse = vCollapse;
        Vue.use(vCollapse);
    }
})();
