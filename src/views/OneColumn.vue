<script setup></script>

<template>
	<div class="one">
		<div class="one__header">
			<div class="one__container">
				<h1 class="one__title">Blog List - One Column</h1>
				<div class="one__text">
					It is easy way to create your beatiful blog for daily
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.one {
	// .one__header

	&__header {
		padding: 368px 0px 362px 0px;
		background-image: url(/img/one-bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	// .one__container

	&__container {
	}

	// .one__title

	&__title {
		margin: 0px 0px 32px 0px;
		color: #fff;
		text-align: center;
		/* Body */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px;
	}

	// .one__text

	&__text {
		color: #fff;
		text-align: center;
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}
}
</style>
