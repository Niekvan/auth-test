<template>
  <nav class="nav">
    <img alt="Vue logo" class="nav__brand" src="@/assets/logo.png" />
    <router-link to="/" class="nav__link" exact
      ><b-icon icon="home"></b-icon>Home</router-link
    >
    <router-link to="/about" class="nav__link" exact
      ><b-icon icon="account"></b-icon>About</router-link
    >
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  position: sticky;
  top: 0;

  display: block;
  height: 100%;
  width: 8rem;
  padding: 1rem 0;

  &__brand {
    display: block;
    height: 3rem;
    width: auto;
    max-width: 100%;
    margin: auto;
  }

  &__link {
    display: block;
  }
}
</style>
