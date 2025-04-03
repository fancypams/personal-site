import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/routes'

createApp(App)
    .use(routes)
    .mount('#app')
