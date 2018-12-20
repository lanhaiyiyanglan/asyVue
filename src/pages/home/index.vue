<template>
  <div>
    <div class="contentWrapper">
			 <middleItem></middleItem>
			 <div class="showings">
				<h3><span>产品展示</span><router-link :to="{path:'/'}">更多 ></router-link></h3>
				<div class="itemsList" id="productItem">
					<ul>
						<li v-for="item in products">
							<router-link :to="{path:'/detail',query: {'id':item.id}}">
										 <img :src="item.imgSrc">
										 <p>{{item.itemTxt}}</p>
							</router-link>
						</li>
					</ul>
				</div>
				<h3><span>产品案例</span><router-link :to="{path:'/'}">更多 ></router-link></h3>
				<div class="itemsList" id="casesItem">
					<ul>
						<li v-for="item in cases">
							<router-link :to="{path:'/detail',query: {'id':item.id}}">
										 <img :src="item.imgSrc">
										 <p>{{item.itemTxt}}</p>
							</router-link>
						</li>
					</ul>
				</div>
			</div>
			<footerBottom></footerBottom>
		</div>
  </div>
</template>

<script>
import middleItem from '@/pages/home/components/middleItem'
import footerBottom from '@/pages/home/components/footerBottom'
export default {
	data(){
		return {
			products:[],
			cases:[]
		}
	},
  components:{
		middleItem,
		footerBottom
	},
	methods:{
		getList(){
	          let vm = this;
	          vm.$http.get('/api/datas').then((res) => {
	          	  let data=res.data.data[0];
				        $.each(data,function(key,item){
		          	 	if(key=="cases"){
		          	 		let datas=item;
		          	 		for(var i=0;i<6;i++){
		          	 		  vm.cases.push(datas[i]);
		          	 		}
	            		}
	              });
	              for (var prop in data){
            		 vm.products.push(data[prop][0]); 
            	  }
	              vm.products=vm.products.slice(0,6);
            	  
	           }, (res) => {
	              console.log('error');
	          });
          }
	},
	mounted:function(){
	    this.getList(); 
  }
}
</script>

<style>
</style>
