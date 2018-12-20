<template>
	<div>
		<div class="contentWrapper">
			 <middleItem></middleItem>
			 <div class="showings">
				<h3><span>经典案例</span></h3>
				<div class="itemsList">
					<ul>
						<li v-for="item in listdata">
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
			listdata:[]
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
	          	 		for(var i=0;i<item.length;i++){
	          	 			vm.listdata.push(item[i]);
	          	 		}
            		}
                });
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