<template>
  <q-header class="q-py-xs bg-orange-3" height-hint="58">
    <q-toolbar class="justify-between">
      <!--        left side-->
      <q-btn flat dense round aria-label="Menu" icon="menu"></q-btn>

      <q-space/>

      <!--        center side-->
      <router-link to="/landing" class="text-white " style="text-decoration: none;">
        <q-toolbar-title align="center">
          <q-icon size="xs" title="Temp" class="q-ml-sm"></q-icon>
          <q-avatar>
            <img
              src="https://cdn.discordapp.com/attachments/886405500428763166/886416054891450368/Logo_v2.png"
              alt="Uss">
          </q-avatar>
          {{ project }}
        </q-toolbar-title>
      </router-link>

      <q-space/>

      <!--        right side-->
      <div class="q-gutter-sm row items-center no-wrap">
        <q-tabs align="center">
          <q-route-tab to="/about" label="About" style="max-width: 90px"/>
          <q-route-tab to="/about/vue" icon="hive" style="max-width: 35px"/>
        </q-tabs>
        <q-btn v-if="!accountInfo.loggedIn"
               @click="onSignUp"
               outline dense icon="person">
          <q-tooltip>Create new account</q-tooltip>
          <span :class="{ 'xs-hide sm-hide': mustHideBtnLabel }">Sign up</span>
        </q-btn>
        <q-btn v-if="!accountInfo.loggedIn"
               @click="onLogin"
               outline dense icon="login">
          <q-tooltip>Login to the account</q-tooltip>
          <span :class="{ 'xs-hide sm-hide': mustHideBtnLabel }">Login</span>
        </q-btn>
        <q-btn v-if="accountInfo.loggedIn"
               @click="onLogout"
               outline dense icon="logout">
          <q-tooltip>Exit from account</q-tooltip>
          <span :class="{'hidden': mustHideLogoutBtnLabel}">Logout</span>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UHeader',
  props: {
    project: {
      type: String,
      required: true,
    },
    accountInfo: {
      type: Object,
      required: true,
    },
  },
  emits: ['onSignUp', 'onLogin', 'onLogout'],
  data() {
    return {};
  },
  computed: {
    mustHideBtnLabel() :boolean {
      return this.$q.screen.width < 800;
    },
    mustHideLogoutBtnLabel() :boolean {
      return this.$q.screen.width < 600;
    },
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
