import { Quasar } from 'quasar';
import lang from 'quasar/lang/en-US';
import 'quasar/dist/quasar.sass';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App)
  .use(Quasar, {
    lang,
    extras: ['material-icons',
      'material-icons-outlined',
      'material-icons-round',
      'material-icons-sharp'],
  })
  .use(store)
  .use(router)
  .mount('#app');
