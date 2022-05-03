<template>
<q-card bordered class="my-card q-pa-md no-shadow">
  <div class="row items-center justify-between q-mb-sm">
    <div class="row items-center">
      <q-icon name="lens" size="7px" color="secondary" class="q-mr-xs" />
      <div class="text-subtitle">Online</div>
    </div>
  <div>
    <q-fab color="primary" push icon="share" padding="xs" direction="left">
      <q-fab-action padding="xs" color="negative" icon="fa-brands fa-instagram" />
      <q-fab-action padding="xs" color="primary" icon="fa-brands fa-twitter" />
    </q-fab>
  </div>
  </div>
    <q-avatar square rounded size="220px">
      <img :src="player.avatar">
    </q-avatar>

    <q-tabs
      v-model="tab"
      dense
      no-caps
      class="bg-primary text-white"
      style="width: 220px"
    >
      <q-route-tab
        icon="message"
        to="/chat"
        exact
      />
      <q-tab name="favorite" icon="favorite" />
    </q-tabs>

    <q-card-section class="q-pa-none q-my-sm">
      <div class="text-h6">{{player.nickname}}</div>
      <div class="text-subtitle2">{{player.discord_nickname}}</div>
    </q-card-section>

    <q-card-section class="q-pa-none q-my-sm">
      {{player.description}}
    </q-card-section>

    <q-card-section class="q-gutter-x-xs q-pa-none">
    <q-btn
      v-for="device in player.devices"
      :key="device.id"
      outline
      rounded
      size="sm"
      color="primary"
      :label="device"
    />
    </q-card-section>

    <hr class="q-my-md">

    <q-card-section class="row column items-start q-pa-none">
      <div class="q-mb-sm">Searching for</div>
      <div class="q-gutter-x-xs">
      <q-btn
        v-for="stat in player.state"
        :key="stat.id"
        outline
        rounded
        size="sm"
        color="primary"
        :label="stat"
      />
      </div>
    </q-card-section>

    <div class="q-mt-lg">
      <img src="../../assets/novaImg.svg" alt="nova">
    </div>
</q-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PlayerInfo',
  data () {
    return {
      tab: ''
    }
  },
  computed: {
    ...mapGetters({
      player: 'player'
    })
  }
}
</script>

<style lang="scss" scoped>
.my-card{
  width: 100%;
  max-width: 250px;
}
hr{
    width: 100%;
}
</style>
