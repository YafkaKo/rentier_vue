import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/main.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import vClickOutside from 'v-click-outside'
import { createPinia } from 'pinia'

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus)
app.use(vClickOutside)
app.use(pinia)
app.use(router)

app.mount('#app')
