<template>
	<div>
		<div class="contentWrapper">
			<div class="detail">
					<div class="titleLine" v-if="nowSite==='经典案例'">
						当前位置：<router-link :to="{path:'/'}">首页</router-link>>
						<router-link :to="{path:'/cases'}">{{nowSite}}</router-link>><span>{{title}}</span>
					</div>
					<div v-else>
						当前位置：<router-link :to="{path:'/'}">首页</router-link>>
						<router-link :to="{path:'/showProduct',query:{'id':urlParam}}">{{nowSite}}</router-link>><span>{{title}}</span>
					</div>
				<div class="imgList">
					<i class="back" @click="goback"></i>
					<div>
						<img :src="img1">
						<h3>{{title}}</h3>
						<template v-for="item in props">
							<img :src="item">
						</template>
					</div>
				</div>
			</div>
			<footerBottom></footerBottom>
	   </div>
</div>
</template>

<script>
import footerBottom from '@/pages/home/components/footerBottom'
export default {
	data(){
		return {
			id:this.$route.query.id,
			img1:'',
			title:'',
			props:[],
			nowSite:'',
			urlParam:''
		}
	},
    components:{
		footerBottom
    },
    methods:{
		  getList(){
	          let vm = this;
	          vm.$http.get('/api/detail').then((res) => {
	          	  let data=res.data.data[0];
				  $.each(data,function(key,item){
		          	 	if(key==vm.id){
		          	 	 let jsonObj=item[0];
            			 for (var prop in jsonObj)
						 {
						 	var html="";
						    if(prop=="img1"){
            			 		vm.img1=jsonObj["img1"];
            			 }else if(prop=="title"){
            			 		vm.title=jsonObj["title"];
            			 	}else{
            			 		vm.props.push(jsonObj[prop]);
            			 	}
						 }
	            		}
	             });
            	  
	           }, (res) => {
	              console.log('error');
	          });
          },
          goback:function(){
          	this.$router.go(-1);
          }
          
	},
	mounted:function(){
	    this.getList(); 
	    let flags=this.$route.query.id;
	    if(flags.indexOf("roundLong")>-1){
			this.nowSite="圆领长袖";
			this.urlParam="roundLong";
		}else if(flags.indexOf("lapelShort")>-1){
			this.nowSite="翻领短袖";
			this.urlParam="lapelShort";
		}else if(flags.indexOf("lapelLong")>-1){
			this.nowSite="翻领长袖";
			this.urlParam="lapelLong";
		}else if(flags.indexOf("VTshirt")>-1){
			this.nowSite="V领T恤";
			this.urlParam="VTshirt";
		}else if(flags.indexOf("childrenShirt")>-1){
			this.nowSite="儿童文化衫";
			this.urlParam="childrenShirt";
		}else if(flags.indexOf("exerciseDry")>-1){
			this.nowSite="运动速干";
			this.urlParam="exerciseDry";
		}else if(flags.indexOf("clothesCustom")>-1){
			this.nowSite="卫衣/卫裤";
			this.urlParam="clothesCustom";
		}else if(flags.indexOf("outdoorStormsuits")>-1){
			this.nowSite="户外冲锋衣";
			this.urlParam="outdoorStormsuits";
		}else if(flags.indexOf("advertisingCap")>-1){
			this.nowSite="广告帽/围巾";
			this.urlParam="advertisingCap";
		}else if(flags.indexOf("avestApron")>-1){
			this.nowSite="马甲/围裙";
			this.urlParam="avestApron";
		}else if(flags.indexOf("schoolUniform")>-1){
			this.nowSite="工装/校服";
			this.urlParam="schoolUniform";
		}else if(flags.indexOf("cases")>-1){
			this.nowSite="经典案例";
			this.urlParam="cases";
		}else{
			this.nowSite="圆领短袖";
			this.urlParam="roundShort";
		}
    }
}
</script>
</script>

<style>
</style>