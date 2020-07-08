import Vue from 'vue'
import App from './App.vue'
// 导入element-ui插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 注册element-ui
Vue.use(ElementUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')