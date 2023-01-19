import './css/style.css';
import { createApp } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { VueShowdownPlugin } from 'vue-showdown';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(VueShowdownPlugin, {
  // set default flavor of showdown
  flavor: 'github',
  // set default options of showdown (will override the flavor options)
  options: {
    emoji: true,
    noHeaderId: true,
  },
}).use(router)
  .mount('#app');
