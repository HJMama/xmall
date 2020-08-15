import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Echarts from "echarts";

Vue.use(ElementUI);

Vue.config.productionTip = false;
//将echarts挂载到vue原型上
Vue.prototype.$echarts = Echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
