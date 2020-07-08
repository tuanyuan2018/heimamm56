import VueRouter from 'vue-router';
// 导入登录组件
import login from '@/view/login/login.vue'
import Vue from 'vue';
Vue.use(VueRouter);
const router = new VueRouter({
    routes: [{
        path: '/',
        component:login
    }]
});
export default router;