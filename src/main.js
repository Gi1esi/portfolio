import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ForceGraph2D from 'vue-force-graph'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faEnvelope, faMapMarkerAlt, faGithub, faLinkedin, faFacebook)

const app = createApp(App)

app.use(router)

app.component('force-graph-2d', ForceGraph2D)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
