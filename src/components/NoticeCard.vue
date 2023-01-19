<template>
  <div class="article-card">
    <h3 class="article-card__title">{{ article.title }}</h3>
    <VueShowdown
      flavor="github"
      :markdown="article"
      :options="{
        emoji: true,
        simplifiedAutoLink: true,
        tables: true,
      }"
    ></VueShowdown>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('hello, vue template in markdown!');
    return { message };
  },
  props: ['article'],
});
</script>

<style lang="scss" scoped></style>
