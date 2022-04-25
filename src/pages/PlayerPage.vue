<template>
  <q-page>
    <div class="row justify-between">
      <div>
        <PlayerInfo />
      </div>
      <div class="q-px-md" style="width: 1100px">
        <div style="height: 275px"></div>
        <div>
        <PlayerGames :games="player.games" />
        </div>
        <div>
          <NftList />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import PlayerInfo from 'src/components/Player/PlayerInfo.vue'
import PlayerGames from 'src/components/Player/PlayerGames.vue'
import NftList from 'src/components/Player/NftList.vue'
import { mapGetters } from 'vuex'
export default {
  components: { PlayerInfo, PlayerGames, NftList },
  name: 'PlayerPage',
  computed: {
    ...mapGetters({
      player: 'player'
    })
  },
  mounted () {
    this.$store.dispatch('getPlayerInfo')
  }
}
</script>

<style lang="scss" scoped>
</style>
