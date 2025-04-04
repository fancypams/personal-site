import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Resume from "@/components/Resume.vue";

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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;