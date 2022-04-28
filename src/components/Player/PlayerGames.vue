<template>
<div class="games">

<div class="games-wrapper row column q-mt-lg">
  <div class="row justify-between items-center q-mb-md" style="width: 100%">
    <div class="row">
      <div class="text-h6 q-mr-xs">Игровой опыт</div>
      <q-btn @click="leftArrow" round color="primary" icon="arrow_back" size="10px" class="q-mr-xs" />
      <q-btn @click="rightArrow" round color="primary" icon="arrow_forward" size="10px" />
    </div>
    <div>
      <q-btn color="secondary" label="Показать все" @click="openModal"/>
    </div>
  </div>

<div class="games-list" :style="{ 'margin-left': '-' + (150 * currentSlideIndex) + 'px'}">
<q-card class="games-card no-shadow" v-for="game in games" :key="game.id">
    <img src="../../assets/card-img.svg" alt="game">
    <q-card-section>
      <div class="text-h5">
          <q-btn :label="game.name" style="width: 100%" color="primary" />
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
</div>

<q-dialog full-height full-width v-model="showModal">
  <q-card>
  <q-card-section class="row justify-center">
    <q-space />
    <div class="text-h5">Список всех игр</div>
    <q-space />
    <q-btn icon="close" flat round dense v-close-popup />
  </q-card-section>
  <q-card-section class="q-pt-none">
  <div class="row justify-between">
  <q-card class="games-card no-shadow q-mb-md" v-for="game in games" :key="game.id">
    <img src="../../assets/card-img.svg" alt="game">
    <q-card-section>
      <div class="text-h5">
          <q-btn :label="game.name" style="width: 100%" color="primary" />
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
export default {
  name: 'GamesCard',
  props: ['games'],
  data () {
    return {
      currentSlideIndex: 0,
      showModal: false
    }
  },
  methods: {
    leftArrow () {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },
    rightArrow () {
      if (this.currentSlideIndex > this.games.length) {
        console.log(this.currentSlideIndex)
      } else {
        this.currentSlideIndex++
      }
    },
    openModal () {
      this.showModal = true
    }
  }
}
</script>

<style lang="scss" scoped>
.games{
    &-wrapper{
      overflow: hidden;
    }
    &-list{
      display: flex;
      transition: all ease .5s;
    }
    &-card{
      width: 230px;
      height: 450px;
      margin-right: 45px;
      background: rgb(228, 228, 228);
    }
}
</style>
