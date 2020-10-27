<template>
  <div class="not-found">
    <img class="not-found__image" src="@/assets/404.svg" alt="" />
    <div class="not-found__text">
      <h1 class="title is-1">Oops this page doesn't seem to exist</h1>
      <router-link to="/" class="is-size-2"
        ><b-icon icon="arrow-left" size="is-medium"></b-icon>Back to
        safety</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
};
</script>

<style lang="scss" scoped>
.not-found {
  width: 100%;
  height: 100%;

  &__image {
    position: absolute;
    max-width: 100%;
    max-height: 100%;
    top: 50%;
    left: 1em;
    transform: translate(0, -50%);
  }

  &__text {
    position: relative;
    height: 100%;
    width: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
