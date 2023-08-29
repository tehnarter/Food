<script setup>
import CardImage from '../components/CardImage.vue'
import CardAvatar from '../components/CardAvatar.vue'
import CardText from '../components/CardText.vue'
import ButtonReadMore from '../components/ButtonReadMore.vue'
import NavBreadcrumbs from '../components/NavBreadcrumbs.vue'
const navMenuPage = [
	{ name: 'Home', path: '/' },
	{ name: 'Blog', path: '#' },
	{ name: 'Blog Two Columns', path: '#' },
]
</script>

<template>
	<div class="two">
		<div class="two__header">
			<div class="two__container">
				<h1 class="two__title">Blogs - Two Columns</h1>
				<div class="two__text">
					It is easy way to create your beatiful blog for daily
				</div>
			</div>
		</div>
		<div class="two__main">
			<div class="two__container">
				<NavBreadcrumbs :breadcrumbs="navMenuPage" />
				<div class="two__menu"></div>
				<div class="two__cards-row">
					<div class="two__card-row">
						<div class="two__card-img">
							<CardImage img="/img/card-1.jpg" />
						</div>
						<div class="two__card-text">
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
					<div class="two__card-row">
						<div class="two__card-img">
							<CardImage img="/img/card-2.jpg" />
						</div>
						<div class="two__card-text">
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
					<div class="two__card-row">
						<div class="two__card-img">
							<CardImage img="/img/card-3.jpg" />
						</div>
						<div class="two__card-text">
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
					<div class="two__card-row">
						<div class="two__card-img">
							<CardImage img="/img/card-4.jpg" />
						</div>
						<div class="two__card-text">
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
					<div class="two__card-row">
						<div class="two__card-img">
							<CardImage img="/img/card-6.jpg" />
						</div>
						<div class="two__card-text">
							<CardAvatar
								img="/img/Avatar-6.png"
								name="Cody Fisher"
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
					<div class="two__card-row">
						<div class="two__card-img">
							<CardImage img="/img/card-5.jpg" />
						</div>
						<div class="two__card-text">
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
				<div class="two__loading"></div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.two {
	// .two__header

	&__header {
		padding: 368px 0px 362px 0px;
		background-image: url(/img/one-bg.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	// .two__container

	&__container {
	}

	// .two__title

	&__title {
		color: #fff;
		text-align: center;
		margin: 0px 0px 32px 0px;
		/* Heading 1 */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px;
	}

	// .two__text

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
.two {
	// .two__main

	&__main {
		padding: 129px 0px 128px 0px;
	}

	// .two__container

	&__container {
	}

	// .two__menu

	&__menu {
	}

	// .two__cards-row

	&__cards-row {
		margin: 0px -30px 0px -30px;
		display: flex;
		flex-wrap: wrap;
		row-gap: 120px;
	}

	// .two__card-row

	&__card-row {
		padding: 0px 30px 0px 30px;
		flex: 0 1 50%;
	}

	// .two__card-img

	&__card-img {
		position: relative;
		margin: 0px 0px 68px 0px;
	}

	// .two__card-text

	&__card-text {
	}

	// .two__loading

	&__loading {
	}
}
</style>
