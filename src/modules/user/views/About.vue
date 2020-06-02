<template>
  <div class="container is-centered">
    <div class="about box">
      <h1 class="title is-1 has-text-primary">This is an about page</h1>
      <b-button type="is-success" outlined @click="getUser">Get me</b-button>
      <p
        class="has-text-centered has-text-secondary is-family-code"
        :key="index"
        v-for="(value, key, index) in user"
      >
        {{ key }}: {{ value }}
      </p>
      <b-button @click="logout">Logout</b-button>
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
