<template>
  <transition :name="'transition__' + direction" mode="in-out">
    <div class="carousel-slide" v-show="visibleSlide === index">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: ['visibleSlide', 'index', 'direction'],
  // created: {
  //   console.log(this)
  // }
};
</script>

<style>
.carousel-slide {
  position: absolute;
  object-fit: fill;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.carousel-slide img {
  width: 100%;
}

.transition {
}
.transition__left {
}
.transition__left-enter-active {
  animation: leftInAnimation 1s ease-in-out;
}
.transition__left-leave-active {
  animation: leftOutAnimation 1s ease-in-out;
}
.transition__right {
}
.transition__right-enter-active {
  animation: rightInAnimation 1s ease-in-out;
}
.transition__right-leave-active {
  animation: rightOutAnimation 1s ease-in-out;
}
@keyframes leftInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes leftOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
@keyframes rightInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes rightOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
