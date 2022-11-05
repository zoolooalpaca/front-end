<template>
  <div>
    LOGIN PAGE
    <div class="space-y-2">
      <label for="username" class="block">Username</label>
      <input name="username" class="block border p-2"
       type="username" v-model="username"
      >

      <label for="password" class="block">Password</label>
      <input name="password" class="block border p-2"
       type="password" v-model="password"
      >
      <button @click="onLogin">LOG IN</button>
    </div>
  </div>
</template>

<script>
import {useAuthStore} from '../stores/auth.js';

export default {
  setup() {
    const authStore = useAuthStore();
    return {authStore};
  },
  data() {
    return {
      username: 'manager.sample',
      password: 'password',
    };
  },
  methods: {
    async onLogin() {
      await this.authStore.login(this.username, this.password);
    },
  },
};
</script>

<style>

</style>
