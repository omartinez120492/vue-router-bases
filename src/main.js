import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import misroutes from './router/router.apis'

const pinia = createPinia()
const app = createApp(App)

app.use(misroutes)
app.use(pinia)
app.mount('#app')


