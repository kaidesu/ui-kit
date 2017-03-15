(function() {
    var vSortable = {};
    var Sortable = require('sortablejs');
    var _ = require('lodash');

    vSortable.install = function(Vue) {
        Vue.directive('sortable', {
            bind: function (el, binding, vnode) {
                let options = {
                    filter: '.disabled'
                };

                _.merge(options, binding.value);

                var sortable = new Sortable(el, options);

                if (this.arg && !this.vm.sortable) {
                    this.vm.sortable = {};
                }

                if (this.arg && this.vm.sortable[this.arg]) {
                    console.warn('v-sortable cannot set already defined sortable id: "' + this.arg + '"');
                } else if (this.arg) {
                    this.vm.sortable[this.arg] = sortable;
                }
            }
        });
    }

    if (typeof exports == 'object') {
        module.exports = vSortable;
    } else if (typeof define == 'function' && define.amd) {
        define([], function() {
            return vSortable;
        });
    } else if (window.Vue) {
        window.vSortable = vSortable;
        Vue.use(vSortable);
    }
})();
