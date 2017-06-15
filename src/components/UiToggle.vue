<template>
    <div :class="{'form-group': true, 'row': horizontal}">
        <label v-if="label" :class="{'col-input-label': horizontal, 'col-form-label': horizontal}" :for="name">{{ label }}</label>

        <div :class="{'col': horizontal}">
            <label
                :class="classes"
                :style="styles"
            >
                <input
                    type="checkbox"
                    class="btn-toggle-switch"
                    :value="value"
                    :name="name"
                    :id="name"
                    :title="title"

                    @change.stop="toggle"
                    @input="updateValue($event.target.value)"
                >

                <span class="btn-toggle-body" :style="bodyStyles"></span>

                <div v-if="labels">
                    <span class="btn-toggle-label toggle-label-left" v-if="toggled">{{ labelChecked }}</span>
                    <span class="btn-toggle-label toggle-label-right" v-else>{{ labelUnchecked }}</span>
                </div>
            </label>

            <p v-if="help" class="form-text text-muted">{{ help }}</p>
        </div>
    </div>
</template>

<script>
    const MARGIN = 3;
    const DEFAULT_CHECKED_COLOR = '#75C791';
    const DEFAULT_UNCHECKED_COLOR = '#bfcbd9';
    const DEFAULT_CHECKED_LABEL = 'on';
    const DEFAULT_UNCHECKED_LABEL = 'off';

    const CONTAINS = (object, title) => {
        return typeof object === 'object' && object.hasOwnProperty(title);
    };

    export default {
        name: 'ui-toggle',

        store: ['component'],

        props: {
            value: {
                type: Boolean,
                default: false
            },

            disabled: {
                type: Boolean,
                default: false
            },

            labels: {
                type: [Boolean, Object],
                default: false,
                validator (value) {
                    return typeof value === 'object'
                    ? (value.checked || value.unchecked)
                    : typeof value === 'boolean'
                }
            },

            height: {
                type: Number,
                default: 22
            },

            width: {
                type: Number,
                default: 50
            },

            horizontal: {
                type: Boolean,
                default: false
            },

            title: {
                type: String,
                default: null
            },

            label: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            },

            help: {
                type: String,
                default: null
            }
        },

        data() {
            return {
                toggled: this.value
            }
        },

        computed: {
            classes() {
                let {toggled, disabled} = this;

                return [
                    'btn-toggle',
                    {toggled, disabled}
                ];
            },

            styles() {
                let {width, height} = this;
                let distance = width - height + MARGIN;

                return {
                    '--h': height + 'px',
                    '--w': width + 'px',
                    '--d': distance + 'px'
                };
            },

            bodyStyles() {
                return {
                    'background-color': '#ff0000'
                }
            }
        },

        watch: {
            value(value) {
                this.toggled = value;
            }
        },

        methods: {
            toggle(event) {
                this.toggled = ! this.toggled;
            },

            updateValue(value) {
                this.value = value;

                this.$UIevents.fire('input', {
                    id: this.name,
                    value: this.value
                });
            }
        }
    }
</script>
