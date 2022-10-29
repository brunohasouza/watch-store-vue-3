import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import miragePlugin from './plugins/mirage'

const app = createApp(App)

app.use(miragePlugin)

app.mount('#app')
