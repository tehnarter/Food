<template>
	<div class="contact">
		<div class="contact__header">
			<div class="contact__container">
				<div class="contact__row block-1-cont">
					<h1 class="block-1-cont__title">Get in Touch</h1>
					<div class="block-1-cont__text">
						The freshest ingredients for you every day
					</div>
					<div class="block-1-cont__time time-body">
						<div class="time__open">
							<div class="time__time">Open Time</div>
							<div class="time__week">Sunday - Friday</div>
						</div>
						<div class="time__border"></div>
						<div class="time__eat">
							<div class="time__brunch">
								Brunch<br />
								11:00–12:00
							</div>
							<div class="time__lunch">
								Lunch<br />
								13:00–17:00
							</div>
							<div class="time__dinner">
								Dinner<br />
								18:00–20:00
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="contact__block-1 block-1">
			<div class="block-1__container">
				<div class="block-1__row">
					<div class="block-1__cards card">
						<img src="/img/Contact-bl1-1.jpg" alt="" class="card__img" />
						<div class="card__text text-card">
							We can be contacted via <span>email info@foodzero.com </span>

							or telephone on <span>+86 852 346 000</span>
						</div>
					</div>
					<div class="block-1__cards card card_reverse">
						<img src="/img/Contact-bl1-2.jpg" alt="" class="card__img" />
						<div class="card__text">
							<div class="card__city">
								We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
							</div>
							<a href="#" class="card__button">View in maps</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="contact__form form-contact">
		<div class="form-contact__container">
			<h2 class="form-contact__title">Make a Reservation</h2>
			<div class="form-contact__text">Get in touch with restaurant</div>
			<form action="#" class="form-contact__form" method="get">
				<div class="form-contact__row">
					<input
						class="form-contact__first-name"
						type="text"
						name="first-name"
						placeholder="First Name"
						required
					/>
					<input
						class="form-contact__last-name"
						type="text"
						name="last-name"
						placeholder="Last Name"
						required
					/>
					<input
						class="form-contact__email"
						type="email"
						name="email"
						placeholder="Email"
						required
					/>
					/>
					<input
						class="form-contact__phone"
						type="tel"
						name="tel"
						placeholder="Phone"
						pattern="[0-9]*"
						required
					/>
					<input
						class="form-contact__date"
						type="date"
						name="date"
						value="2023-08-26"
					/>
					/>
					<select class="form-contact__time" name="time">
						<option value="1">6:00 pm</option>
						<option value="2">7:00 pm</option>
						<option value="3">8:00 pm</option>
						<option value="4">9:00 pm</option>
						<option value="5">10:00 pm</option>
					</select>
					<select class="form-contact__person" name="person">
						<option value="1">1 Person</option>
						<option value="2">2 Person</option>
						<option value="3">3 Person</option>
						<option value="4">4 Person</option>
						<option value="5">5 Person</option>
					</select>
				</div>
				<input class="form-contact__button" type="submit" value="Book Now" />
				<!-- <button class="form-contact__button" type="submit">Book Now</button> -->
			</form>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.contact {
	// .contact__header

	&__header {
		padding: 415px 0px 130px 0px;
		background-image: url(/img/bg_contact.jpg);
		background-repeat: no-repeat;
		background-size: cover;
	}

	// .contact__container

	&__container {
	}

	// .contact__row

	&__row {
		display: flex;
		flex-direction: column;
	}
}
.block-1-cont {
	// .block-1-cont__title

	&__title {
		/* Hero Heading */
		font-family: Rufina;
		font-size: 148px;
		font-style: normal;
		font-weight: 700;
		line-height: 152px; /* 102.703% */
	}

	// .block-1-cont__text

	&__text {
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}

	// .block-1-cont__time

	&__time {
		/* Heading 5 */
	}
}
.time-body {
	display: flex;
	flex-direction: column;
	row-gap: 38px;
	align-self: self-end;
	width: 40%;
}
.time {
	// .time__open
	&__time {
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px;
	}
	&__open {
		display: flex;
		/* Heading 5 */
		justify-content: space-between;
		align-items: center;
		/* 150% */
	}

	// .time__week

	&__week {
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .time__bottom

	&__border {
		border: 1px dashed;
	}

	// .time__eat

	&__eat {
		display: flex;
		justify-content: space-between;
	}

	// .time__brunch

	&__brunch {
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .time__lunch

	&__lunch {
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .time__dinner

	&__dinner {
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}
}
.teme {
	// .teme__time

	&__time {
	}
}
.contact {
	// .contact__block-1

	&__block-1 {
	}
}
.block-1 {
	padding: 272px 0px 185px 0px;
	background-image: url(/img/Orange.png);
	background-repeat: no-repeat;
	background-position: top 152px left 54%;

	// .block-1__container

	&__container {
	}

	// .block-1__row

	&__row {
		display: flex;
		flex-direction: column;
		row-gap: 145px;
	}

	// .block-1__cards

	&__cards {
		display: flex;
		column-gap: 60px;
	}
}
.card {
	// .card__img
	&_reverse {
		flex-direction: row-reverse;
	}
	&__img {
		flex: 0 1 50%;
	}

	// .card__text

	&__text {
		flex: 0 1 50%;
		align-self: center;
		color: var(--233000, #233000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 5 */
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
		span {
			color: var(--9-caa-00, #9caa00);
			font-feature-settings: 'clig' off, 'liga' off;

			/* Heading 5 */
			font-family: Rufina;
			font-size: 32px;
			font-style: normal;
			font-weight: 700;
			line-height: 48px;
		}
	}

	// .card__city

	&__city {
		color: var(--233000, #233000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 5 */
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}

	// .card__button

	&__button {
		display: inline-flex;
		padding: 20px 46px;
		justify-content: center;
		align-items: center;
		gap: 10px;
		border: 2px solid var(--000000, #000);
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;

		/* Heading 5 */
		font-family: Rufina;
		font-size: 32px;
		font-style: normal;
		font-weight: 700;
		line-height: 48px; /* 150% */
	}
}
.text-card {
	margin: 0 auto;
	max-width: 507px;
}

.contact {
	// .contact__form
}
.form-contact {
	padding: 214px 0px 174px 0px;
	background-image: url(/img/Mint.png);
	background-repeat: no-repeat;
	background-position: top 4% left 19%;

	// .form-contact__container

	&__container {
	}

	// .form-contact__title

	&__title {
		margin: 0px 0px 18px 0px;
		color: var(--000000, #000);
		font-feature-settings: 'clig' off, 'liga' off;
		text-align: center;
		/* Heading 1 */
		font-family: Rufina;
		font-size: 108px;
		font-style: normal;
		font-weight: 700;
		line-height: 120px; /* 111.111% */
	}

	// .form-contact__text

	&__text {
		margin: 0px 0px 116px 0px;
		color: var(--4-d-4-d-4-d, #4d4d4d);
		font-feature-settings: 'clig' off, 'liga' off;
		text-align: center;
		/* Body */
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
	}

	// .form-contact__row
	&__form {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		row-gap: 82px;
	}
	&__row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		row-gap: 46px;
	}

	// .form-contact__first-name

	&__first-name {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 48%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
		&::placeholder {
			color: #000;
		}
	}

	// .form-contact__last-name

	&__last-name {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 48%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
		&::placeholder {
			color: #000;
		}
	}

	// .form-contact__email

	&__email {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 100%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
		&::placeholder {
			color: #000;
		}
	}

	&__phone {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 100%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
		&::placeholder {
			color: #000;
		}
	}
	// .form-contact__date

	&__date {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 48%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}

	// .form-contact__time

	&__time {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 48%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}

	// .form-contact__person

	&__person {
		padding: 30px 40px;
		border: 2px solid #000;
		flex: 0 1 100%;
		font-family: Lato;
		font-size: 24px;
		font-style: normal;
		font-weight: 400;
		line-height: 140%; /* 33.6px */
		letter-spacing: 0.48px;
		color: #000;
	}

	// .form-contact__button

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
