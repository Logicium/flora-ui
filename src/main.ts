import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Flora from './Flora.vue'
import router from './router'

const app = createApp(Flora)

app.use(createPinia())
app.use(router)

app.mount('#app')
