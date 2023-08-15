<script setup>
import BurgerOpenVue from './BurgerOpen.vue'
</script>

<template>
  <div class="header">
    <div class="header__container">
      <div class="header__nav">
        <div class="header__logo">
          <img src="/img/Logo.svg" alt="" />
        </div>
        <BurgerOpenVue />

        <div class="header__tel tel">+86 852 346 000</div>
        <div class="header__reserv">Reservations</div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  height: 208px;
  width: 100%;
  position: fixed;
  // .header__container

  // .header__nav

  &__nav {
    display: flex;
    align-items: center;
    height: 208px;
    justify-content: space-between;
  }
  // .header__logo

  // .menu__body

  &__body {
  }

  // .menu__list

  &__list {
    display: flex;
  }

  // .menu__item

  &__item {
    padding: 0px 5px 0px 5px;
  }

  // .menu__link

  &__link {
    color: #fff;

    /* Nav Item */
    font-family: Rufina;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
  }

  &__tel {
    font-family: Inter;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  // .header__reserv

  &__reserv {
    padding: 20px 46px;
    color: #fff;
    border: 2px solid #fff;
    font-family: Rufina;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px; /* 150% */
  }
}
</style>
