import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index.vue'
import LeaveComment from '../components/LeaveComment.vue'
import User from '../components/User.vue'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,

        },
        {
            path: '/:user',
            name: 'user',
            component: User,
            children: [


            ],
        },
        {
            path: '/:user/comment',
            name: 'comment',
            component: LeaveComment
        }

    ],
    mode: 'history'
})