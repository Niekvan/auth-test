<template>
  <div>
    <h1 class="title is-1 has-text-primary">Dashboard</h1>
    <div class="charts">
      <line-chart v-if="chart" class="chart" :data="chart"></line-chart>
      <line-chart v-if="chart" class="chart" :data="chart"></line-chart>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import lineChart from '../components/apex_chart';
export default {
  name: 'Dashboard',
  components: {
    lineChart
  },
  data() {
    return {
      loading: false,
      chart: null,
      users: null
    };
  },
  async mounted() {
    try {
      this.loading = true;
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/posts'
      );
      this.users = data;
      this.chart = {
        series: [
          {
            name: 'sales',
            data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
          }
        ],
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      };
    } catch (e) {
      console.log(e);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.charts {
  display: flex;
  width: 100%;
}

.chart {
  flex-grow: 1;
  flex-basis: 50%;
}
</style>
