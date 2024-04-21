import Vue from 'vue';
import Router from 'vue-router';
import IndexPage from '@/components/IndexPage.vue';


Vue.use(Router);

export default new Router({
  mode: 'history', // 使用 HTML5 history 模式
  routes: [
    // {
    //   path: '/',
    //   redirect: '/indexpage',
    // },
    {
      path: '/',
      name: 'indexpage',
      component: IndexPage
    },
   
  ]
});
