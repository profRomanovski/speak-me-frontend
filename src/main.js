import { createApp } from 'vue'
import store from './modules/Framework/store'
import App from './App.vue'
import router from './modules/Framework/router'
import icon from "@/modules/Framework/components/Icon";

const app = createApp(App)

app.use(store)
app.use(router)
app.component('icon', icon)
app.mount('#app')