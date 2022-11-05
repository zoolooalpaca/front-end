<template>
  <div class="text-center mt-20">
    <div class="login-container">
      <div class="login-wrapper">
        <div class="title">
          <span>Login</span>
        </div>
        <form>
          <label for="username" class="block"> Username </label>
          <div class="row">
            <i class="p-2">
              <span class="material-symbols-outlined"> account_circle </span>
            </i>
            <input
              name="username"
              type="username"
              v-model="username"
              placeholder="Username"
              required
            />
          </div>
          <label for="password" class="block"> Password </label>
          <div class="row">
            <i class="p-2">
              <span class="material-symbols-outlined"> lock </span>
            </i>
            <input
              name="password"
              type="password"
              v-model="password"
              placeholder="Password"
              required
            />
          </div>
          <div class="row login-button">
            <button @click.prevent="onLogin">LOG IN</button>
          </div>
        </form>
      </div>
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
      console.log('called');
      await this.authStore.login(this.username, this.password);
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 450px;
  padding: auto;
  margin: 40px auto;
  color: var(--md-sys-color-on-primary-container);
  background: var(--md-sys-color-primary-container);
}
.login-wrapper {
  width: 100%;
  color: var(--md-sys-color-on-background);
  border-radius: 5px;
  box-shadow: 0px 4px 10px 1px rgba(0, 0, 0, 0.1);
}
.login-wrapper .title {
  height: 90px;
  background-color: var(--md-sys-color-primary);
  border-radius: 5px 5px 0 0;
  color: var(--md-sys-color-on-primary);
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-wrapper form {
  padding: 30px 25px 25px 25px;
}
.login-wrapper form .row {
  height: 45px;
  margin-bottom: 15px;
  position: relative;
}
.login-wrapper form .row input {
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 60px;
  border-radius: 5px;
  border: 1px solid var(--md-sys-color-outline);
  font-size: 16px;
  transition: all 0.3s ease;
}
form .row input:focus {
  border-color: var(--md-sys-color-outline);
  /* box-shadow: inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25); */
}

form input {
  color: var(--md-sys-color-on-background);
  background: var(--md-sys-color-background);
}

form .row input::placeholder {
  color: #999;
}
.login-wrapper form .row i {
  position: absolute;
  width: 47px;
  height: 100%;
  color: #fff;
  font-size: 18px;
  background-color: var(--md-sys-color-primary);
  border-radius: 5px 0 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-wrapper form .pass {
  margin: -8px 0 20px 0;
}
.login-wrapper form .pass a {
  color: var(--md-sys-color-on-primary);
  font-size: 17px;
  text-decoration: none;
}
.login-wrapper form .pass a:hover {
  text-decoration: underline;
}

form .login-button {
  color: var(--md-sys-color-on-primary);
  font-size: 20px;
  font-weight: 500;
  padding-left: 0px;
  background-color: var(--md-sys-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
