<script setup>
import CardAvatar from '../components/CardAvatar.vue'
import NavBreadcrumbs from '../components/NavBreadcrumbs.vue'
import CardImage from '../components/CardImage.vue'
import CardText from '../components/CardText.vue'
import ButtonReadMore from '../components/ButtonReadMore.vue'
const navMenuPage = [
	{ name: 'Home', path: '/' },
	{ name: 'Blog', path: '#' },
	{ name: 'Three Ideas for Cooking Goat Meat at Home', path: '#' },
]
</script>

<template>
	<div class="sidebar">
		<div class="sidebar__header">
			<div class="sidebar__container-small">
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
		<div class="sidebar__main">
			<div class="sidebar__block-1 block-1">
				<NavBreadcrumbs :breadcrumbs="navMenuPage" />
				<div class="sidebar__container-small">
					<p class="block-1__text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
						in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
						parturient orci ac etiam congue mi. Elementum pellentesque non
						hendrerit et pharetra tellus leo tempus tellus.
					</p>
				</div>
				<div class="block-1__row">
					<img src="/img/sidebar-img1.jpg" alt="" class="block-1__img-1" />
					<img src="/img/sidebar-img2.jpg" alt="" class="block-1__img-2" />
				</div>
				<div class="sidebar__container-small">
					<p class="block-1__text-d">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et in sed
						in pellentesque ornare nunc nisl. Augue habitant accumsan, ut
						parturient orci ac etiam congue mi. Elementum pellentesque non
						hendrerit et pharetra tellus leo tempus tellus. Consectetur
						scelerisque facilisis nunc nunc. Sapien morbi dignissim id tortor
						vel volutpat facilisi. Cras lectus faucibus sed donec. Est pulvinar
						adipiscing eget at nunc amet bibendum enim vulputate. Eu orci nec
						consequat amet. Id cursus purus et fringilla molestie a nulla
						turpis. Lobortis dui rutrum sed sit. Mattis quis scelerisque
						consectetur orci dui est sem nulla.Tortor ullamcorper neque,
						habitant vulputate at in. Vel nulla in ornare amet id praesent.
						Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac
						urna diam tincidunt interdum faucibus mauris est. Nec, lacinia
						eleifend amet, quis turpis et massa duis.Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. Et in sed in pellentesque ornare nunc
						nisl. Augue habitant accumsan, ut parturient orci ac etiam congue
						mi.
					</p>
				</div>
			</div>
			<div class="sidebar__block-2 block-2">
				<div class="sidebar__container-small">
					<p class="block-2__text-bg">
						“ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
						lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor
						tincidunt lacus nunc.
					</p>
				</div>
			</div>
			<div class="sidebar__container-small">
				<p class="block-2__text">
					Elementum pellentesque non hendrerit et pharetra tellus leo tempus
					tellus. Consectetur scelerisque facilisis nunc nunc. Sapien morbi
					dignissim id tortor vel volutpat facilisi. Cras lectus faucibus sed
					donec. Est pulvinar adipiscing eget at nunc amet bibendum enim
					vulputate. Eu orci nec consequat amet. Id cursus purus et fringilla
					molestie a nulla turpis. Lobortis dui rutrum sed sit. Mattis quis
					scelerisque consectetur orci dui est sem nulla. Tortor ullamcorper
					neque, habitant vulputate at in. Vel nulla in ornare amet id praesent.
					Malesuada eu sed volutpat, tristique sed laoreet. Ultrices purus ac
					urna diam tincidunt interdum faucibus mauris est. Nec, lacinia
					eleifend amet, quis turpis et massa duis.
				</p>
			</div>
			<div class="sidebar__block-3 block-3">
				<div class="sidebar__container-small">
					<div class="block-3__tags"></div>
					<div class="block-3__avtor avtor">
						<img src="/img/Avatar-1.png" alt="" class="avtor__img" />
						<div class="autor__block">
							<div class="autor__name">Julie Christie</div>
							<div class="autor__text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
								lorem id penatibus imperdiet.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="sidebar__block-4 block-4">
				<div class="sidebar__container">
					<div class="block-4__title">Related Posts</div>
					<div class="block-4__row">
						<div class="block-4__card card">
							<div class="card__row">
								<div class="card__img">
									<CardImage img="/img/card-1.jpg" />
								</div>
								<div class="card__text">
									<CardAvatar
										img="/img/Avatar-1.png"
										name="Julie Christie"
										month="October 17,2021"
										time="3:33 pm"
										comments="2 comments"
									/>
									<CardText
										title="Fruit and vegetables and protection against diseases"
										text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
									/>
									<ButtonReadMore />
								</div>
							</div>
						</div>
						<div class="block-4__card card">
							<div class="card__row">
								<div class="card__img">
									<CardImage img="/img/card-2.jpg" />
								</div>
								<div class="card__text">
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
						</div>
					</div>
				</div>
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

	&__container-small {
		max-width: 992px;
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
.sidebar {
	// .sidebar__main

	&__main {
		padding: 129px 0px 229px 0px;
	}

	// .sidebar__container

	&__container {
	}
}
.sidebar {
	// .sidebar__main

	&__main {
	}

	// .sidebar__block-1

	&__block-1 {
	}

	// .sidebar__container-small

	&__container-small {
	}

	// .sidebar__block-2

	&__block-2 {
	}

	// .sidebar__container

	&__container {
	}

	// .sidebar__block-3

	&__block-3 {
	}

	// .sidebar__block-4

	&__block-4 {
	}
}
.breadcrumbs {
	justify-content: center;
}
.block-1 {
	// .block-1__text

	&__text {
		margin: 106px 0px 106px 0px;
		color: var(--4-d-4-d-4-d, #4d4d4d);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 5 */
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}
	&__text-d {
		margin: 106px 0px 106px 0px;
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
	// .block-1__row

	&__row {
		display: flex;
	}

	// .block-1__img-1

	&__img-1 {
		margin: 0px 0px 0px 142px;
		flex: 0 1 50%;
	}

	// .block-1__img-2

	&__img-2 {
		margin: 0px 142px 0px 0px;
		flex: 0 1 50%;
	}

	// .block-1__tags

	&__tags {
	}
}
.block-2 {
	padding: 173px 0px 222px 0px;
	background-image: url(/img/sidebar_bg_2.svg), url(/img/sidebar_bg.jpg);
	background-repeat: no-repeat;
	background-size: auto auto, cover;
	background-position: center left 68%;

	// .block-2__text-bg

	&__text-bg {
		color: var(--ffffff, #fff);
		font-feature-settings: 'clig' off, 'liga' off;
		font-family: Lato;
		font-size: 38px;
		font-style: italic;
		font-weight: 700;
		line-height: 140%; /* 53.2px */
	}

	// .block-2__text

	&__text {
		margin: 106px 0px 106px 0px;
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
.sidebar {
	// .sidebar__block-3

	&__block-3 {
	}

	// .sidebar__container-small

	&__container-small {
	}
}
.block-3 {
	// .block-3__tags

	&__tags {
	}

	// .block-3__avtor

	&__avtor {
		display: flex;
		column-gap: 60px;
	}
}
.avtor {
	margin: 0px 0px 128px 0px;
	// .avtor__img

	&__img {
		width: 220px;
		height: 220px;
	}
}
.autor {
	// .autor__block

	&__block {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
	}

	// .autor__name

	&__name {
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 5 */
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}

	// .autor__text

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

.block-4 {
	// .block-4__title

	&__title {
		margin: 0px 0px 128px 0px;
		padding: 128px 0px 0px 0px;
		border-top: 4px dashed #000;
		color: var(--000000, #000);
		text-align: center;
		font-feature-settings: 'clig' off, 'liga' off;
		font-family: Rufina;
		font-size: 48px;
		font-style: normal;
		font-weight: 700;
		line-height: 64px; /* 133.333% */
	}

	// .block-4__row

	&__row {
		display: flex;
		column-gap: 60px;
	}

	// .block-4__card

	&__card {
	}
}
.card {
	// .card__row

	&__row {
		display: flex;
		flex-direction: column;
		row-gap: 68px;
	}

	// .card__img

	&__img {
		position: relative;
	}

	// .card__text

	&__text {
	}
}
</style>
