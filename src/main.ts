import './assets/styles.css';
import './assets/tw.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

app.use(pinia);
app.mount('#app');
