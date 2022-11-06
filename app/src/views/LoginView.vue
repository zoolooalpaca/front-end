<template>
  <div class="text-center mt-20">
    <div class="login-container">
      <div class="login-wrapper">
        <div class="title">
          <span>Login</span>
        </div>
        <div id="loginform">
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
          <div>
            <button @click.prevent="onLogin"
              class="login-button"
            >LOG IN</button>
          </div>
        </div>
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
  created() {
    if (this.$route.query.u && this.$route.query.p) {
      this.username = this.$route.query.u;
      this.password = this.$route.query.p;
      this.onLogin();
    }
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
.login-wrapper #loginform {
  padding: 30px 25px 25px 25px;
}
.login-wrapper #loginform .row {
  height: 45px;
  margin-bottom: 15px;
  position: relative;
}
.login-wrapper #loginform .row input {
  height: 100%;
  width: 100%;
  outline: none;
  padding-left: 60px;
  border-radius: 5px;
  border: 1px solid var(--md-sys-color-outline);
  font-size: 16px;
  transition: all 0.3s ease;
}
#loginform .row input:focus {
  border-color: var(--md-sys-color-outline);
  /* box-shadow: inset 0px 0px 2px 2px rgba(26, 188, 156, 0.25); */
}

#loginform input {
  color: var(--md-sys-color-on-background);
  background: var(--md-sys-color-background);
}

#loginform .row input::placeholder {
  color: #999;
}
.login-wrapper #loginform .row i {
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
.login-wrapper #loginform .pass {
  margin: -8px 0 20px 0;
}
.login-wrapper #loginform .pass a {
  color: var(--md-sys-color-on-primary);
  font-size: 17px;
  text-decoration: none;
}
.login-wrapper #loginform .pass a:hover {
  text-decoration: underline;
}

#loginform .login-button {
  width: 100%;
  padding: 4px 0;
  color: var(--md-sys-color-on-primary);
  font-size: 20px;
  font-weight: 500;
  background-color: var(--md-sys-color-primary);
  align-items: center;
  justify-content: center;
}
</style>
