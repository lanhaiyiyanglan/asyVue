<template>
	<div>
		<dl class="attention">
			<dt><img src="@/assets/images/attention.png"></dt>
			<dd>专业生产定制广告衫 班服 聚会服 团体服 工作服 马甲 卫衣 围裙等</dd>
		</dl>
		<div class="subMenus">
			<ul>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'roundShort'}}">
						<i class="icon1"></i>
						<div>圆领短袖</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'roundLong'}}">
						<i class="icon2"></i>
						<div>圆领长袖</div>
					</router-link>
				</li>
				<li>
				    <router-link :to="{path:'/showProduct',query: {'id':'lapelShort'}}">
						<i class="icon3"></i>
						<div>翻领短袖</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'lapelLong'}}">
						<i class="icon4"></i>
						<div>翻领长袖</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'VTshirt'}}">
						<i class="icon5"></i>
						<div>V领T恤</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'childrenShirt'}}">
						<i class="icon6"></i>
						<div>儿童文化衫</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'exerciseDry'}}">
						<i class="icon7"></i>
						<div>运动速干</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'clothesCustom'}}">
						<i class="icon8"></i>
						<div>卫衣定制</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'outdoorStormsuits'}}">
						<i class="icon9"></i>
						<div>户外冲锋衣</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'advertisingCap'}}">
						<i class="icon10"></i>
						<div>广告帽</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'avestApron'}}">
						<i class="icon11"></i>
						<div>马甲围裙</div>
					</router-link>
				</li>
				<li>
					<router-link :to="{path:'/showProduct',query: {'id':'schoolUniform'}}">
						<i class="icon12"></i>
						<div>工装厂服</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>