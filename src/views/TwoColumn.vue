<script setup></script>

<template>
	<div class="two">
		<div class="two__header">
			<div class="two__container">
				<h1 class="two__title">Blogs - Two Columns</h1>
				<div class="two__text">
					It is easy way to create your beatiful blog for daily
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.two {
	// .two__header

	&__header {
		padding: 368px 0px 362px 0px;
		background-image: url(/img/one-bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	// .two__container

	&__container {
	}

	// .two__title

	&__title {
		color: #fff;
		text-align: center;
		margin: 0px 0px 32px 0px;
		/* Heading 1 */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px;
	}

	// .two__text

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
