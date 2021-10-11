import { createApp } from 'vue'
import App from './App.vue'
import routes from './router/routes';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)
library.add(faTimes)
library.add(faCirclePlus)
library.add(faCircleMinus)
library.add(faPen)

createApp(App)
    .use(routes)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
