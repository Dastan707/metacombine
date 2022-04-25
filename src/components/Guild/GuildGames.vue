<template>
  <div class="games row column">
    <div class="row">
      <div class="text-h6 q-mr-xs">Games played</div>
      <q-btn @click="leftArrow" round color="primary" icon="arrow_back" size="10px" class="q-mr-xs" />
      <q-btn @click="rightArrow" round color="primary" icon="arrow_forward" size="10px" />
    </div>
    <div class="games-list" :style="{ 'margin-left': '-' + (150 * currentSlideGames) + 'px'}">
     <div v-for="game in games" :key="game.id">
        <img src="../../assets/gamesImg.svg" alt="game">
      </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'GuildGames',
  props: ['games'],
  data () {
    return {
      currentSlideGames: 0
    }
  },
  methods: {
    leftArrow () {
      if (this.currentSlideGames > 0) {
        this.currentSlideGames--
      }
    },
    rightArrow () {
      if (this.currentSlideGames > this.games.length) {
        console.log(this.currentSlideGames)
      } else {
        this.currentSlideGames++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.games{
  overflow: hidden;
}
.games-list{
  display: flex;
  transition: all ease .5s;
}
</style>
