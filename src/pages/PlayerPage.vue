<template>
  <q-page>
    <div class="row">
      <div class="col-auto">
        <PlayerInfo />
      </div>
      <div class="col q-ml-sm">
        <div style="height: 40%"></div>
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
