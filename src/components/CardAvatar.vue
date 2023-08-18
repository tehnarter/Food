<script setup>
defineProps({
	img: String,
	name: String,
	month: String,
	time: String,
	comments: String,
})
</script>

<template>
	<div class="avatar">
		<img class="avatar__img" :src="img" alt="" />
		<div class="avatar__name">{{ name }}</div>
		<div class="avatar__month">{{ month }}</div>
		<div class="avatar__time">{{ time }}</div>
		<div class="avatar__comments">{{ comments }}</div>
	</div>
</template>
<style lang="scss" scoped>
.avatar {
	margin: 0px 72px 0px 75px;
	display: flex;
	color: #5e6600;
	align-items: center;
	justify-content: space-between;
	font-family: Lato;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	letter-spacing: 0.36px;
	&__img {
		border-radius: 50%;
		width: 96px;
		height: 96px;
	}

	// .avatar__name

	&__name {
	}

	// .avatar__month

	&__month {
	}

	// .avatar__time

	&__time {
	}

	// .avatar__comments

	&__comments {
	}
}
</style>
