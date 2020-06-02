<template>
  <div class="columns is-centered">
    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
      <div class="box">
        <form @submit.prevent="sendForm">
          <b-field label="Email">
            <b-input type="email" icon="account" v-model="user.email"></b-input>
          </b-field>
          <b-field label="password">
            <b-input
              type="password"
              icon="form-textbox-password"
              icon-right="lock-reset"
              v-model="user.password"
            ></b-input>
          </b-field>
          <b-button type="is-primary" native-type="submit">Login</b-button>
        </form>
      </div>
    </div>
  </div>
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
