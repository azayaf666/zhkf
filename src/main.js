import 'babel-polyfill';
if (Number.parseInt === undefined) Number.parseInt = window.parseInt;
if (Number.parseFloat === undefined) Number.parseFloat = window.parseFloat;
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'; // 导入路由配置
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(router);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
