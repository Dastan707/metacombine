<template>
  <div>
    <q-card bordered class="game-card q-pa-sm no-shadow">
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
    <img src="../../assets/game.svg" alt="img">
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
      <div class="text-h5">{{game.name}}</div>
    </q-card-section>
    <q-card-section class="q-pa-none q-mt-sm">
      {{game.description}}
    </q-card-section>
    <q-card-section class="q-gutter-x-xs q-pa-none q-mt-md">
      <q-btn
        v-for="item in game.category"
        :key="item.id"
        :label="item"
        color="accent"
        rounded
        outline
        size="sm"
      />
    </q-card-section>
    <q-card-section class="q-gutter-x-xs q-pa-none q-mt-md">
      <q-btn
        v-for="item in game.status"
        :key="item.id"
        :label="item"
        color="primary"
        rounded
        outline
        size="sm"
      />
    </q-card-section>
  </q-card>
  </div>
</template>

<script>
export default {
  name: 'GameInfo',
  props: ['game']

}
</script>

<style lang="scss" scoped>
.game-card{
  max-width: 100%;
  width: 250px;
}
</style>
