<template>
<div class="flex justify-center set-display-column borderColor ">
  <h1 class="text-center text-3xl mt-3 mb-3">สร้างบัญชีผู้ใช้</h1>

  <div>
    <div class="set-display-column">
      <label class="set-margin text-lg">ชื่อ-นามสกุล</label>
      <input type="text" v-model="user.name" class="input-field-style flex justify-center" placeholder="Name">
    </div>

    <div class="set-display-column">
      <label class="set-margin text-lg">ชื่อผู้ใช้</label>
      <input type="text" v-model="user.username" class="input-field-style" placeholder="Username">
    </div>

    <div class="set-display-column">
      <label class="set-margin text-lg">อีเมล</label>
      <input type="text" v-model="user.email" class="input-field-style" placeholder="Email">
    </div>

    <div class="set-display-column">
      <label class="set-margin text-lg">รหัสผ่าน</label>
      <input type="text" v-model="user.password" class="input-field-style" placeholder="Password">
    </div>

  </div>

  <div>
    <div class="flex justify-center mb-5">
      <button @click="createAnAccount" class="button-blue button-style">สร้างบัญชี</button>
    </div>
  </div>

  <div class="flex justify-center set-display-row text-center">
    <div class="inline-flex">
      <label class="mt-4">หากคุณมีบัญชีอยู่แล้ว</label>
      <label class="ml-4 mr-2 mt-4">|</label>
      <button @click="backToLogin" class="button-style flex justify-center button">กลับไปหน้าลงชื่อเข้าใช้</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        username: '',
        email: '',
        password: '',
      }
    }
  },
  methods: {
    backToLogin() {
      this.$router.push(`/login`)
    },
    createAnAccount() {

    }
  }
}
</script>

<style>
.set-margin {
  margin-bottom: 5px;
  margin-top: 10px;
}

.set-display-column {
  display: flex;
  flex-direction: column;
}

.set-display-row {
  display: flex;
  flex-direction: row;
}

.button-blue {
  color: var(--md-sys-color-on-primary);
  background: var(--md-sys-color-primary);
  border-color: var(--md-sys-color-primary);
}

.button-style {
  margin-top: 8px;
  padding: 10px;
  border-radius: 9999px;
  justify-content: center;
}

.button-blue:hover {
  color: var(--md-sys-color-on-primary);
  background: #2371cd;
  border-color: #1A5EAFFF;
}

.input-field-style {
  width: 300px;
  color: var(--md-sys-color-on-primary-dark);
  border: 1px solid var(--md-sys-color-outline-light);
  border-radius: 15px;
  margin-bottom: 10px;
  margin-top: 10px;
}

.borderColor {
  border: 1px solid var(--md-sys-color-outline-light);
  border-radius: 15px;
  align-items: center;
}

.button {
  border-radius: 10px;
}

.button:hover{
  color: var(--md-sys-color-on-primary);
  background: var(--md-sys-color-error);
  border-color: var(--md-sys-color-primary);
}
</style>