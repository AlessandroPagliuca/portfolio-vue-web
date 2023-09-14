import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerScrollSpy } from 'vue3-scroll-spy';//da controllare
const app = createApp(App)

app.use(router)
app.use(registerScrollSpy)//da controllare
app.mount('#app')