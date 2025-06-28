import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ForceGraph2D from 'vue-force-graph'

const app = createApp(App)

app.use(router)

app.component('force-graph-2d', ForceGraph2D)

app.mount('#app')
