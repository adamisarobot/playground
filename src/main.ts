import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { plugin, defaultConfig } from '@formkit/vue';
import { generateClasses } from '@formkit/themes';
import formkitTheme from './assets/formkit.theme.js';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(
  plugin,
  defaultConfig({
    config: {
      classes: generateClasses(formkitTheme)
    }
  })
);
app.use(createPinia());
app.use(router);

app.mount('#app');
