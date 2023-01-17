<template>
  <div class="page">
    <the-header></the-header>
    <div class="content">
      <div class="content__wrapper">
        <main class="main">
          <router-view></router-view>
        </main>
        <links-aside></links-aside>
      </div>
    </div>
    <the-footer></the-footer>
  </div>

  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import LinksAside from '@/components/LinksAside.vue';
// import ContactCard from '@/components/ContactCard.vue';

// import cards from './constants/cards';

// console.log(cards);

export default {
  data() {
    return {
      // cards,
    };
  },
  components: {
    TheHeader,
    TheFooter,
    LinksAside,
    // ContactCard,
  },
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->
