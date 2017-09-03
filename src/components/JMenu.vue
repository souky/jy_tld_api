<template>
	<div id="menu">
		
		<div class="title">
			<router-link to="/tables">
				table标签
			</router-link>
		</div>
		
		<div class="title">
			selections标签
		</div>
		<div class="title title_second">
			<router-link to="/input">
				input标签
			</router-link>
		</div>
		<div class="title title_second">
			<router-link to="/select">
				select标签
			</router-link>
		</div>
		<div class="title title_second">
			<router-link to="/textarea">
				textarea标签
			</router-link>
		</div>
		
		<div class="title">
			page标签
		</div>
		
		<div class="title">
			tree标签
		</div>
		
		<div class="title">
			menu标签
		</div>
		
		<div class="title">
			nav标签
		</div>
		
		<div class="title">
			dialog标签
		</div>
		
		<div class="title">
			<router-link to="/button">
				button标签
			</router-link>
		</div>
	</div>
</template>

<script>
</script>

<style>
#menu a{
	text-decoration: none;
	color:#888;
}
#menu .title{
	width:320px;
	padding-left:40px;
	height:40px;
	line-height: 40px;
	color:#888;
	font-size:16px;
	cursor: default;
}
#menu .title_second{
	width:300px;
	padding-left:60px;
	font-size:14px;
}
.router-link-active{
	color:#6bbada!important;
}
</style>