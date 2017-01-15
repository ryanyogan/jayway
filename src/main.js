// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import ProductCatalog from './components/ProductCatalog';
import ManageProducts from './components/ManageProducts';

import './styles/style.scss';

import '../node_modules/bootstrap/dist/js/bootstrap';

Vue.use(VueRouter);

const routes = [
  { path: '/home', alias: '/', component: ProductCatalog },
  { path: '/manage-products', component: ManageProducts },
];

const router = new VueRouter({
  routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
});
