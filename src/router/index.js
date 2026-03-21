import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Resume from '../views/ResumeView.vue'
import Bookshelf from '../views/BookshelfView.vue'
import UseCaseDAO from '../views/UseCaseDAO.vue'
import UseCaseStakeholder from '../views/UseCaseStakeholder.vue'
import UseCaseBrewery from '../views/UseCaseBrewery.vue'
import UseCaseMos from '../views/UseCaseMos.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/resume', component: Resume },
  { path: '/bookshelf', component: Bookshelf },
  { path: '/use-cases/digital-account-opening', component: UseCaseDAO },
  { path: '/use-cases/stakeholder-alignment', component: UseCaseStakeholder },
  { path: '/use-cases/brewery-menu', component: UseCaseBrewery },
  { path: '/use-cases/happy-hour-cms', component: UseCaseMos },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
