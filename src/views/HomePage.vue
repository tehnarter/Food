<script setup>
import CardImage from '../components/CardImage.vue'
import FormReservation from '../components/FormReservation.vue'
import MenuCard from '../components/MenuCard.vue'
import ButtonReadMore from '../components/ButtonReadMore.vue'
import CardText from '../components/CardText.vue'
import CardAvatar from '../components/CardAvatar.vue'
</script>

<template>
	<div class="home">
		<div class="home__background">
			<div class="home__container">
				<div class="home__block-1 block-1">
					<div class="block-1__row">
						<div class="block-1__eating">
							<div class="block-1__title">
								Healthy Eating is important part of lifestyle
							</div>
							<div class="block-1__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
								congue arcu
							</div>
							<div class="block-1__scroll">Scroll ------------------</div>
						</div>
						<div class="block-1__img">
							<img src="/img/bl-1img.jpg" alt="" />
						</div>
					</div>
				</div>
				<div class="home__block-2 block-2">
					<div class="block-2__row">
						<div class="block-2__img-1">
							<img src="/img/spices1.jpg" alt="" />
						</div>
						<div class="block-2__img-2">
							<img src="/img/spices2.jpg" alt="" />
						</div>
						<div class="block-2__img-3">
							<img src="/img/spices3.jpg" alt="" />
						</div>
					</div>
				</div>
				<div class="home__block-3 block-3">
					<div class="block-3__row">
						<div class="block-3__start start">
							<div class="start__title">Start to plan your diet today</div>
							<div class="start__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
								congue arcu
							</div>
							<img class="start__img" src="/img/bl-3-1.jpg" alt="" />
						</div>
						<div class="block-3__lorem lorem">
							<div class="lorem__img">
								<img src="/img/bl-3-2.jpg" alt="" />
							</div>
							<div class="lorem__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
								congue arcu
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="home__block-4 block-4">
			<div class="block-4__container">
				<h2 class="block-4__title">Our Menu</h2>
				<div class="block-4__text">
					This is a section of your menu. Give your section a brief description
				</div>
				<div class="block-4__row">
					<MenuCard
						price="$20"
						title="Deep Sea Snow White Cod Fillet"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/><MenuCard
						price="$22"
						title="Steak With Rosemary Butter"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
					<MenuCard
						price="$18"
						title="Cucumber Salad"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
					<MenuCard
						price="$90"
						title="Natural Wine Pairing"
						text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
					/>
				</div>
			</div>
		</div>
		<div class="home__block-5 block-5">
			<div class="block-5__container">
				<div class="block-5__row cook">
					<div class="cook__img">
						<img class="cook__jpg" src="/img/home-bl5-cook.jpg" alt="" />
					</div>
					<div class="cook__cook">
						<h3 class="cook__title">Excellent cook</h3>
						<div class="cook__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
							lorem id penatibus imperdiet. Turpis egestas ultricies purus
							auctor tincidunt lacus nunc.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="home__block-6 block-6">
			<div class="block-6__container">
				<div class="block-6__row">
					<div class="block-6__cards card">
						<div class="card__icon">
							<img src="/icons/Icon_fish.svg" alt="" class="card__img" />
						</div>
						<div class="card__title">Premium Quality</div>
						<div class="card__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
							congue arcu
						</div>
					</div>
					<div class="block-6__cards card">
						<div class="card__icon">
							<img src="/icons/Icon_carrot.svg" alt="" class="card__img" />
						</div>
						<div class="card__title">Seasonal Vegetables</div>
						<div class="card__text">Seasonal Vegetables</div>
					</div>
					<div class="block-6__cards card">
						<div class="card__icon">
							<img src="/icons/Icon_lemon.svg" alt="" class="card__img" />
						</div>
						<div class="card__title">Fresh Fruit</div>
						<div class="card__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
							congue arcu
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="home__block-7 block-7">
			<div class="block-7__container">
				<div class="block-7__row">
					<div class="block-7__cards card">
						<div class="card__img">
							<CardImage img="/img/card-1.jpg" />
						</div>
						<CardAvatar
							img="/img/home-avatar1.jpg"
							name="Julie Christie"
							month="October 17,2021"
							time="3:33 pm"
							comments="2 comments"
						/>

						<CardText
							title="Fruit and vegetables and protection against diseases"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>
						<ButtonReadMore />
					</div>
					<div class="block-7__cards card">
						<div class="card__img">
							<CardImage img="/img/card-2.jpg" />
						</div>
						<CardAvatar
							img="/img/home-avatar2.jpg"
							name="Dianne Russell"
							month="October 17,2021"
							time="3:33 pm"
							comments="2 comments"
						/>

						<CardText
							title="Asparagus Spring Salad with Rocket, Goat's Cheese"
							text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
						/>

						<ButtonReadMore />
					</div>
				</div>
			</div>
		</div>
		<FormReservation />
	</div>
</template>
<style lang="scss" scoped>
.home {
	// .home__block-1
	&__background {
		padding: 310px 0px 0px 0px;
		background-color: #233000;
	}
	&__block-1 {
	}
}
.block-1 {
	// .block-1__row

	&__row {
		display: flex;
	}

	// .block-1__eating

	&__eating {
		display: flex;
		flex-direction: column;
		row-gap: 50px;
	}
	&__title {
		/* Hero Heading */
		position: relative;
		margin: -125px -200px 0px 0px;
		font-family: Rufina;
		font-size: 148px;
		font-style: normal;
		font-weight: 700;
		line-height: 152px; /* 102.703% */
	}
	// .block-1__scroll

	&__scroll {
		font-family: Rufina;
		font-size: 48px;
		align-items: start;
		font-weight: 700;
		line-height: 64px;
		transform: rotate(90deg);
		transform-origin: left 50px;
	}
	&__text {
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}
	// .block-1__img

	&__img {
	}
}
//BLOCK-2

.home {
	// .home__block-2

	&__block-2 {
	}
}
.block-2 {
	margin: -200px 0px 240px 0px;
	// .block-2__row

	&__row {
		display: flex;
		column-gap: 44px;
		justify-content: center;
	}

	// .block-2__img

	&__img {
	}

	// .block-2__img-1
	&__img-1 {
		width: 250px;
		height: 250px;
	}
	&__img-1 img {
		width: 100%;
		border-radius: 50%;
	}

	// .block-2__img-2
	&__img-2 {
		width: 250px;
		height: 250px;
	}
	&__img-3 {
		width: 250px;
		height: 250px;
	}
	&__img-2 img {
		width: 100%;
		border-radius: 50%;
	}

	// .block-2__img-3

	&__img-3 img {
		width: 100%;
		border-radius: 50%;
	}
}
// BLOCK-3

.home {
	// .home__block-3

	&__block-3 {
	}
}
.block-3 {
	padding: 0px 0px 255px 0px;
	// .block-3__row

	&__row {
		display: flex;
		justify-content: space-between;
	}

	// .block-3__start

	&__start {
		/* Heading 3 */
	}

	// .block-3__lorem

	&__lorem {
	}
}
.start {
	display: flex;
	flex-direction: column;
	row-gap: 54px;
	// .start__img

	&__img img {
		width: 100%;
	}

	// .start__title

	&__title {
		font-family: Rufina;
		font-size: 68px;
		font-style: normal;
		font-weight: 700;
		line-height: 84px; /* 123.529% */
	}

	// .start__text

	&__text {
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}
}
.lorem {
	display: flex;
	flex-direction: column-reverse;
	row-gap: 84px;
	flex: 0 1 33.333%;
	// .lorem__img

	&__img img {
		width: 100%;
	}

	// .lorem__text

	&__text {
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}
}
//BLOCK-4
.home {
	// .home__block-4

	&__block-4 {
	}
}
.block-4 {
	padding: 176px 0px 218px 0px;
	background-image: url(/img/home-block4.png);
	background-repeat: no-repeat;
	background-position: top right;
	// .block-4__container

	&__container {
	}

	// .block-4__title

	&__title {
		/* Heading 1 */
		margin: 0px 0px 18px 0px;
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px; /* 111.111% */
		color: #000;
	}

	// .block-4__text

	&__text {
		/* Body */
		padding: 0px 0px 158px 0px;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}

	// .block-4__row

	&__row {
		margin: 0px -30px 218px -30px;
		display: flex;
		flex-wrap: wrap;
		row-gap: 108px;
	}

	// .block-4__card

	&__card {
	}
}
.card-menu {
	// .card-menu__price

	&__price {
	}

	// .card-menu__title

	&__title {
	}

	// .card-menu__text

	&__text {
		/* Body */
	}
}
.home {
	// .home__block-5

	&__block-5 {
	}
}
.block-5 {
	// .block-5__container

	&__container {
	}

	// .block-5__row

	&__row {
		display: flex;
	}
}
.cook {
	// .cook__img

	&__img {
		flex: 0 1 58.333%;
		position: relative;
		&::before {
			content: '';
			width: 100%;
			height: 100%;
			top: -100px;
			left: -40px;
			position: absolute;
			background-image: url(/img/home-bl5-png1.png);
			background-repeat: no-repeat;
		}
		&::after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			top: 20px;
			left: 0;
			background-image: url(/img/home-bl5-eat.png);
			background-repeat: no-repeat;
		}
	}

	// .cook__jpg

	&__jpg {
		width: 100%;
	}

	// .cook__cook

	&__cook {
		position: relative;
		flex: 0 1 41.666%;
		display: flex;
		flex-direction: column;
		row-gap: 18px;
		&:after {
			content: '';
			width: 100%;
			height: 100%;
			position: absolute;
			background-image: url(/img/home-bl5-png2.png);
			background-repeat: no-repeat;
			background-position: bottom right;
		}
	}

	// .cook__title

	&__title {
		color: #000;

		/* Heading 1 */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px; /* 111.111% */
	}

	// .cook__text

	&__text {
		color: #4d4d4d;

		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}
}
// BLOCK-6
.home {
	// .home__block-6

	&__block-6 {
		padding: 190px 0px 207px 0px;
	}
}
.block-6 {
	// .block-6__container

	&__container {
	}

	// .block-6__row

	&__row {
		display: flex;
	}

	// .block-6__cards

	&__cards {
		display: flex;

		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 39px;
		flex: 0 1 33.333%;
	}
}
.card {
	// .card__icon

	&__icon {
	}

	// .card__img

	&__img {
		align-self: center;
	}

	// .card__title

	&__title {
		color: var(--000000, #000);
		text-align: center;
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 4 */
		font-family: Rufina;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px; /* 133.333% */
	}

	// .card__tex

	&__text {
		color: var(--4-d-4-d-4-d, #4d4d4d);
		text-align: center;
		font-feature-settings: 'clig' off, 'liga' off;

		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}
}
// BLOCK-7
.home {
	// .home__block-7

	&__block-7 {
		padding: 130px 0px 105px 0px;
	}
}
.block-7 {
	// .block-7__container

	&__container {
	}

	// .block-7__row

	&__row {
		display: flex;
		column-gap: 60px;
	}

	// .block-7__cards

	&__cards {
		flex: 0 1 50%;
	}
}
.card {
	// .card__img

	&__img {
		position: relative;
		margin: 0px 0px 68px 0px;
	}

	// .card__jpg

	&__jpg {
		width: 100%;
	}

	// .card__subtitle

	&__subtitle {
		/* Avatar */
	}

	// .card__autor

	&__autor {
		margin: 0px 72px 0px 75px;
		display: flex;
		color: #5e6600;
		align-items: center;
		justify-content: space-between;
		/* Label */
		font-family: Lato;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.36px;
	}

	// .card__title

	&__title {
	}

	// .card__text

	&__text {
	}

	// .card__button

	&__button {
	}
}
.autor-card {
	// .autor-card__avatar

	&__avatar {
	}

	// .autor-card__name

	&__name {
	}

	// .autor-card__month

	&__month {
	}

	// .autor-card__time

	&__time {
	}

	// .autor-card__comments

	&__comments {
	}
}
</style>
