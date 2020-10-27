<template>
  <div ref="chart"></div>
</template>

<script>
import axios from 'axios';
import ApexCharts from 'apexcharts';

export default {
  props: {
    data: Object,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      chart: null,
      loading: false,
    };
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  async mounted() {
    try {
      this.loading = true;
      const options = {
        chart: {
          type: 'line',
        },
        ...this.data,
      };
      await axios.get('https://jsonplaceholder.typicode.com/posts');
      this.chart = new ApexCharts(this.$refs.chart, options);
      this.chart.render();
    } catch (e) {
      console.log(e);
    } finally {
      this.loading = false;
    }
  },
};
</script>
