<template>
  <q-carousel
    animated
    v-model="slide"
    infinite
    :autoplay="autoplay"
    class="carousel"
  >
    <q-carousel-slide :name="1" img-src="../../assets/gameBanner.svg" />
    <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
    <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
  </q-carousel>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'GameCarousel',
  setup () {
    return {
      autoplay: ref(true),
      slide: ref(1)
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel{
  width: 100%;
  height: 230px;
}
</style>
