<template>
  <q-footer class="bg-grey-8 text-white">
    <div>Unitask {{ currentYear }} by Slintox '
      Powered on Quasar
      <q-badge>{{ this.$q.version }}</q-badge>
    </div>
  </q-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ULandingFooter',
  computed: {
    currentYear(): number {
      const dt = new Date();
      return dt.getFullYear();
    },
  },
});
</script>

<style scoped>

</style>
