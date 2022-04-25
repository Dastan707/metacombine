<template>
<div class="row no-wrap column">
  <div class="q-mt-sm">
    <GameCarousel />
  </div>
  <div class="row items-start justify-around q-mt-md">
    <div>
      <GameCard :game="game" />
    </div>
    <div class="q-ml-lg">
      <div class="text-h5 q-mb-sm">Techical Requirements</div>
      <div>
        <GameRequirements
          :pc_requirements="game.pc_requirements"
          :smartphone_requirements="game.smartphone_requirements"
        />
      </div>
    </div>
    <div class="q-ml-lg">
      <GameInfo :searching_for="game.searching_for" />
    </div>
  </div>
</div>

</template>

<script>
import GameCard from 'src/components/Game/GameCard.vue'
import GameRequirements from 'src/components/Game/GameRequirements.vue'
import GameCarousel from 'src/components/Game/GameCarousel.vue'
import GameInfo from 'src/components/Game/GameInfo.vue'
import { mapGetters } from 'vuex'
export default {
  components: { GameCard, GameRequirements, GameCarousel, GameInfo },
  name: 'GamePage',
  computed: {
    ...mapGetters({
      game: 'game'
    })
  },
  mounted () {
    this.$store.dispatch('getGameInfo')
  }
}
</script>

<style>

</style>
