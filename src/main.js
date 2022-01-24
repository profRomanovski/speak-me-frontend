import { createApp } from 'vue'
import store from './modules/Framework/store'
import App from './App.vue'
import router from './modules/Framework/router'

const app = createApp(App).use(router)

app.use(store)

app.mount('#app')