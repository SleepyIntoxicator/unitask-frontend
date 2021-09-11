import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router';
import store from './store';

import 'quasar/dist/quasar.sass';

createApp(App).use(Quasar).use(store).use(router)
  .mount('#app');
