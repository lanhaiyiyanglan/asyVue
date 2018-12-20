import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/home/index'
import aboutUs from '@/pages/aboutUs/aboutUs'
import cases from '@/pages/cases/cases'
import contactUs from '@/pages/contactUs/contactUs'
import showProduct from '@/pages/showProduct/showProduct'
import detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
	  mode: 'history',
	  routes: [
	    {
	      path: '/',
	      name: 'index',
	      component: index
	    },
	    {
	    	path:'/aboutUs',
	    	name:'aboutUs',
	    	component:aboutUs
	    },
	    {
	    	path:'/cases',
	    	name:'cases',
	    	component:cases
	    },
	    {
	    	path:'/contactUs',
	    	name:'contactUs',
	    	component:contactUs
	    },
	    {
	    	path:'/showProduct',
	    	name:'showProduct',
	    	component:showProduct
	    },
	    {
	    	path:'/detail',
	    	name:'detail',
	    	component:detail
	    }
	  ]
})
