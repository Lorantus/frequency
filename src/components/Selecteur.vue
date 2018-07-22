<template>  
    <select v-model="id">
        <option 
                v-for="item in items" 
                :key="item.id"
                v-bind="$listeners"
                v-bind:value="item.id">
            <slot :item="item">{{ item.label }}</slot>
        </option>
    </select>
</template>

<script type="text/babel">

export default {
    props: {
        value: Object,
        items: Object
    },
    data() {
        return {
            id: null
        }
    },
    watch: {
        value: {
            handler(value) {
                this.id = value && value.id;
            },
            immediate: true
        },
        id(id){
            this.$emit('input', this.items[id]);
        }
    }
}
</script>

