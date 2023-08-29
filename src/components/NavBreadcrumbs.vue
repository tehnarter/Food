<script setup>
import { RouterLink } from 'vue-router'
defineProps({
	breadcrumbs: Array,
})
</script>
<template>
	<nav class="breadcrumbs">
		<div v-for="(item, index) in breadcrumbs" :key="index">
			<router-link :to="item.path">
				{{ item.name }}
			</router-link>

			<span class="span" v-if="index < breadcrumbs.length - 2"
				>&nbsp/&nbsp
			</span>
			<span class="last-span" v-if="index === breadcrumbs.length - 2"
				>&nbsp/&nbsp</span
			>
		</div>
	</nav>
</template>
<style lang="scss" scoped>
.breadcrumbs {
	display: flex;
	margin: 0px 0px 63px 0px;
	color: #b0b0b0;

	/* Body */
	font-family: Lato;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: 140%; /* 33.6px */
	letter-spacing: 0.48px;

	a:last-child {
		color: #4d4d4d;
	}
}
.last-span {
	color: #4d4d4d; /* Інший колір для останнього роздільника */
}
</style>
