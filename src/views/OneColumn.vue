<script setup>
import CardImage from '../components/CardImage.vue'
import CardAvatar from '../components/CardAvatar.vue'
import CardText from '../components/CardText.vue'
import ButtonReadMore from '../components/ButtonReadMore.vue'
import NavBreadcrumbs from '../components/NavBreadcrumbs.vue'
const navMenuPage = [
	{ name: 'Home ', path: '/' },
	{ name: ' Blog ', path: '#' },
	{ name: ' Blog List One Column', path: '#' },
]
</script>

<template>
	<div class="one">
		<div class="one__header">
			<div class="one__container">
				<h1 class="one__title">Blog List - One Column</h1>
				<div class="one__text">
					It is easy way to create your beatiful blog for daily
				</div>
			</div>
		</div>
		<div class="one__main">
			<div class="one__container">
				<NavBreadcrumbs :breadcrumbs="navMenuPage" />
				<div class="one__cards-row">
					<div class="one__card-row">
						<div class="one__card-img">
							<CardImage img="/img/card-1.jpg" />
						</div>
						<div class="one__card-text">
							<CardAvatar
								img="/img/Avatar-1.png"
								name="Dianne Russell"
								month="October 17,2021"
								time="3:33 pm"
								comments="2 comments"
							/>
							<CardText
								title="Asparagus Spring Salad with Rocket, Goat's Cheese"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
							/>
							<ButtonReadMore />
						</div>
					</div>
					<div class="one__card-row">
						<div class="one__card-img">
							<CardImage img="/img/card-2.jpg" />
						</div>
						<div class="one__card-text">
							<CardAvatar
								img="/img/Avatar-2.png"
								name="Dianne Russell"
								month="October 17,2021"
								time="3:33 pm"
								comments="2 comments"
							/>
							<CardText
								title="Asparagus Spring Salad with Rocket, Goat's Cheese"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
							/>
							<ButtonReadMore />
						</div>
					</div>
					<div class="one__card-row">
						<div class="one__card-img">
							<CardImage img="/img/card-3.jpg" />
						</div>
						<div class="one__card-text">
							<CardAvatar
								img="img/Avatar-3.png"
								name="Jenifier Lopez"
								month="October 17,2021"
								time="3:33 pm"
								comments="2 comments"
							/>
							<CardText
								title="7 Reasons to Start Your Day With Lemon Water"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
							/>
							<ButtonReadMore />
						</div>
					</div>
					<div class="one__card-row">
						<div class="one__card-img">
							<CardImage img="/img/card-4.jpg" />
						</div>
						<div class="one__card-text">
							<CardAvatar
								img="/img/Avatar-4.png"
								name="Theresa Webb"
								month="October 17,2021"
								time="3:33 pm"
								comments="2 comments"
							/>
							<CardText
								title="Three Ideas for Cooking Goat Meat at Home"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
							/>
							<ButtonReadMore />
						</div>
					</div>
					<div class="one__card-row">
						<div class="one__card-img">
							<CardImage img="/img/card-5.jpg" />
						</div>
						<div class="one__card-text">
							<CardAvatar
								img="/img/Avatar-5.png"
								name="Leslie Alexander"
								month="October 17,2021"
								time="3:33 pm"
								comments="2 comments"
							/>
							<CardText
								title="12 Sparkling Wines We're Loving This Summer"
								text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
							/>
							<ButtonReadMore />
						</div>
					</div>
				</div>
				<div class="one__loading"></div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.one {
	// .one__header

	&__header {
		padding: 368px 0px 362px 0px;
		background-image: url(/img/one-bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	// .one__container

	&__container {
	}

	// .one__title

	&__title {
		margin: 0px 0px 32px 0px;
		color: #fff;
		text-align: center;
		/* Body */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px;
	}

	// .one__text

	&__text {
		color: #fff;
		text-align: center;
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}
}
.one {
	// .one__main

	&__main {
		padding: 129px 0px 128px 0px;
	}

	// .one__container

	&__container {
	}

	// .one__menu

	&__menu {
	}

	// .one__cards-row

	&__cards-row {
		display: flex;
		flex-direction: column;
		row-gap: 120px;
	}

	// .one__card-row

	&__card-row {
		display: flex;
		align-items: center;
		column-gap: 43px;
	}

	// .one__card-img

	&__card-img {
		position: relative;
		flex: 0 1 50%;
	}

	// .one__card-text

	&__card-text {
		flex: 0 1 50%;
	}

	// .one__loading

	&__loading {
	}
}
</style>
