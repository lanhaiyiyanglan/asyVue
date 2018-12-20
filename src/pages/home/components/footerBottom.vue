<template>
		<div>
			<div class="popBox">
			<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1599253415&amp;site=qq&amp;menu=yes" target="_blank" class="im-qq qq-a" title="在线QQ客服">
			</a>
			<div class="wx"></div>
		</div>
		<a href="javascript:void(0)" id="scrolltop"></a>
		<div class="footer">
			<p>版权所有 © 福州市台江区爱尚依服饰有限公司</p>
			<p>联系人：吉小姐 18106039133(微信同号) 电话：0591-87553695</p>
			<p>ＱＱ：1599253415　1139158092  邮箱：1599253415@qq.com</p>
			<p>地址：福州市晋安区福马路36号天成小区3-101</p>
		</div>
	</div>
</template>

<script>
	export default{
		name:'footerBottom',
		mounted:function(){
			$("#scrolltop").hide();
		    $(function () {
		        $(window).scroll(function(){
		            if ($(window).scrollTop()>100){
		                $("#scrolltop").fadeIn(400);
		            }else{
		                $("#scrolltop").fadeOut(400);
		            }
		    	});
				$("#scrolltop").click(function(){
			    	$('body,html').animate({scrollTop:0},400);
			        return false;
			    });
		    });
		}
	}
</script>

<style>
</style>