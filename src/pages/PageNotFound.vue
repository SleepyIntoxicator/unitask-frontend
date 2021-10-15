<template>
  <q-layout class="page-not-found--page">
      <div class="page-not-found">
        <h1 class="text-red">
          404
        </h1>
        <h5>Sorry, the page was not found or is under development.</h5>
        <div class="button-to-home">
<!--            color=" blue lighten-2"-->
          <q-btn
            :to="'/'"
            text-color="red"
            width="150px"
            outline dense
            icon="home"
            class=" align-center"> <!--to-home-->
            To home
          </q-btn>
        </div>
      </div>
      <div v-if="reason !== ''" class="page-not-found--reason">
        <p class="reason-title">
          Reason: {{ reason }}
        </p>
      </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageNotFound',
  data() {
    return {
      reason: 'B\'cause',
    };
  },
});
</script>

<style scoped>
.page-not-found--page {
  /*min-width: 200px;*/
  max-width: 450px;
  /*min-height: 200px;*/
  max-height: 200px;

  margin-top: 6em;

  margin-right: auto;
  margin-left: auto;
}

.page-not-found {
  min-width: 200px;
  max-width: 450px;
  min-height: 200px;
  max-height: 250px;

  padding-top: 10px;
  padding-left: 1em;
  padding-right: 1em;

  border: 1px solid #9a9a9a;
  border-top: 4px solid #b30000;
  border-bottom-color: #CCC;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  background-color: white;
}

.page-not-found--reason {
  min-width: 200px;
  max-width: 450px;
  min-height: 100px;
  max-height: 100px;
  width: 100%;

  padding-left: 1em;
  padding-right: 1em;

  margin-left: auto;
  margin-right: auto;

  border: 1px solid #CCC;

  background: #eaeaea;
}

.reason-title {
  margin-top: 5px;
}

h1, h5 {
  margin: 0 auto;
  text-align: center;
}

.button-to-home {
  padding-top: 10px;
  padding-bottom: 10px;
  left: calc(50% - 150px / 2);
}
</style>
