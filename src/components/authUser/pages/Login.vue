<template>
    <q-page-container class="login-container justify-center">
      <q-form
        class="login-form"
        name="login"
        @submit="loginSubmit">
        <q-input
          placeholder="Login or email"
          v-model="loginData.login"
          outlined
          class="login-from-input"
        ></q-input>
        <q-input
          v-model="loginData.password"
          :type="isPwd ? 'password' : 'text'"
          key="password"
          name="password"
          placeholder="Password"
          outlined
          class="login-from-input"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"/>
          </template>
        </q-input>
        <q-btn type="submit" label="Login"></q-btn>
      </q-form>
    </q-page-container>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Login',
  data() {
    return {
      isPwd: ref(true),
      loginData: {
        login: '',
        password: '',
      },
    };
  },
  methods: {
    loginSubmit() {
      this.$emit('onLogin', {
        loginData: {
          login: this.loginData.login,
          password: this.loginData.password,
        },
      });
      console.log('login l:', this.loginData.login, ' p: ', this.loginData.password);
      this.$router.push('/');
    },
  },
});
</script>

<style lang="scss" scoped>
.login-container {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: #E7EAEF;
  display: flex;
  color: #404247;
  justify-content: center;
  align-items: center;
  /*width: 30%; */
}

.login-form {
  position: relative;
  width: 320px;
  min-width: 300px;
  padding: 6% 30px 12%;
  z-index: 1;
}

.login-form .login-from-input {
  margin-bottom: 10px;
}
</style>
