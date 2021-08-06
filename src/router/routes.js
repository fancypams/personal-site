import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Resume from "@/components/Resume.vue";
import Work from "@/components/Work.vue";
import CaseStudies from "@/components/CaseStudies.vue";
import Contact from "@/components/Contact.vue";
import SGFBot from "@/components/case-studies/SGFBot.vue";
import RitterSprings from "@/components/case-studies/RitterSprings.vue";
import WIT from "@/components/case-studies/WIT.vue";

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
    path: "/projects",
    name: "Projects",
    component: Work,
  },
  {
    path: "/case-studies",
    name: "Case Studies",
    component: CaseStudies,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/case-studies/sgf-bot",
    name: "SGF Bot",
    component: SGFBot,
  },
  {
    path: "/case-studies/ritter-springs-webpage",
    name: "Ritter Springs",
    component: RitterSprings,
  },
  {
    path: "/case-studies/sgf-wit-website",
    name: "SGF WIT",
    component: WIT,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;