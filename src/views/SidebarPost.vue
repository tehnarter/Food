<script setup>
import CardAvatar from '../components/CardAvatar.vue'
</script>

<template>
	<div class="sidebar">
		<div class="sidebar__header">
			<div class="sidebar__container">
				<button class="sidebar__button">Fashion</button>
				<h2 class="sidebar__title">
					Three Ideas for Cooking Goat Meat at Home
				</h2>
				<CardAvatar
					img="/img/Avatar-1.png"
					name="Julie Christie"
					month="October 17,2021"
					time="3:33 pm"
					comments="2 comments"
				/>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.sidebar {
	// .sidebar__header

	&__header {
		padding: 242px 0px 160px 0px;
		background-image: url(/img/sidebar-bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	// .sidebar__container

	&__container {
		max-width: 1194px;
		& > .avatar {
			color: #fff;
			max-width: 623px;
			margin: 0px 0px 0px 0px;
		}
	}

	// .sidebar__button

	&__button {
		margin: 0px 0px 46px 0px;
		display: flex;
		width: 203px;
		height: 62px;
		padding: 10px 30px;
		justify-content: center;
		align-items: center;
		border: 2px solid #fff;
		box-shadow: 1px 1px 12px 0px rgba(0, 0, 0, 0.08);
		color: var(--ffffff, #fff);
		font-feature-settings: 'clig' off, 'liga' off;
		font-family: Rufina;
		font-size: 26px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px;
	}

	// .sidebar__title

	&__title {
		color: #fff;
		margin: 0px 0px 32px 0px;
		font-family: Rufina;
		font-size: 88px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%; /* 105.6px */
	}

	// .sidebar__autor

	&__autor {
	}
}
</style>
