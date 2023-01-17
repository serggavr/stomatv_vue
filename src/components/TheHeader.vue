<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__container">
        <div class="header__title-container">
          <h1 class="header__title">Воркутинская стоматологическая поликлиника</h1>
          <p class="header__subtitle">
            Государственное автономное учреждение здравоохранения Республики Коми
          </p>
        </div>
        <!-- <img class="header__logo" src="../assets/dentist.svg" alt="Зубик" /> -->
        <button class="button button__placed_header">Записаться на прием</button>
      </div>
      <nav-menu></nav-menu>
    </div>
  </header>
</template>

<script>
import NavMenu from '@/components/NavMenu.vue';

export default {
  components: {
    NavMenu,
  },
};
</script>

<style scoped></style>
