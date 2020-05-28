<template>
  <div class="container is-centered">
    <div class="about box">
      <h1>This is an about page</h1>
      <b-button @click="getUser">Get me</b-button>
      <b-button @click="logout">Logout</b-button>
      <p :key="index" v-for="(value, key, index) in user">
        {{ key }}: {{ value }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import UserService from '@/services/user.service';

export default Vue.extend({
  data() {
    return {
      user: null
    };
  },
  async created() {
    this.getUser();
    this.getUser();
    await this.getUser();
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    }),
    async getUser() {
      const data = await UserService.me();
      if (data) {
        this.user = data.user;
      }
    }
  }
});
</script>
