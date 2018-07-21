<template>
  <div class="date-picker">
    Month: <input
            type="number"
            ref="monthPicker" 
            :value="splitDate.month"
            @input="updateDate()"/>
    Year: <input
            type="number" 
            ref="yearPicker" 
            :value="splitDate.year"
            @input="updateDate()"/>
  </div>
</template>

<script>
export default {
  props: ['date3'],
  
  model: {
      prop: 'date3',
      event: 'change-date'
  },

  computed: {
    splitDate() {
      const splitValueString = this.date3.split('/');

       return {
        month: splitValueString[0],
        year: splitValueString[1]
      }
    }
  },

  methods: {
    updateDate() {
      const monthValue = this.$refs.monthPicker.value;
      const yearValue = this.$refs.yearPicker.value;
      this.$emit('change-date', `${monthValue}/${yearValue}`);
    }
  }
};
</script>