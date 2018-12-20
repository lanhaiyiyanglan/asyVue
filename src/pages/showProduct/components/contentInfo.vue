<template>
	<div class="showings" id="scrollMore">
				<h3><span>{{spanTxt}}</span></h3>
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
				<div id="loading">
	              <img src="@/assets/images/loading.gif" v-if="isShow" >
	            </div>
	</div>
</template>
<script>
export default {
	props: ['id'],
	data(){
		return {
			spanTxt:'',
			isShow:false,
            counter : 1, //默认已经显示出5条数据 count等于一是让从6条开始加载
            num : 5,  // 一次显示多少条
            pageStart : 0, // 开始页数
            pageEnd : 0, // 结束页数
            listdata: [], // 下拉更新数据存放数组
            idItem:this.id
		}
	},
     methods: {
          getList(){
	          let vm = this;
	          vm.$http.get('/api/datas').then((res) => {
	          	     let data=res.data.data[0];
			         if(vm.idItem==undefined){
						 vm.idItem="roundShort";
					 }
	          	     $.each(data,function(key,item){
		          	 	if(key==vm.idItem){
		          	 		let datas=item.slice(0,5);
		          	 		for(var i=0;i<datas.length;i++){
		          	 			vm.listdata.push(datas[i]);
		          	 		}
	            		}
	                });
	           }, (res) => {
	                    console.log('error');
	          });
          },
          loadMore: function() {
                  let vm = this;
                  vm.$http.get('/api/datas').then((res) => {
                  	  if(vm.idItem==undefined){
						 vm.idItem="roundShort";
					  }
				 	  let arr=res.data.data[0];
				 	  let ids=vm.idItem;
                      let arrLength=res.data.data[0][ids].length;
                  	  let pagesize=parseInt(arrLength/vm.num);//得到总页数
				 	  if(arrLength%vm.num>0){//最后翻页取余＞0的，也要作为一页
				 	  	pagesize=pagesize+1;
				 	  }
				 	  if(vm.counter==pagesize)//翻页数等于总页数的，显示别拖了
				 	  {
			            $('#loading').text("别拖了，没有啦！");
				 	  	return;
				 	  }
				 	  vm.pageStart=(vm.counter)*vm.num;//5
				 	  vm.pageEnd=(vm.counter+1)*vm.num;//10
				 	  if(vm.counter+1==pagesize){
				 	  	vm.pageEnd=arrLength;
				 	  }
				 	  if(vm.counter>pagesize){
				 	  	return;
				 	  }
				 	  $.each(arr,function(key,item){
			          	 if(key==vm.idItem){
                            for(var i=vm.pageStart;i<vm.pageEnd;i++){
                               vm.listdata.push(item[i]);
                            }
		            	}
		              });
			         vm.counter++;
                     }, (res) => {
                        console.log('error');
                    });
        }
    },
    mounted:function(){
	      this.getList();
          var _self=this;    
          var tagId = "scrollMore";
          var pressX = 0,pressY = 0;
          var obj = document.getElementById(tagId);
          obj.addEventListener('touchmove', function(event) {}, false);
          obj.addEventListener('touchstart', function(event) {
              if (event.targetTouches.length == 1) {
                  var touch = event.targetTouches[0];
                  pressX = touch.pageX;
                  pressY = touch.pageY;
              }
              _self.isShow=true;
          }, false);
          obj.addEventListener('touchend', function(event) {
              if (event.targetTouches.length == 1) {
                  var touch = event.targetTouches[0];touchend.value = touch.pageX + ';' + touch.pageY;
              }
              if (document.body.scrollTop+screen.height+20>document.body.scrollHeight) {
                _self.loadMore();
              }
              _self.isShow=false;
          }, false);
          if(this.idItem=="roundLong"){
          	this.spanTxt="圆领长袖";
          }
          else if(this.idItem=="lapelShort"){
          	this.spanTxt="翻领短袖";
          }else if(this.idItem=="lapelLong"){
          	this.spanTxt="翻领长袖";
          }
          else if(this.idItem=="VTshirt"){
          	this.spanTxt="V领T恤";
          }
          else if(this.idItem=="childrenShirt"){
          	this.spanTxt="儿童文化衫";
          }
          else if(this.idItem=="exerciseDry"){
          	this.spanTxt="运动速干";
          }
          else if(this.idItem=="clothesCustom"){
          	this.spanTxt="卫衣定制";
          }
          else if(this.idItem=="outdoorStormsuits"){
          	this.spanTxt="户外冲锋衣";
          }
          else if(this.idItem=="advertisingCap"){
          	this.spanTxt="广告帽";
          }
          else if(this.idItem=="avestApron"){
          	this.spanTxt="马甲围裙";
          }
          else if(this.idItem=="schoolUniform"){
          	this.spanTxt="工装厂服";
          }
          else{
          	this.spanTxt="圆领短袖";
          }
    }
}
</script>
<style>
</style>