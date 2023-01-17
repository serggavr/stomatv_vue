<template>
  <a class="links__item-link" :href="banner.link">
    <img class="links__item-image" :src="banner.image" :alt="banner.name" />
  </a>
</template>

<script>
export default {
  props: ['banner'],
};
</script>

<style scoped></style>
