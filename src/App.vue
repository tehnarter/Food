<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import NavMenu from './components/NavMenu.vue'
import { RouterView } from 'vue-router'
</script>

<template>
	<div class="wrapper">
		<NavMenu />
		<MyHeader />
		<main>
			<RouterView />
		</main>
		<MyFooter />
	</div>
</template>

<style lang="scss" scoped></style>
