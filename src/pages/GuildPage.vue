<template>
  <q-page>
    <div class="row no-wrap">
      <div class="q-mt-sm col">
        <div>
          <GuildCarousel />
        </div>
        <div class="q-mt-md column">
          <div class="row no-wrap q-gutter-sm">
            <q-btn label="500+ Active scholar" color="info" class="stats" />
            <q-btn label="$300 Scholar av." color="accent" class="stats" />
            <q-btn label="70/30 Profit sharing" color="secondary" class="stats" />
          </div>
        </div>
        <div class="q-mt-lg col">
          <GuildGames :games="guild.games" />
        </div>
        <div class="row">
          <div class="col-6">
            <UniqueFeatures :unique_features="guild.unique_features" />
          </div>
          <div class="row column justify-between q-ml-xl">
            <div>
            <div class="text-h6 q-mb-md">Blockchain</div>
            <div class="row">
              <img src="../assets/blockchainImage.png" alt="img" class="q-mr-md">
              <img src="../assets/blockchainImage2.png" alt="img" class="q-mr-md">
              <img src="../assets/blockchainImage3.png" alt="img">
            </div>
            </div>

            <div class="row justify-between">
              <div class="text-h6">Listing</div>
              <div class="row">
                <img src="../assets/image9.svg" class="q-mt-sm" alt="img">
                <img src="../assets/image10.svg" alt="img">
              </div>
            </div>
            <div class="row items-center justify-between">
              <div class="text-subititle2">TOKEN TICKER</div>
              <q-chip label="$ NGG" color="info" text-color="white" size="15px" />
            </div>
          </div>
        </div>
      </div>
      <div class="col-auto">
        <div>
          <GuildInfo />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import GuildCarousel from 'src/components/Guild/GuildCarousel.vue'
import GuildGames from 'src/components/Guild/GuildGames.vue'
import UniqueFeatures from 'src/components/Guild/UniqueFeatures.vue'
import GuildInfo from 'src/components/Guild/GuildInfo.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'GuildPage',
  components: {
    GuildCarousel,
    GuildGames,
    UniqueFeatures,
    GuildInfo
  },
  computed: {
    ...mapGetters({
      guild: 'guild'
    })
  },
  mounted () {
    this.$store.dispatch('getGuildInfo')
  }
}
</script>

<style lang="scss" scoped>
.stats{
  width: 32%;
  border-radius: 12px;
  font-size: 17px;
}
.background{
  background: rgb(228, 228, 228);
}
</style>
