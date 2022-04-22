<template>
  <q-page>
    <div class="row justify-between">
      <div>
        <PlayerInfo />
      </div>
      <div style="width: 1100px">
        <div style="height: 350px"></div>
        <div class="q-px-md">
        <GamesList />
        </div>
        <div>
          <NftList />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PlayerInfo from 'src/components/PlayerInfo.vue'
import GamesList from 'src/components/GamesList.vue'
import { mapGetters } from 'vuex'
import NftList from 'src/components/NftList.vue'
export default {
  components: { PlayerInfo, GamesList, NftList },
  name: 'PlayerPage',
  computed: {
    ...mapGetters({
      games: 'games'
    })
  },
  mounted () {
    this.$store.dispatch('getPlayerInfo')
    this.$store.dispatch('getGamesInfo')
  }
}
</script>

<style lang="scss" scoped>
</style>
