
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import Vue from 'vue'
import VeeValidate from 'vee-validate';
import VueResource from 'vue-resource'
import router from './router'
import App from './components/App.vue'
require('./bootstrap')
require('./modal-video/jquery-modal-video')
Vue.use(VeeValidate);
Vue.use(VueResource);
Vue.http.headers.common['X-CSRF-TOKEN'] = document.head.querySelector('meta[name="csrf-token"]').content;

Vue.prototype.$users = [
    {
        id: 'liz',
        name: '栗子',
        fbId: '100006626567064',
        youtubeId: 'lToWBPlk3sk',
    },
    {
        id: 'jiji',
        name: '雞雞',
        fbId: '100002465127567',
        youtubeId: 'npGZnIyL3us',
    }
];

window.Vue = Vue;




/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


const app = new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
});
