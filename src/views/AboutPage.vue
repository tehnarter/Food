<template>
  <div class="about">
    <div class="about__header">
      <div class="about__container header-about">
        <div class="about__row">
          <h1 class="header-about__title">Who We Are</h1>
          <div class="header-about__text">
            The most important thing for us is to give you the comfortable dining experience
          </div>
        </div>
      </div>
    </div>
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
</style>
