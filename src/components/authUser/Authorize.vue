<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Authorize',
  data() {
    return {
      loginData: {
        login: '',
        password: '',
      },
      signupData: {
        login: '',
        email: '',
        fullName: '',
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
    signupSubmit() {
      this.$emit('onSignup', {
        signupData: {
          login: this.signupData.login,
          email: this.signupData.email,
          fullName: this.signupData.fullName,
          password: this.signupData.password,
        },
      });
    },
  },
});
</script>

<style scoped>

</style>
