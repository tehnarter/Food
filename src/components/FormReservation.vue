<script setup></script>
<template>
	<div class="form">
		<div class="form__container">
			<h2 class="form__title">Make a Reservation</h2>
			<div class="form__text">Get in touch with restaurant</div>
			<form class="form__form" @submit.prevent="submitForm">
				<div class="form__row">
					<input class="form__date" v-model="date" type="date" id="date" />
					<input class="form__time" v-model="email" type="email" id="email" />
					<input class="form__person" v-model="email" type="email" id="email" />
				</div>
				<button class="form__button" type="submit">Book Now</button>
			</form>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.form {
	padding: 237px 0px 254px 0px;

	// .form__container

	&__container {
	}

	// .form__title

	&__title {
		margin: 0px 0px 18px 0px;
		color: #000;
		text-align: center;
		/* Heading 1 */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px; /* 111.111% */
	}

	// .form__text

	&__text {
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

	// .form__form

	&__form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
	}
	&__row {
		display: flex;
		padding: 133px 0px 133px 0px;
		column-gap: 48px;
	}
	// .form__time

	&__time {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 33.333%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}

	// .form__date

	&__date {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 33.333%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}

	// .form__person

	&__person {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 33.333%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}

	// .form__button

	&__button {
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid #000;
		background: #233000;
		width: 344px;
		padding: 20px 46px;
		color: #fff;
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
		align-self: center;
	}
}
</style>
