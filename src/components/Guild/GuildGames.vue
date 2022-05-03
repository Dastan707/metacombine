<template>
  <div class="games">
    <div class="row">
      <div class="text-h6 q-mr-xs">Games played</div>
      <q-btn round color="primary" icon="arrow_back" size="10px" class="q-mr-xs prev-game" />
      <q-btn round color="primary" icon="arrow_forward" size="10px" class="next-game" />
    </div>
    <div class="q-mt-md">
      <swiper
        :modules="modules"
        :slides-per-view="5"
        :space-between="120"
        :navigation="{prevEl: '.prev-game', nextEl: '.next-game'}"
      >
        <swiper-slide v-for="game in games" :key="game.id">
          <div>
            <img src="../../assets/gamesImg.svg" alt="game">
          </div>
        </swiper-slide>
      </swiper>
    </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/scss'

export default {
  name: 'GuildGames',
  props: ['games'],
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
