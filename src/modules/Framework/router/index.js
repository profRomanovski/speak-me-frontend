import { createRouter, createWebHistory } from 'vue-router'
import chatRouters from "@/modules/Home/router";

const baseRoutes = [

]

const routes = baseRoutes.concat(chatRouters);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
