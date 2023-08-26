<script setup>
import CardWork from '../components/CardWork.vue'
import FormReservation from '../components/FormReservation.vue'
</script>

<template>
	<div class="about">
		<div class="about__header">
			<div class="about__container header-about">
				<div class="about__row">
					<h1 class="header-about__title">Who We Are</h1>
					<div class="header-about__text">
						The most important thing for us is to give you the comfortable
						dining experience
					</div>
				</div>
			</div>
		</div>
		<div class="about__block-1 block-1">
			<div class="block-1__container">
				<div class="block-1__row">
					<div class="block-1__story">
						<h1 class="block-1__title">Our Story</h1>
						<p class="block-1__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
							lorem id penatibus imperdiet. Turpis egestas ultricies purus
							auctor tincidunt lacus nunc.
						</p>
					</div>
					<img src="/img/about-bl1.jpg" alt="" class="block-1__img" />
				</div>
			</div>
		</div>
		<div class="about__block-2 block-2">
			<div class="block-2__container">
				<div class="block-2__row">
					<div class="block-2__cards">
						<div class="block-2__card">
							<CardWork
								work="Restuarant Manager"
								name="Carson Hugn"
								img="/img/CardWork-1.jpg"
							/>
						</div>
						<div class="block-2__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
							in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
							parturient orci ac etiam congue mi.
						</div>
					</div>
					<div class="block-2__cards block-2__cards_revers">
						<div class="block-2__card">
							<CardWork
								work="Executive Chef"
								name="Jane Cooper"
								img="/img/CardWork-2.jpg"
							/>
						</div>
						<div class="block-2__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
							in pellentesque ornare nunc nisl.
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="about__block-3 block-3">
			<h3 class="block-3__title">It looks delicious</h3>
			<p class="block-3__text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
			</p>
			<img class="block-3__play" src="/icons/Play.png" alt="" />
		</div>
		<div class="about__block-4 block-4">
			<div class="block-4__container">
				<div class="block-4__title">Sophisticated Process</div>
				<div class="block-4__one-row row-one">
					<img src="/img/about-bl4_1.jpg" alt="" class="row-one__img" />
					<div class="row-one__name">
						<div class="row-one__title">01.Slice</div>
						<div class="row-one__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
							lorem id penatibus imperdiet. Turpis egestas ultricies purus
							auctor tincidunt lacus nunc. Convallis pellentesque quis fringilla
							sagittis. Egestas in risus sit nunc nunc, arcu donec nam etiam.
						</div>
					</div>
				</div>
				<div class="block-4__row-cards">
					<div class="block-4__colum-row row-colum">
						<div class="row-colum__card">
							<div class="row-colum__title">03.Bake</div>
							<div class="row-colum__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
								lorem id penatibus imperdiet.
							</div>
						</div>
						<img src="/img/about-bl4_2.jpg" alt="" class="row-colum__img" />
					</div>
					<div class="block-4__colum-row row-colum_revers">
						<div class="row-colum__card">
							<div class="row-colum__title">02.Pickled</div>
							<div class="row-colum__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
								lorem id penatibus imperdiet.
							</div>
						</div>
						<img src="/img/about-bl4_3.jpg" alt="" class="row-colum__img" />
					</div>
				</div>
			</div>
		</div>
		<FormReservation />
	</div>
</template>

<style lang="scss" scoped>
.about {
	// .about__header

	&__header {
		padding: 410px 0px 372px 0px;
		background-image: url(/img/bg_about.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	// .about__container

	&__container {
	}

	// .about__row

	&__row {
		display: flex;
		flex-direction: column;
		width: 55%;
		row-gap: 50px;
	}
}
.header-about {
	display: flex;
	justify-content: flex-end;
	// .header-about__title

	&__title {
		/* Hero Heading */
		font-family: Rufina;
		font-size: 148px;
		font-style: normal;
		font-weight: 700;
		line-height: 152px; /* 102.703% */
	}

	// .header-about__text

	&__text {
		/* Heading 5 */
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}
}
.about {
	// .about__block-1

	&__block-1 {
	}
}
.block-1 {
	// .block-1__container
	padding: 218px 0px 117px 0px;

	&__container {
	}

	// .block-1__row

	&__row {
		position: relative;
		display: flex;
		column-gap: 60px;
		&::before {
			position: absolute;
			content: '';
			background-image: url(/img/Tomato.png);
			width: 355px;
			height: 300px;
			top: -110px;
			left: 32%;
		}
	}

	// .block-1__story

	&__story {
		padding: 0px 0px 0px 77px;
		flex: 0 1 50%;
	}

	// .block-1__title

	&__title {
		margin: 233px 0px 18px 0px;
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 1 */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px; /* 111.111% */
	}

	// .block-1__text

	&__text {
		color: var(--4-d-4-d-4-d, #4d4d4d);
		font-feature-settings: 'clig' off, 'liga' off;

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
		flex: 0 1 50%;
	}
}
.about {
	// .about__block-2

	&__block-2 {
	}
}
.block-2 {
	padding: 162px 0px 299px 0px;
	// .block-2__row

	&__row {
		display: flex;
		column-gap: 121px;
	}

	// .block-2__cards

	&__cards {
		display: flex;
		flex-direction: column;
		flex: 0 1 50%;
		row-gap: 400px;
	}

	// .block-2__card

	&__card {
	}
	&__cards_revers {
		display: flex;
		flex-direction: column-reverse;
	}
	// .block-2__text

	&__text {
		color: var(--4-d-4-d-4-d, #4d4d4d);
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
.about {
	// .about__block-3

	&__block-3 {
	}
}
.block-3 {
	background-image: url(/img/about-bl3-playpng.png),
		url(/img/about-bl3-play.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	padding: 238px 0px 188px 0px;
	text-align: center;
	// .block-3__title

	&__title {
		margin: 0px 0px 18px 0px;
		color: var(--ffffff, #fff);

		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 1 */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px; /* 111.111% */
	}

	// .block-3__text

	&__text {
		margin: 0px 0px 82px 0px;
		color: var(--ffffff, #fff);

		font-feature-settings: 'clig' off, 'liga' off;

		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .block-3__play

	&__play {
	}
}
.about {
	// .about__block-4

	&__block-4 {
	}
}
.block-4 {
	padding: 267px 0px 320px 0px;
	background-image: url(/img/about-bl4_rosemary.png),
		url(/img/about-bl4_rosemary2.png);
	background-repeat: no-repeat;
	background-position: top right, bottom left;

	// .block-4__container

	&__container {
	}

	// .block-4__title

	&__title {
		margin: 0px 0px 174px 0px;
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 1 */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px; /* 111.111% */
	}

	// .block-4__one-row

	&__one-row {
		margin: 0px 0px 118px 0px;
		display: flex;
		column-gap: 60px;
	}

	// .block-4__colum-row
	&__row-cards {
		display: flex;
		justify-content: space-around;
	}
	&__colum-row {
		display: flex;
		flex-direction: column;
		row-gap: 46px;
		flex: 0 1 41.666%;
	}
}
.row-one {
	// .row-one__img

	&__img {
		flex: 0 1 50%;
	}

	// .row-one__name

	&__name {
		padding: 0px 0px 0px 42px;
		display: flex;
		flex-direction: column;
		row-gap: 28px;
		justify-content: center;
		flex: 0 1 50%;
	}

	// .row-one__title

	&__title {
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 2 */
		font-family: Rufina;
		font-size: 88px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%; /* 105.6px */
	}

	// .row-one__text

	&__text {
		color: var(--4-d-4-d-4-d, #4d4d4d);
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
.row-colum {
	&_revers {
		display: flex;
		flex-direction: column-reverse;
	}

	// .row-colum__title

	&__title {
		margin: 0px 0px 28px 0px;
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 2 */
		font-family: Rufina;
		font-size: 88px;
		font-style: normal;
		font-weight: 700;
		line-height: 120%; /* 105.6px */
	}

	// .row-colum__text

	&__text {
		color: var(--4-d-4-d-4-d, #4d4d4d);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .row-colum__img

	&__img {
	}
}
</style>
