// 1 step: import the router link into our app
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/Home.vue';
import Parent from '@/projects/counter/Parent.vue';
import UserList from '@/projects/users/UserList.vue';
import UserEdit from '../views/users/UserEdit.vue';
import Todo from '@/projects/todo/Todo.vue';

/**
 * 3 step: now we add our routes for our app. For each route we must add an object, with some options.
 */
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/counter',
        name: 'counter',
        component: Parent
    },
    {
        path: '/users/:id',
        name: 'user',
        component: UserEdit
    },
    {
        path: '/users',
        name: 'users',
        component: UserList
    },
    {
        path: '/todo',
        name: 'todo',
        component: Todo
    }
    
];

/**
 * 4 step: set up our router. We use the above imported createRouter() and createWebHashHistory()
 */
const router = createRouter({

    /**
     * Here we set up history mode. This can either create web history or web hash history.
     * Web history will use real urls, when we navigate through pages. If we go to About page, the
     * url will be '/about'.
     * Web hash history will use # in url. If we go to About page, the url will be '/#/about'.
     */
    history: createWebHistory(),

    /**
     * This here is routes: routes.
     * The first routes is a property name.
     * The second routes is our routes object from above, that contains all the routes defined by us.
     */
    routes

});

/**
 * 5 step: here we export our router variable, so it can be imported on other pages too...
 */
export default router;
