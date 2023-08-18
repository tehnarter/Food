<script setup>
defineProps({
	title: String,
	text: String,
})
</script>

<template>
	<h3 class="card-text__title">{{ title }}</h3>
	<p class="card-text__text">{{ text }}</p>
</template>
<style lang="scss" scoped>
.card-text__title {
	margin: 0px 72px 18px 75px;
	padding: 0px 0px 18px 0px;
	border-bottom: 4px dashed;
	/* Heading 4 */
	font-family: Rufina;
	font-size: 48px;
	font-style: normal;
	font-weight: 700;
	line-height: 64px;
	text-align: start;
	color: #000; /* 133.333% */
}

.card-text__text {
	color: #4d4d4d;
	margin: 0px 72px 46px 75px;
	/* Excerpt */
	font-family: Lato;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 140%; /* 30.8px */
	letter-spacing: 0.44px;
	text-align: start;
}
</style>
