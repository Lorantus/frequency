<template>
    <div>
        <button @click="result++">+1</button>
        <button @click="result--">-1</button>
        <div v-show="!hideText">this is inside the child component: {{ result }}</div>
    </div>
</template>

<script>
export default {
    props: {
        value: Number,
        hideText: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            result: 0
        }
    },
    watch: {
        value: {
            handler(value) {
                this.result = value || 0;
            },
            immediate: true
        },
        result(result) {
            this.$emit('input', result);
        }
    }
}
</script>

