<template>
  <div class="carousel">
    <slot></slot>
    <button @click="nextSlide" class="carousel__button carousel__button_next">
      Next
    </button>
    <button @click="prevSlide" class="carousel__button carousel__button_prev">
      Prev
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    nextSlide() {
      this.$emit('nextSlide');
    },
    prevSlide() {
      this.$emit('prevSlide');
    },
  },
};
</script>

<style>
.carousel {
  position: relative;
  width: 100%;
  height: 350px;
  overflow: hidden;
  z-index: 0;
}
.carousel__button {
  position: absolute;
  height: 40px;
  width: 50px;
  top: calc(50% - 20px);
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  border: none;
}
.carousel__button:focus,
.carousel__button:hover {
  outline: none;
  cursor: pointer;
}
.carousel__button_next {
  right: 0;
}
.carousel__button_prev {
  left: 0;
}
</style>
