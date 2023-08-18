<script setup>
import { RouterLink } from 'vue-router'
import NavIcon from './NavIcon.vue'
import BurgerClose from './BurgerClose.vue'

function closeBurger() {
	document.querySelector('.burger').classList.remove('active')
	document.querySelector('.nav').classList.remove('open')
}
function openBlogs() {
	document.querySelector('.nav__link-item').classList.toggle('column')
}
const headerMenuList = [
	{ name: 'Home', path: '/' },
	{ name: 'Menu', path: '/menu' },
	{
		name: 'Blogs',
		dropdown: [
			{ name: '1 Column', path: '/one' },
			{ name: '2 Columns', path: '/two' },
			{ name: 'Sidebar Post', path: '/sidebar' },
		],
	},
	{ name: 'About', path: '/About' },
	{ name: 'Contacts', path: '/contacts' },
]
</script>

<template>
	<div class="nav">
		<BurgerClose />
		<div class="nav__row">
			<nav class="nav__menu">
				<ul class="nav__item">
					<li v-for="nav in headerMenuList" class="nav__link">
						<RouterLink
							v-if="!nav.dropdown"
							@click="closeBurger"
							:to="nav.path"
						>
							{{ nav.name }}
						</RouterLink>

						<div v-else @click="openBlogs">{{ nav.name }}</div>

						<ul v-if="nav.dropdown" class="nav__link-item">
							<li v-for="dd in nav.dropdown">
								<RouterLink @click="closeBurger" :to="dd.path">
									{{ dd.name }}
								</RouterLink>
							</li>
						</ul>
					</li>
				</ul>
			</nav>

			<div class="nav__contacts contacts-nav">
				<div class="contacts-nav__contacts">Contact</div>
				<div class="contacts-nav__tel">+86 852 346 000 info@foodzero.com</div>
				<div class="contacts-nav__adrres">
					1959 Sepulveda Blvd. Culver City, CA, 90230
				</div>
				<NavIcon />
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.open {
	display: flex !important;
}
.nav {
	background-image: url(/img/bg_overlay.png), url(/img/bg_nav.png);
	background-repeat: no-repeat;
	background-size: cover;

	background-color: #233000;
	display: none;
	flex-direction: column;
	position: fixed;
	z-index: 50;
	height: 100%;
	width: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	overflow-y: auto;
	padding: 222px 0px 222px 0px;

	animation: burgerAnimation 0.4s;
	// .nav__container

	&__container {
	}

	// .nav__row

	&__row {
		display: flex;
		justify-content: space-around;
	}

	// .nav__menu

	&__menu {
	}
	&__link {
		position: relative;
		padding: 28px 0px 0px 0px;
		color: #fff;
		font-family: Rufina;
		font-size: 66px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		text-transform: uppercase;
	}
	&__link::before {
		content: '';
		position: absolute;
		width: 12px;
		height: 12px;
		background-color: #fff;
		border-radius: 50%;
		top: 60px;
		left: -25px;
	}

	// .nav__contacts

	&__link-item {
		display: none;
		li {
			padding: 6px 0px 0px 0px;
		}
		&.column {
			display: block;
			padding: 6px 0px 0px 10px;
			color: #fff;
			font-family: Rufina;
			font-size: 24px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
		}
	}
}
.menu-nav {
	// .menu-nav__list

	&__list {
	}

	// .menu-nav__link

	&__link {
	}
}
.contacts-nav {
	// .contacts-nav__contacts
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	row-gap: 38px;

	&__contacts {
		/* Heading 5 */
		border-bottom: 2px dashed;
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}

	// .contacts-nav__tel

	&__tel {
		/* Widgets Text */
		font-family: Lato;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 25px; /* 138.889% */
		letter-spacing: 0.36px;
	}

	// .contacts-nav__adrres

	&__adrres {
	}

	/* Widgets Text */
	font-family: Lato;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 25px; /* 138.889% */
	letter-spacing: 0.36px;

	// .contacts-nav__icon

	&__icon {
		display: flex;
		justify-content: space-between;
	}

	// .contacts-nav__instagram

	&__instagram {
	}

	// .contacts-nav__twitter

	&__twitter {
	}

	// .contacts-nav__facebook

	&__facebook {
	}

	// .contacts-nav__youtube

	&__youtube {
	}
}
@keyframes burgerAnimation {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
