<template>
  <splash-screen v-if="isLoading"></splash-screen>
  <div v-else id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import SplashScreen from '@/modules/main/views/SplashView.vue';

export default Vue.extend({
  components: {
    'splash-screen': SplashScreen
  },
  computed: {
    ...mapState(['isLoading'])
  }
});
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
