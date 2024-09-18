import './assets/css/main.css'

import { createApp, watch } from 'vue'
import { createPinia } from 'pinia'

import Flora from './Flora.vue'
import router from './router'

const app = createApp(Flora)
const pinia = createPinia();
app.config.devtools = false;
app.use(pinia)
app.use(router)
app.mount('#app')
