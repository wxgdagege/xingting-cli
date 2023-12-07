import './assets/base.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import apis from './apis'

const app = createApp(App)
app.config.globalProperties.$apis = apis
app.use(createPinia())
app.use(router)

app.mount('#app')
