<template>
  <q-header class="bg-orange-3">
    <q-toolbar class="justify-between">
      <!--        left side-->
      <div class="col-3">
      </div>
      <!--        center side-->
      <router-link to="/" class="text-white " style="text-decoration: none">
        <q-toolbar-title align="center" class="col-2">
          <q-avatar>
            <img
              src="https://cdn.discordapp.com/attachments/886405500428763166/886416054891450368/Logo_v2.png"
              alt="Uss">
          </q-avatar>
          {{ project }}
        </q-toolbar-title>
      </router-link>
      <!--        right side-->
      <div class="row no-wrap">
        <q-tabs align="center">
          <q-route-tab to="/about" label="About"/>
          <q-route-tab to="/about/vue" label="Vue"/>
        </q-tabs>
        <q-btn v-if="!accountInfo.loggedIn"
               @click="this.$emit('onSignUp')"
               outline unelevated class="primary">Sign up
        </q-btn>
        <q-btn v-if="!accountInfo.loggedIn"
               @click="this.$emit('onLogin')"
               outline unelevated class="primary">Log in</q-btn>
        <q-btn v-if="accountInfo.loggedIn"
               @click="this.$emit('onLogout')"
               outline unelevated class="primary">Log out</q-btn>
      </div>
      <!--        end-->
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
// import { ref } from 'vue';

export default {
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
  data() {
    return {};
  },
  methods: {
    onSignUp(): void {
      // this.$emit('changeAccountState');
    },
    onLogIn(): void { return undefined; },
  },
};
</script>

<style scoped>

</style>
