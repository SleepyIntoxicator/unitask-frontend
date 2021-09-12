<template>
  <q-layout>
    <q-header class="bg-orange-3">
      <q-toolbar class="row">
        <!--        left side-->
        <div class="col-3">
        </div>
        <!--        center side-->
        <q-toolbar-title align="center" class="col-6">
          <q-avatar>
            <img
              src="https://cdn.discordapp.com/attachments/886405500428763166/886416054891450368/Logo_v2.png"
              alt="Uss">
          </q-avatar>
          Unitask
        </q-toolbar-title>
        <!--        right side-->
        <div class="row align">
          <q-tabs align="right">
            <q-route-tab to="/about" label="About"/>
            <q-route-tab to="/about/vue" label="Vue"/>
          </q-tabs>
          <q-btn outline unelevated class="primary">Sign up</q-btn>

        </div>
        <!--        end-->
      </q-toolbar>
    </q-header>
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
    <q-footer class="bg-grey-8 text-white">
      <div>Unitask {{ currentYear }} by Slintox</div>
    </q-footer>
  </q-layout>
</template>

<script lang="ts">
export default {
  components: {},
  data(): Record<string, unknown> {
    return {};
  },
  computed: {
    currentYear(): number {
      const dt = new Date();
      return dt.getFullYear();
    },
  },
};
</script>
