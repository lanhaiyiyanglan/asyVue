<template>
	<div>
		<div class="contentWrapper">
		   <middleItem></middleItem>
		   <contentInfo :key="key" :id="id"></contentInfo>
		   <footerBottom></footerBottom>
		</div>
	</div>
</template>

<script>
import middleItem from '@/pages/home/components/middleItem'
import footerBottom from '@/pages/home/components/footerBottom'
import contentInfo from '@/pages/showProduct/components/contentInfo'
export default {
	data(){
		return {
			id:this.$route.query.id
		}
	},
    components:{
		middleItem,
		footerBottom,
		contentInfo
    },
    computed: {
      key() {
        return this.$route.name !== undefined? this.$route.name +new Date(): this.$route +new Date()
	    }
	},
    watch:{      //监听路由变化
        $route( to , from ){  
            if(to.query.id!=from.query.id){
	           this.id=to.query.id;
            }
        }
    }
}
</script>

<style>
</style>