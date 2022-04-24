import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import io from "socket.io-client";
import { createPinia } from 'pinia'

const app = createApp(App)

app.use(createPinia())
app.use(router)

VueElement.prototype.$socket = io("localhost:3001/")

app.mount('#app')
