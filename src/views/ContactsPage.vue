<template>
  <div class="contact">
    <div class="contact__header">
      <div class="contact__container">
        <div class="contact__row block-1-cont">
          <h1 class="block-1-cont__title">Get in Touch</h1>
          <div class="block-1-cont__text">The freshest ingredients for you every day</div>
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
  </div>
</template>
<style lang="scss" scoped>
.contact {
  padding: 415px 0px 130px 0px;
  background-image: url(/img/bg_contact.jpg);
  background-repeat: no-repeat;
  background-size: cover;

  // .contact__header

  &__header {
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
</style>
