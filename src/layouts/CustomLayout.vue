<template>
  <q-layout view="hHh Lpr fff" class="custom-layout">
    <h5 style="position: fixed;">Custom layout</h5>
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
.custom-layout h5 {
  margin: 10px auto;
}
</style>
