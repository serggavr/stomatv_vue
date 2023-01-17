<template>
  <aside class="aside">
    <ul class="links">
      <banner-item
        v-for="banner in banners"
        :key="banner.id"
        :banner="banner"
      ></banner-item>
    </ul>
  </aside>
</template>

<script>
import BannerItem from '@/components/BannerItem.vue';

import banners from '@/constants/banners';

export default {
  data() {
    return {
      banners,
    };
  },
  components: {
    BannerItem,
  },
};
</script>

<style lang="scss" scoped></style>
