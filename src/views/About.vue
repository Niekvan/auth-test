<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getUser">Get me</button>
    <button @click="logout">Logout</button>
    <p :key="index" v-for="(value, key, index) in user">
      {{ key }}: {{ value }}
    </p>
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
