// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import settings from './settings'
import axios from 'axios'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

// import {button} from 'ant-design-vue';
Vue.use(Antd);

// import echarts from 'echarts'
let echarts = require('echarts');
Vue.prototype.$echarts = echarts;    // 组件对象.$echarts

Vue.prototype.$axios = axios; // 原型链形式挂载到vue中，后面通过组件对象可以直接调动axios的功能

Vue.prototype.$settings = settings;

Vue.config.productionTip = false;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
