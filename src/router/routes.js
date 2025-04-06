import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Resume from "@/pages/Resume.vue";
import Bookshelf from "@/pages/Bookshelf.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/bookshelf",
    name: "Bookshelf",
    component: Bookshelf,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;