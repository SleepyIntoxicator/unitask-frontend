<template>
  <q-layout view="hHh lpR fFf" class="bg-white">
    <UHeader :project="projectName"
             :account-info="AccountInfo"
    @onSignUp="onSignUp"
    @onLogin="onLogin"
    @onLogout="onLogout"
    ></UHeader>
<!--    -->
    <q-page-container style="height: 100%;">
        <h6 style="max-height: 30px; margin: 5px auto 5px auto;">MainLayout</h6>
      <router-view></router-view>
    </q-page-container>
<!--    -->
    <ULandingFooter/>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UHeader from '@/components/UHeader.vue';
import ULandingFooter from '@/components/ULandingFooter.vue';

export default defineComponent({
  components: { UHeader, ULandingFooter },
  data() {
    return {
      AccountInfo: {
        loggedIn: false,
      },
      projectName: 'Unitask',
    };
  },
  methods: {
    onSignUp() :void {
      this.$router.push({ path: '/signup' });
    },
    onLogin() :void {
      this.$router.push({ path: '/login' });
    },
    onLogout() :void {
      this.$router.push({ path: '/logout' });
    },
  },
});
</script>

<style scoped>

</style>
