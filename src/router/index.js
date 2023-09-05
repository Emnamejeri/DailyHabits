import { createRouter, createWebHistory } from "vue-router";
import habitsList from "../components/habitsList.vue";
import daysContent from "../components/daysContent.vue";

const routes = [
  {
    path: "/habitslist",
    name: "habits",
    component: habitsList,
  },
  {
    path: "/day",
    name: "about",
    component: daysContent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
