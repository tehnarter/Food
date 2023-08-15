<script setup>
import FormReservation from '../components/FormReservation.vue'
</script>
<template>
	<div class="menu">
		<div class="menu__header">
			<div class="menu__container">
				<div class="menu__row">
					<div class="menu__row-flex">
						<h1 class="menu__title">View Our New Menu</h1>
						<div class="menu__text">
							The freshest ingredients for you every day
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="menu__block-1 block-1">
			<div class="block-1__container">
				<h2 class="block-1__title">Starters</h2>
				<div class="block-1__text">
					This is a section of your menu. Give your section a brief description
				</div>
				<div class="block-1__row">
					<div class="block-1__img">
						<img src="/img/menu-bl1-card.jpg" alt="" />
					</div>
					<div class="block-1__cards">
						<div class="block-1__card card-menu">
							<div class="card-menu__price">$20</div>
							<div class="card-menu__title">Grilled Okra and Tomatoes</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div class="block-1__card card-menu">
							<div class="card-menu__price">$18</div>
							<div class="card-menu__title">Cucumber Salad</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div class="block-1__card card-menu">
							<div class="card-menu__price">$12</div>
							<div class="card-menu__title">Basil Pancakes</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="menu__block-2 block-2">
			<div class="block-2__container">
				<h2 class="block-2__title">Mains</h2>
				<div class="block-2__text">
					This is a section of your menu. Give your section a brief description
				</div>
				<div class="block-2__row">
					<div class="block-2__img">
						<img src="/img/menu-bl2-img2.jpg" alt="" />
					</div>
					<div class="block-2__cards">
						<div class="block-2__card card-menu">
							<div class="card-menu__price">$20</div>
							<div class="card-menu__title">Deep Sea Snow White Cod Fillet</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div class="block-2__card card-menu">
							<div class="card-menu__price">$22</div>
							<div class="card-menu__title">Steak With Rosemary Butter</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div class="block-2__card card-menu">
							<div class="card-menu__price">$20</div>
							<div class="card-menu__title">Steaks with Grilled Kimchi</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="menu__block-3 block-3">
			<div class="block-3__container">
				<h2 class="block-3__title">Pastries & Drinks</h2>
				<div class="block-3__text">
					This is a section of your menu. Give your section a brief description
				</div>
				<div class="block-3__row">
					<div class="block-3__img">
						<img src="/img/menu-bl2-img3.jpg" alt="" />
					</div>
					<div class="block-3__cards">
						<div class="block-3__card card-menu">
							<div class="card-menu__price">$158</div>
							<div class="card-menu__title">Wine Pairing</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div class="block-3__card card-menu">
							<div class="card-menu__price">$168</div>
							<div class="card-menu__title">Natural Wine Pairing</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
						<div class="block-3__card card-menu">
							<div class="card-menu__price">$90</div>
							<div class="card-menu__title">Whisky Flyer</div>
							<div class="card-menu__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<FormReservation />
	</div>
</template>
<style lang="scss" scoped>
.menu {
	// .menu__container
	&__header {
		background-image: url(/img/bgmenu.jpg);
		background-repeat: no-repeat;
		background-size: cover;
		padding: 350px 0px 426px 0px;
	}
	&__container {
	}

	// .menu__row

	&__row {
		display: flex;
	}
	&__row-flex {
		display: flex;
		flex-direction: column;
		flex: 0 1 50%;
		row-gap: 50px;
	}
	// .menu__title

	&__title {
		/* Hero Heading */
		font-family: Rufina;
		font-size: 148px;
		font-style: normal;
		font-weight: 700;
		line-height: 152px; /* 102.703% */
	}

	// .menu__text

	&__text {
		/* Heading 5 */
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}
}
.menu {
	// .menu__container

	&__container {
	}

	// .menu__block-1

	&__block-1 {
	}
}
.block-1 {
	padding: 122px 0px 140px 0px;
	background-image: url(/img/menu-bl1.png);
	background-repeat: no-repeat;
	background-position: top right;

	// .block-1__container

	&__container {
	}

	// .block-1__title

	&__title {
		margin: 0px 0px 18px 0px;
		text-align: center;
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px;
		color: #000;
	}

	// .block-1__text

	&__text {
		margin: 0px 0px 81px 0px;
		color: #4d4d4d;
		text-align: center;
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .block-1__row

	&__row {
		display: flex;
		column-gap: 59px;
		align-items: center;
	}

	// .block-1__img

	&__img {
		flex: 0 1 50%;
		img {
			width: 100%;
		}
	}

	// .block-1__cards

	&__cards {
		display: flex;
		flex-direction: column;
		row-gap: 58px;
		flex: 0 1 50%;
	}

	// .block-1__card

	&__card {
	}
}
.card-menu {
	display: flex;
	flex-direction: column;
	row-gap: 24px;
	// .card-menu__price

	&__price {
		display: flex;
		flex-direction: row-reverse; /* Heading 4 */
		padding: 0px 0px 12px 0px;
		border-bottom: 4px dashed #000;
		font-family: Rufina;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px; /* 133.333% */
		color: #000;
	}

	// .card-menu__title

	&__title {
		font-family: Rufina;
		font-size: 68px;
		font-style: normal;
		font-weight: 700;
		line-height: 84px;
		color: #000; /* 123.529% */
	}

	// .card-menu__text

	&__text {
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}
}
.menu {
	// .menu__block-2

	&__block-2 {
	}
}
.block-2 {
	// .block-2__container
	padding: 82px 0px 130px 0px;

	// .block-2__title

	&__title {
		margin: 0px 0px 18px 0px;
		text-align: center;
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px;
		color: #000;
	}

	// .block-2__text

	&__text {
		margin: 0px 0px 129px 0px;
		color: #4d4d4d;
		text-align: center;
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .block-2__row

	&__row {
		display: flex;
		flex-direction: row-reverse;
		column-gap: 59px;
		align-items: center;
	}

	// .block-2__img

	&__img {
		flex: 0 1 50%;
		img {
			width: 100%;
		}
	}
	// .block-2__cards

	&__cards {
		display: flex;
		flex-direction: column;
		row-gap: 58px;
		flex: 0 1 50%;
	}

	// .block-2__card

	&__card {
	}
}
.menu {
	// .menu__block-3

	&__block-3 {
	}
}
.block-3 {
	padding: 187px 0px 208px 0px;
	background-image: url(/img/menu-bl2-Avocado.png);
	background-repeat: no-repeat;
	background-position: top center;
	// .block-3__container

	&__container {
	}

	// .block-3__title

	&__title {
		margin: 0px 0px 18px 0px;
		text-align: center;
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px;
		color: #000;
	}

	// .block-3__text

	&__text {
		margin: 0px 0px 159px 0px;
		color: #4d4d4d;
		text-align: center;
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .block-3__row

	&__row {
		display: flex;
		column-gap: 59px;
		align-items: center;
	}

	// .block-3__img

	&__img {
		flex: 0 1 50%;
		img {
			width: 100%;
		}
	}

	// .block-3__cards

	&__cards {
		display: flex;
		flex-direction: column;
		row-gap: 58px;
		flex: 0 1 50%;
	}

	// .block-3__card

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
	}
}
</style>
