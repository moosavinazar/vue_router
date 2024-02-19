import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue"
import Post from "./components/Post.vue"
import User from "./components/User.vue"

const routes = [
    { path: '/', component: Home },
    { path: '/users', component: User },
    { path: '/posts', component: Post }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;