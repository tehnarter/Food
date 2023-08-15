<script setup>
import NavIcon from './NavIcon.vue'
</script>
<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__row">
				<div class="footer__food">
					<a href="/"><img src="/img/Footer_logo.svg" /></a>
				</div>
				<div class="footer__contact contact-footer">
					<div class="contact-footer__contact">Contact</div>
					<div class="contact-footer__mail">
						+1+86 852 346 000 info@foodzero.com
					</div>
					<div class="contact-footer__adrres">
						1959 Sepulveda Blvd. Culver City, CA, 90230
					</div>
				</div>
				<div class="footer__never never-footer">
					<div class="never-footer__never">Never Miss a Recipe</div>
					<input
						class="never-footer__mail"
						placeholder="Email Address"
						type="email"
					/>
					<div class="never-footer__text">
						Join our subscribers and get best recipe delivered each week!
					</div>
				</div>
				<div class="footer__button">Subscribe</div>
			</div>
			<div class="footer__doun">
				<div class="footer__text">© 2020 Zero Inc. All rights Reserved</div>
				<NavIcon />
			</div>
		</div>
	</footer>
</template>
<style lang="scss" scoped>
.footer {
	padding: 132px 0px 74px 0px;
	background-color: #233000;

	// .footer__container

	&__container {
	}

	// .footer__row

	&__row {
		margin: 0px 0px 195px 0px;
		display: flex;
		justify-content: space-between;
	}

	// .footer__food

	&__food {
		align-self: center;
	}

	// .footer__contact

	&__contact {
		/* Heading 5 */
	}

	// .footer__never

	&__never {
	}

	// .footer__button

	&__button {
		align-self: center;
		width: 241px;
		height: 88px;
		background: #5e6600;
		padding: 20px 46px;
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
		text-align: center;
	}

	// .footer__doun

	&__doun {
		display: flex;
		justify-content: space-between;
	}

	// .footer__text

	&__text {
	}

	// .footer__icon
}
.contact-footer {
	// .contact-footer__contact

	&__contact {
		margin: 0px 0px 55px 0px;
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}

	// .contact-footer__mail

	&__mail {
		margin: 0px 0px 28px 0px;
		font-family: Lato;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 25px; /* 138.889% */
		letter-spacing: 0.36px;
	}

	// .contact-footer__adrres

	&__adrres {
		font-family: Lato;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 25px; /* 138.889% */
		letter-spacing: 0.36px;
	}
}
.never-footer {
	// .never-footer__never

	&__never {
		margin: 0px 0px 55px 0px;
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}

	// .never-footer__mail

	&__mail {
		background-color: #233000;
		margin: 0px 0px 15px 0px;
		padding: 30px 40px;
		border: 2px solid #fff;
		width: 523px;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #fff;
	}
	&__mail::placeholder {
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #fff;
	}

	// .never-footer__text

	&__text {
		font-family: Lato;
		font-size: 14px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.28px;
	}
}
</style>
