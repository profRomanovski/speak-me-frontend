import { createRouter, createWebHistory } from 'vue-router'
import postRoutes from "@/modules/Posts/router";

const baseRoutes = [

]

const routes = baseRoutes.concat(postRoutes);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
