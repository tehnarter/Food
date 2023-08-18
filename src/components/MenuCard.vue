<script setup>
defineProps({
	price: String,
	title: String,
	text: String,
})
</script>

<template>
	<div class="card-menu">
		<div class="card-menu__price">{{ price }}</div>
		<div class="card-menu__title">{{ title }}</div>
		<div class="card-menu__text">{{ text }}</div>
	</div>
</template>
<style lang="scss" scoped>
.card-menu {
	display: flex;
	flex-direction: column;
	row-gap: 24px;
	padding: 0px 30px 0px 30px;
	flex: 0 1 50%;

	// .card-menu__price

	&__price {
		display: flex;
		flex-direction: row-reverse; /* Heading 4 */
		padding: 0px 0px 12px 0px;
		border-bottom: 4px dashed #000;
		font-family: Rufina;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px; /* 133.333% */
		color: #000;
	}

	// .card-menu__title

	&__title {
		/* Heading 3 */
		font-family: Rufina;
		font-size: 68px;
		font-style: normal;
		font-weight: 700;
		line-height: 84px;
		color: #000; /* 123.529% */
	}

	// .card-menu__text

	&__text {
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}
}
</style>
