<template>  
    <select v-model="frequenceId">
        <option 
                v-for="frequence in frequences" 
                :key="frequence.id"
                v-bind="$listeners"
                v-bind:value="frequence.id">
            {{ frequence.label }}
        </option>
    </select>
</template>

<script>

export default {
    props: {
        value: Object,
        frequences: Object
    },
    data() {
        return {
            frequenceId: null
        }
    },
    watch: {
        value: {
            handler(value) {
                this.frequenceId = value.id;
            },
            immediate: true
        },
        frequenceId(frequenceId){
            this.$emit('input', this.frequences[frequenceId] || this.frequences.NONE);
        }
    }
}
</script>

