<template>
  <q-layout>
    <UHeader :project="projectName"
             :account-info="AccountInfo"
             @onSignUp="signUp"
             @onLogin="LogIn"
             @onLogout="LogOut"
    ></UHeader>
    <!--    PAGE  -->
    <q-page-container>
      <div>
        <div v-if="false">
          <img
            src="https://cdn.discordapp.com/attachments/843544794395181076/886168957512478750/60b3882b889d0d83e36ad4a411e247c3.jpg?size=128"
            alt="bl">
        </div>
      </div>
      <router-view/>
    </q-page-container>
    <!--    END PAGE-->
    <q-footer class="bg-grey-8 text-white">
      <div>Unitask {{ currentYear }} by Slintox</div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UHeader from '../components/Header.vue';

export class AccountState {
  loggedIn: boolean;

  constructor(loggedIn = false) {
    this.loggedIn = loggedIn;
  }
}

/* interface AccountInfo {
  loggedIn: boolean
} */

export default defineComponent({
  components: {
    UHeader,
  },
  data() {
    return {
      AccountInfo: {
        loggedIn: false,
      },
      projectName: 'Unitask',
    };
  },
  computed: {
    currentYear(): number {
      const dt = new Date();
      return dt.getFullYear();
    },
  },
  methods: {
    changeAccountState(): void {
      if (this.AccountInfo.loggedIn) {
        console.log('User logged out');
      } else {
        console.log('User logged in');
      }
      this.AccountInfo.loggedIn = !this.AccountInfo.loggedIn;
    },
    signUp(): void {
      this.changeAccountState();
    },
    LogIn(): void {
      this.changeAccountState();
    },
    LogOut(): void {
      this.changeAccountState();
    },
  },
});
</script>
