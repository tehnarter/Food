<script setup>
defineProps({
	img: String,
})
import ButtonFeshion from './ButtonFeshion.vue'
</script>

<template>
	<img class="card__image" :src="img" alt="" />
	<ButtonFeshion />
</template>
<style lang="scss" scoped>
.card__image {
	width: 100%;
}
</style>
