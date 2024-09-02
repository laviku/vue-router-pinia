import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './index.css'
import { Icon } from '@iconify/vue';

// createApp(App).use(router).mount('#app')

const app = createApp(App)

const pinia = createPinia()

app.use(router)
app.use(pinia)
app.component("Icon", Icon)

app.mount('#app')
