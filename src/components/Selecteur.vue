<template>  
    <select v-model="id">
        <option v-if="placeholder" :value="null" disabled>{{ placeholder }}</option>
        <option 
                v-for="item in items" 
                :key="optionValue(item)"
                :value="optionValue(item)"
                :label="optionLabel(item)"
                v-bind="$listeners">
        </option>
    </select>
</template>

<script type="text/babel">
const apply = (item, prop) => {
    const value = typeof prop === 'function' ? prop(item) : item[prop];
    return typeof value === 'function' ? value() : value;
}

export default {
    props: {
        value: String,
        items: [Array, Object],
        placeholder: String,
        option: {
            type: [String, Function],
            default: 'id'
        },
        label: {
            type: [String, Function],
            default: 'label'
        }
    },
    data() {
        return {
            id: null
        }
    },
    watch: {
        value: {
            handler(value) {
                this.id = value;
            },
            immediate: true
        },
        id(id){
            this.$emit('input', id);
        }
    },
    methods: {
        optionValue(item) {
            return apply(item, this.option)
        },
        optionLabel(item) {
            return apply(item, this.label)
        }
    }
}
</script>

