<template>
  <div class="features">
    <div class="row">
      <div class="text-h6 q-mr-xs">Unique Features</div>
      <q-btn @click="leftArrow" round color="primary" icon="arrow_back" size="10px" class="q-mr-xs" />
      <q-btn @click="rightArrow" round color="primary" icon="arrow_forward" size="10px" />
    </div>
    <div class="row features-list" :style="{ 'margin-left': '-' + (150 * currentSlideFeatures) + 'px'}">
    <q-card v-for="feature in unique_features" :key="feature.id" flat bordered class="my-card row column items-center q-mr-md q-mt-md">

      <q-card-section class="q-pt-md">
        <div class="text-h6">{{feature.type}}</div>
      </q-card-section>

      <q-card-section class="q-mt-md">
        <q-btn outline label="Learn more" color="primary" size="11px"/>
      </q-card-section>
    </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UniqueFeatures',
  props: ['unique_features'],
  data () {
    return {
      currentSlideFeatures: 0
    }
  },
  methods: {
    leftArrow () {
      if (this.currentSlideFeatures > 0) {
        this.currentSlideFeatures--
      }
    },
    rightArrow () {
      if (this.currentSlideFeatures >= this.unique_features.length - 1) {
        console.log(this.currentSlideFeatures)
      } else {
        this.currentSlideFeatures++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.my-card{
  width: 160px;
  height: 160px;
  border-radius: 10px;
  background: rgb(228, 228, 228);
}
.features{
  overflow: hidden;
  &-list{
    transition: all ease .5s;
  }
}
</style>
