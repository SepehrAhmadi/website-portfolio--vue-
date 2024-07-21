import './style/main.scss'
import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import router from './router.js'

const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')
