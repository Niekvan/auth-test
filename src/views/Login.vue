<template>
  <form @submit.prevent="sendForm">
    <input type="text" v-model="user.email" name="password" id="email" />
    <input
      type="password"
      v-model="user.password"
      name="password"
      id="password"
    />
    <button type="submit">Login</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data() {
    return {
      user: {
        email: 'test@test.com',
        password: 'password'
      }
    };
  },
  methods: {
    ...mapActions({
      login: 'auth/login'
    }),
    async sendForm() {
      try {
        await this.login(this.user);
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>

<style></style>
