<script setup>
// import { onUnmounted } from 'vue'

function closeBurger() {
	document.querySelector('.burger').classList.toggle('active')
	document.querySelector('.nav').classList.toggle('open')
}
// onUnmounted(() => {
//   document.querySelector('.burger').classList.remove('active')
//   document.querySelector('.nav').classList.remove('open')
// })
</script>

<template>
	<div class="burger" @click="closeBurger">
		<span></span>
	</div>
</template>
<style lang="scss" scoped>
.burger {
	display: flex;
	position: relative;
	z-index: 50;
	align-items: center;
	justify-content: flex-end;
	width: 30px;
	height: 18px;
}

.burger span {
	height: 2px;
	width: 100%;
	transform: scale(1);
	background-color: #faf6f2;
}

.burger:before {
	content: '';
	position: absolute;
	height: 2px;
	width: 100%;
	background-color: #faf6f2;
	transition: all 0.3s ease 0s;
	top: 0;
}

.burger:after {
	content: '';
	position: absolute;
	height: 2px;
	width: 100%;
	background-color: #faf6f2;
	transition: all 0.3s ease 0s;
	bottom: 0;
}
.burger.active {
	position: absolute;
	top: 10%;
	left: 10%;
}
.burger.active span {
	transform: scale(0);
}

.burger.active::before {
	background-color: black;
	top: 50%;
	transform: rotate(-45deg) translate(0, -50%);
}

.burger.active::after {
	background-color: black;
	bottom: 50%;
	transform: rotate(45deg) translate(0, 50%);
}
</style>
