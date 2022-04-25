<template>
<div class="nft">
  <div class="nft-wrapper row column q-mt-lg">
  <div class="row justify-between items-center q-mb-md" style="width: 100%">
    <div class="row">
      <div class="text-h6 q-mr-xs">Заработал NFT</div>
      <q-btn @click="leftArrow" round color="primary" icon="arrow_back" size="10px" class="q-mr-xs" />
      <q-btn @click="rightArrow" round color="primary" icon="arrow_forward" size="10px" />
    </div>
    <div>
      <q-btn color="secondary" label="Показать все" @click="openModal"/>
    </div>
  </div>

<div class="nft-list" :style="{ 'margin-left': '-' + (150 * currentSlideIndex) + 'px'}">
<q-card class="nft-card no-shadow" v-for="nft in userNft" :key="nft.id">
    <img style="width: 170px" src="../../assets/nft.svg" alt="nft">
</q-card>
</div>
</div>

<q-dialog full-height full-width v-model="showModal">
  <q-card>
  <q-card-section>
    <div class="text-h5 row justify-center">Список всех NFT</div>
  </q-card-section>

  <q-card-section class="q-pt-none">
  <div class="row wrap justify-between q-mx-auto">
  <q-card class="nft-card no-shadow q-mb-md" v-for="nft in userNft" :key="nft.id">
    <img src="../../assets/nft.svg" alt="game">
  </q-card>
  </div>
  </q-card-section>

  <q-card-actions align="center">
    <q-btn label="Close" color="primary" style="width: 20%" v-close-popup />
  </q-card-actions>
  </q-card>
</q-dialog>

</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'NftList',
  data () {
    return {
      currentSlideIndex: 0,
      showModal: false
    }
  },
  methods: {
    leftArrow () {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },
    rightArrow () {
      if (this.currentSlideIndex >= this.userNft.length - 1) {
        console.log(this.currentSlideIndex)
      } else {
        this.currentSlideIndex++
      }
    },
    openModal () {
      this.showModal = true
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
.nft{
    &-wrapper{
      overflow: hidden;
    }
    &-list{
      display: flex;
      transition: all ease .5s;
    }
    &-card{
      width: 150px;
      height: 150px;
      margin-right: 35px;
    }
}

</style>
