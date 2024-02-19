import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue"
import Post from "./components/Post.vue"
import NotFound from "./components/NotFound.vue"
import User from "./components/users/User.vue"
import ShowUser from "./components/users/Show.vue"

const routes = [
    { path: '/', name: 'home', component: Home },
    // { path: '/users', component: User },
    // { path: '/users/:id', component: User },
    // { path: '/users/:id/:name', component: User },
    { path: '/users', name: 'user', component: User, children:[
        { path: ':id', name: 'showUser', component: ShowUser },
        // { path: ':id/:name', component: User },
        // { path: 'create', component: User },
        // { path: 'edit/:id', component: User }
    ] },
    { path: '/posts', name: 'post', component: Post, beforeEnter: (to, from, next) => {
        console.log('Before Enter');
        next();
    }},
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    if (to.name === 'user') {
        // next(false);
        // next('/');
        // next({name: 'home'});
        next({name: 'showUser', params: {id: 8}});
    } else {
        next()
    }
});

export default router;