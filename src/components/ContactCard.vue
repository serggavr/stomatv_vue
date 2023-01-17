<template>
  <li class="card">
    <h3 class="card__title">{{ card.title }}</h3>
    <div class="card__text-block">
      <a
        class="card__text-block-text"
        target="_blank"
        rel="noopener noreferrer"
        :href="card.yandexMap"
        >🏠 Адрес: {{ card.address }}</a
      >
    </div>
    <div class="card__text-block">
      <p class="card__text-block-title">📞 Телефон регистратуры:</p>
      <a class="card__text-block-text" :href="'tel:' + card.phone">{{ card.phone }}</a>
      <a class="card__text-block-text" :href="'tel:' + card.mobilePhone">{{
        card.mobilePhone
      }}</a>
    </div>
    <button class="button button__placed_card">Подробнее →</button>
  </li>
</template>

<script>
export default {
  props: ['card'],
};
</script>

<style scoped></style>
