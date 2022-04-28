import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './modules/router'
import 'uno.css'





const app = createApp(App)

app.use(createPinia()) //挂载pinia
app.use(router)

app.mount('#app')



