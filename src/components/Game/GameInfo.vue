<template>
  <div class="row no-wrap column">
  <q-card bordered class="game-card no-shadow">
    <q-card-section>
      <div class="text-subtitle">Searching for</div>
      <q-btn
        color="primary"
        outline
        rounded
        v-for="item in searching_for"
        :key="item.id"
        :label="item"
        size="sm"
        class="q-mt-sm q-mr-sm"
      />
    </q-card-section>
  </q-card>
  <div class="row column justify-between">
    <div class="q-mt-md">
    <div class="text-h6 q-mb-md">Blockchain</div>
    <div class="row">
      <img src="../../assets/blockchainImage.png" alt="img" class="q-mr-md">
      <img src="../../assets/blockchainImage2.png" alt="img" class="q-mr-md">
      <img src="../../assets/blockchainImage3.png" alt="img">
    </div>
    </div>

    <div class="row justify-between q-mt-md" style="width: 100%">
      <div class="text-h6">Listing</div>
      <div class="row">
        <img src="../../assets/image9.svg" class="q-mt-sm" alt="img">
        <img src="../../assets/image10.svg" alt="img">
      </div>
    </div>
    <div class="row items-center justify-between q-mt-md" style="width: 100%">
      <div class="text-subititle2">TOKEN TICKER</div>
      <div>
        <q-chip label="$ SLP" color="accent" text-color="white" size="15px" />
        <q-chip label="$ AXS" color="info" text-color="white" size="15px" />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'GameInfo',
  props: ['searching_for']
}
</script>

<style lang='scss' scoped>
.game-card{
  width: 300px;
}

</style>
