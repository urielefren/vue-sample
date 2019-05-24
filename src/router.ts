import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import Login from './views/Login.vue';
import { loginService } from './services/login.service';
import store from './store';

Vue.use(Router);

const routes = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contact,
      children: [
        {
          path: 'new-contact',
          name: 'newContact',
          component: () => import('./components/NewContact.vue'),
        },
        {
          path: 'new-contact-notify',
          name: 'newContactNotify',
          component: () => import('./components/ContactCreateNotify.vue'),
          props: true,
        },
        {
          path: 'edit-contact',
          name: 'editContact',
          component: () => import('./components/NewContact.vue'),
          props: true,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});

routes.beforeEach((to, from, next) => {
  if (to.path.indexOf('contacts') >= 0) {
    if (store.getters.getLoginStatus) {
      next();
    } else {
      next({name: 'login'});
    }
  } else {
    next();
  }
});

export default routes;
