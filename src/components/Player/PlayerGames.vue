<template>
<div class="games">

<div class="q-mt-lg">
  <div class="row justify-between items-center q-mb-md" style="width: 100%">
    <div class="row">
      <div class="text-h6 q-mr-xs">Игровой опыт</div>
      <q-btn round color="primary" icon="arrow_back" size="10px" class="q-mr-xs prev-games_card" />
      <q-btn round color="primary" icon="arrow_forward" size="10px" class="next-games_card" />
    </div>
    <div>
      <q-btn color="secondary" label="Показать все" @click="showGamesModal = !showGamesModal"/>
    </div>
  </div>

<div>
  <swiper
      :modules="modules"
      :slides-per-view="4"
      :space-between="50"
      :navigation="{prevEl: '.prev-games_card', nextEl: '.next-games_card'}"
    >
      <swiper-slide v-for="game in games" :key="game.id">
        <q-card bordered class="no-shadow bg-grey-3">
            <img src="../../assets/card-img.svg" alt="game">
            <q-card-section>
              <div class="text-h5 column">
                  <q-btn :label="game.name" padding="xs" size="md" color="primary" />
              </div>
            </q-card-section>
            <q-card-section>
              <div v-for="item in game.stats" :key="item.id" class="row no-wrap justify-between">
                  <div class="text-subtitle2 q-mb-xs">{{item.title}}</div>
                  <q-btn :label="item.num" size="10px" color="primary" outline class="q-mb-sm"/>
              </div>
            </q-card-section>
        </q-card>
      </swiper-slide>
    </swiper>
</div>
</div>

<q-dialog full-height full-width v-model="showGamesModal">
  <q-card>
  <q-card-section class="row justify-center">
    <q-space />
    <div class="text-h5">Список всех игр</div>
    <q-space />
    <q-btn icon="close" flat round dense v-close-popup />
  </q-card-section>
  <q-card-section class="q-pt-none">
  <div class="row justify-between">
  <q-card class="no-shadow q-mb-md bg-grey-3" v-for="game in games" :key="game.id">
    <img src="../../assets/card-img.svg" alt="game">
    <q-card-section>
      <div class="text-h5 column">
          <q-btn :label="game.name" padding="xs" size="md" color="primary" />
      </div>
    </q-card-section>
    <q-card-section>
      <div v-for="item in game.stats" :key="item.id" class="row no-wrap justify-between">
          <div class="text-subtitle2 q-mb-xs">{{item.title}}</div>
          <q-btn :label="item.num" size="11px" color="primary" outline class="q-mb-sm"/>
      </div>
    </q-card-section>
  </q-card>
  </div>
  </q-card-section>
  </q-card>
</q-dialog>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import { ref } from 'vue'
import 'swiper/scss'
export default {
  name: 'GamesCard',
  props: ['games'],
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const showGamesModal = ref(false)
    return {
      showGamesModal,
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
