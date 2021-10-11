<template>
  <div>
    <q-form
      name="login"
      @submit.prevent="loginSubmit">
      <q-input model-value="login"></q-input>
      <q-input model-value="password"></q-input>
      <q-btn label="Login"></q-btn>
    </q-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Login',
  data() {
    return {
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
    },
  },
});
</script>

<style scoped>

</style>
