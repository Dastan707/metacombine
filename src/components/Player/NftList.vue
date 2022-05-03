<template>
<div class="nft">
  <div class="q-mt-lg">
  <div class="row justify-between items-center q-mb-md">
    <div class="row">
      <div class="text-h6 q-mr-xs">Заработал NFT</div>
      <q-btn round color="primary" icon="arrow_back" size="10px" class="q-mr-xs prev-nft" />
      <q-btn round color="primary" icon="arrow_forward" size="10px" class="next-nft" />
    </div>
    <div>
      <q-btn color="secondary" label="Показать все" @click="showNftModal = !showNftModal"/>
    </div>
  </div>

<div>
  <swiper
      :modules="modules"
      :slides-per-view="6"
      :space-between="50"
      :navigation="{prevEl: '.prev-nft', nextEl: '.next-nft'}"
    >
      <swiper-slide v-for="nft in userNft" :key="nft.id">
        <q-card class="no-shadow">
          <img src="../../assets/nft.svg" alt="nft">
        </q-card>
      </swiper-slide>
    </swiper>
</div>
</div>

<q-dialog full-height full-width v-model="showNftModal">
  <q-card>
  <q-card-section class="row justify-center">
    <q-space />
    <div class="text-h5">Список всех NFT</div>
    <q-space />
    <q-btn icon="close" flat round dense v-close-popup />
  </q-card-section>
  <q-card-section class="q-pt-none">
  <div class="row wrap justify-between q-mx-auto">
  <q-card class="nft-card no-shadow q-mb-md" v-for="nft in userNft" :key="nft.id">
    <img src="../../assets/nft.svg" alt="game">
  </q-card>
  </div>
  </q-card-section>
  </q-card>
</q-dialog>

</div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/scss'
import { mapGetters } from 'vuex'
import { ref } from 'vue'
export default {
  name: 'NftList',
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    const showNftModal = ref(false)
    return {
      showNftModal,
      modules: [Navigation]
    }
  },
  computed: {
    ...mapGetters({
      userNft: 'userNft'
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
