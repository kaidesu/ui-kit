function plugin(Vue) {

    if (plugin.installed) {
        return;
    }

    const UIevents = new Vue({
        methods: {
            fire(name, data = null) {
                this.emit(name, data)
            },

            emit(name, data = null) {
                this.$emit(name, data);
            },

            listen(name, cb) {
                this.on(name, cb)
            },

            on(name, cb) {
                this.$on(name, cb);
            },

            off(name, cb) {
                this.$off(name, cb);
            }
        }
    });

    Object.defineProperty(Vue.prototype, '$UIevents', {
        get() {
            return UIevents;
        }
    });

    Vue.mixin({

        beforeCreate() {
            if (typeof this.$options.UIevents != 'object') return;

            this.$on('hook:beforeMount', () => {
                for (var key in this.$options.UIevents) {
                    UIevents.on(key, this.$options.UIevents[key].bind(this));
                }
            });
        }

    });
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
}

export default plugin;
