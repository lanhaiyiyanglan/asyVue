// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/style.css';
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$http = axios;
import vueResource from 'vue-resource'
Vue.use(vueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  data(){
  	return {
  		transitionName: 'slide'
  	}
  },
  components: { App },
  template: '<App/>',
	mounted: function() {
		let deviceWidth = document.documentElement.clientWidth;
		if(deviceWidth > 750) {
		    deviceWidth = 750;
		}
		document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';
	},
	 watch: {
  	// 监视路由，参数为要目标路由和当前页面的路由
  	'$route' (to, from){
  		const toDepth = to.path.substring(0, to.path.length-2).split('/').length
  		// 官方给出的例子为 const toDepth = to.path.split('/').length 由于现在只有两个路由路径'/'和'/detail'
  		// 按照官方给的例子，这两个路由路径深度都为 2 ，所以，这里稍作调整，不知道有什么不妥
  		// 但目前在这个demo中能正常运行，如果知道更好的方法，欢迎留言赐教
  		const fromDepth = from.path.substring(0, from.path.length-2).split('/').length
  		this.transitionName = toDepth < fromDepth ? 'slide_back' : 'slide'
  		// 根据路由深度，来判断是该从右侧进入还是该从左侧进入
  	}
  }
})
