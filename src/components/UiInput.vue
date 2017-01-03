<template>
    <div class="form-group">
        <label v-if="label" :for="name">{{ label }}</label>

        <textarea v-if="(type == 'textarea')"
            class="form-control"
            v-model="value"
            :class="brand"
            :cols="cols"
            :rows="rows"
            :name="name"
            :id="name"
            :readonly="readonly"
            :required="required"
            :disabled="disabled"
            :minlength="minlength"
            :maxlength="maxlength"
            :placeholder="placeholder"
        ></textarea>

        <template v-if="(type == 'text')">
            <input class="form-control"
                type="text"
                v-model="value"
                :class="brand"
                :name="name"
                :id="name"
                :title="title"
                :readonly="readonly"
                :required="required"
                :disabled="disabled"
                :minlength="minlength"
                :maxlength="maxlength"
                :placeholder="placeholder"
            >
        </template>

        <template v-if="(type == 'password')">
            <input class="form-control"
                type="password"
                v-model="value"
                :class="brand"
                :name="name"
                :id="name"
                :title="title"
                :required="required"
                :disabled="disabled"
                :minlength="minlength"
                :maxlength="maxlength"
                :placeholder="placeholder"
            >
        </template>

        <p v-if="showHelp" class="form-text text-muted">{{ help }}</p>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                value: this.initialValue
            }
        },

        props: {
            initialValue: {
                default: null
            },
            type: {
                type: String,
                default: 'text'
            },
            title: {
                type: String,
                default: null
            },
            brand: {
                type: String,
                default: null
            },
            disabled: {
                type: Boolean,
                default: false
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
            },
            showHelp: {
                type: Boolean,
                default: true
            },
            placeholder: {
                type: String,
                default: null
            },
            readonly: {
                type: Boolean,
                default: false
            },
            required: {
                type: Boolean,
                default: false
            },
            rows: {
                type: Number,
                default: 3
            },
            cols: {
                type: Number,
                default: 20
            },
            minlength: {
                type: Number,
                default: 0
            },
            maxlength: {
                type: Number,
                default: null
            }
        }
    }
</script>
