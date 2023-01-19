<template>
  <div class="article-card" v-if="articleIndex < 5">
    <h3 class="article-card__title">{{ article.title }}</h3>
    <VueShowdown
      class="article-card__markdown-text"
      flavor="github"
      :markdown="article.text"
      :options="{
        emoji: true,
        simplifiedAutoLink: true,
        tables: true,
      }"
    ></VueShowdown>
    <time datetime="article.date">{{ article.date }}</time>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const message = ref('hello, vue template in markdown!');
    return { message };
  },
  props: ['article', 'articleIndex'],
});
</script>

<style>
.article-card {
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  list-style: none;
  /* background-color: linear-gradient(var(--color-secondary-regular), #fff); */
  background-image: linear-gradient(
    to right,
    var(--color-primary-light) 0%,
    transparent 110%
  );
}

.article-card__title {
  align-self: center;
}

.article-card__markdown-text p {
  text-indent: 20px;
}
</style>
