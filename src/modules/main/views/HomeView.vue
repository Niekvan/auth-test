<template>
  <div class="container wrapper">
    <navigation class="navigation"></navigation>
    <main class="content">
      <transition name="fade" mode="out-in">
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
    Navigation
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100vh;

  .navigation {
    margin-right: 1rem;
  }

  .content {
    flex-grow: 1;
  }
}
</style>
