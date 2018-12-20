<template>
  <div id="app">
    <div class="header">
				<dl class="topLogo">
						<dt><img src="@/assets/images/logo.png"></dt>
						<dd>
							<p><i></i>全国热线</p>
							<p>18106039133</p>
						</dd>
				</dl>
				<div class="navMenu">
					<ul>
						<li v-for="(item,index) in tabList" :index="index" v-on:click="addClass(index)" v-bind:class="{on:index==current}"><router-link :to="{path:item.path}">{{item.title}}</router-link></li>
					</ul>
				</div>
		</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
  	return{
  		 tabList: [
        { path:"/", title: "网站首页" },
        { path:"/aboutUs", title: "公司简介" },
        { path:"/showProduct", title: "产品展示" },
        { path:"/cases", title: "经典案例" },
        { path:"/contactUs", title: "联系我们" }
      ],
      current:0
  	}
  },
  methods: {
    addClass: function(index) {
      this.current = index;
    }
  },
  watch:{      //监听路由变化
        $route( to , from ){  
            if(to.path!=from.path){
						 let tblist=this.tabList;
	           let vm=this;
	           $.each(tblist,function(key,item){
	           	   if(item.path==to.path){
	           	   	 vm.current=key;
	           	   }else if(to.path=="/detail"){
	           	   	 vm.current=2;
	           	   }
	           });
            }
        }
  }
}
</script>

