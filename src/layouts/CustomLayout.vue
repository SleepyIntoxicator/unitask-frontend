<template>
  <q-layout>
    <h5 style="position: relative;">Custom layout</h5>
    <router-view></router-view>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CustomLayout',
});
</script>

<style scoped>

</style>
