<script setup></script>

<template>
	<button class="button__read-more">Read More</button>
</template>

<style lang="scss" scoped>
.button__read-more {
	position: relative;
	margin: 0px 72px 0px 75px;
	color: #4d4d4d;
	text-align: start;
	font-family: Lato;
	font-size: 22px;
	font-style: normal;
	font-weight: 700;
	line-height: 140%; /* 30.8px */
	letter-spacing: 0.44px;
	&:after {
		content: '';
		position: absolute;
		background-image: url(/icons/home-bl7.svg);
		background-repeat: no-repeat;
		margin: 0px 0px 0px 10px;
		width: 100%;
		height: 100%;
	}
}
</style>
