<template>
  <div class="wrapper">
    <navigation class="navigation"></navigation>
    <main class="content">
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Navigation from '../components/navigation.vue';

export default {
  name: 'HomeView',
  components: {
    Navigation,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100vh;

  .content {
    flex-grow: 1;
    padding: 1em;
  }
}
</style>
