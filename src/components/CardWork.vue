<script setup>
defineProps({
	img: String,
	name: String,
	work: String,
})
</script>

<template>
	<div class="work">
		<div class="work__work">{{ work }}</div>
		<div class="work__name">{{ name }}</div>
		<img class="work__img" :src="img" alt="" />
	</div>
</template>
<style lang="scss" scoped>
.work {
	// .work__work

	&__work {
		margin: 0px 0px 24px 0px;
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 3 */
		font-family: Rufina;
		font-size: 68px;
		font-style: normal;
		font-weight: 700;
		line-height: 84px; /* 123.529% */
		text-align: center;
	}

	// .work__name

	&__name {
		margin: 0px 0px 24px 0px;
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		text-align: center;
	}

	// .work__img

	&__img {
		width: 100%;
	}
}
</style>
