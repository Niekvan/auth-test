<template>
  <splash-screen v-if="isLoading"></splash-screen>
  <div v-else id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

import SplashScreen from './views/SplashView.vue';

export default Vue.extend({
  name: 'SplashScreen',
  components: {
    'splash-screen': SplashScreen
  },
  computed: {
    ...mapState(['isLoading'])
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
