<template>
  <div>
    Logout PAGE
  </div>
</template>

<script>
import {useAuthStore} from '../stores/auth.js';

export default {
  setup() {
    const authStore = useAuthStore();
    return {authStore};
  },
  async beforeMount() {
    await this.authStore.logout();
  },
  data() {
  },
};
</script>

<style>

</style>
