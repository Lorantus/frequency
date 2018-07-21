<template>
    <div>
        <button @click="add">+1</button>
        <button @click="sub">-1</button>
        <div>this is inside the child component: {{ result }}</div>
    </div>
</template>

<script>
export default {
    model: {
        prop: 'counter.value',
        event: 'update:counter'
    },
    props: {
        counter: {
            value: Number
        }
    },
    data() {
        return {
            result: 0
        }
    },
    watch: {
        result(result) {
            this.$emit('update:counter', result);
        }
    },
    methods: {
        add() {
            this.result++;
        },
        sub() {
            this.result--;
        }
    }
}
</script>

