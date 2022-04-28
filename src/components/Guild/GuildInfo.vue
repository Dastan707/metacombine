<template>
  <div>
  <q-card bordered class="guild-card q-pa-md no-shadow">
    <div class="row items-center justify-between q-mb-sm">
      <div class="row items-center">
        <q-icon name="lens" size="7px" color="secondary" class="q-mr-xs" />
        <div class="text-subtitle">Online</div>
      </div>
      <div>
        <q-fab color="primary" push icon="share" padding="xs" direction="left">
          <q-fab-action padding="xs" color="negative" @click="onClick" icon="fa-brands fa-instagram" />
          <q-fab-action padding="xs" color="primary" @click="onClick" icon="fa-brands fa-twitter" />
        </q-fab>
      </div>
    </div>
    <div class="row column no-wrap items-center">
    <img src="../../assets/guildImg.svg" alt="img">
    <q-tabs
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
    </div>
    <q-card-section class="q-pa-none q-mt-md">
      <div class="text-h5">{{guild.name}}</div>
    </q-card-section>
    <q-card-section class="q-pa-none q-my-sm">
      {{guild.description}}
    </q-card-section>
  </q-card>
  <q-card bordered class="guild-card q-mt-md no-shadow">
    <q-card-section>
      <div class="text-subtitle">Searching for</div>
      <q-btn
        color="primary"
        outline
        rounded
        v-for="item in guild.searching_for"
        :key="item.id"
        :label="item"
        size="sm"
        class="q-mt-sm q-mr-sm"
      />
    </q-card-section>
  </q-card>
  <q-card bordered class="guild-card q-mt-md no-shadow" style="height: 200px">
    <q-card-section>
    <div class="text-subtitle">Special activities</div>
    <div class="row wrap justify-center items-cneter q-mt-sm">
      <q-btn
        v-for="item in guild.special_activities"
        :key="item.id"
        :label="item"
        color="primary"
        class="q-mb-sm q-mr-sm"
        style="width: 100px"
      />
    </div>
    </q-card-section>
  </q-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'GuildInfo',
  computed: {
    ...mapGetters({
      guild: 'guild'
    })
  }
}
</script>

<style lang="scss" scoped>
.guild-card{
  width: 250px;
}
</style>
