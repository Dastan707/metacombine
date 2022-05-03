<template>
  <div>
    <div class="row q-mb-md">
      <div class="text-h6 q-mr-xs">Unique Features</div>
      <q-btn round color="primary" icon="arrow_back" size="10px" class="q-mr-xs prev-btn" />
      <q-btn round color="primary" icon="arrow_forward" size="10px" class="next-btn" />
    </div>
    <div>
    <swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="20"
      :navigation="{prevEl: '.prev-btn', nextEl: '.next-btn'}"
      class="q-pa-sm"
    >
      <swiper-slide v-for="feature in unique_features" :key="feature.id">
        <q-card flat bordered class="my-card row items-center q-mt-md">
          <div class="features-text column justify-center items-center">
            <div class="text-h6">{{feature.type}}</div>
            <q-btn class="q-mt-md" outline label="Learn more" color="primary" size="11px"/>
          </div>
        </q-card>
      </swiper-slide>
    </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'
import 'swiper/scss'

export default {
  name: 'UniqueFeatures',
  components: {
    Swiper,
    SwiperSlide
  },
  props: ['unique_features'],
  setup () {
    return {
      modules: [Navigation]
    }
  }
}
</script>
<style lang="scss" scoped>
.my-card{
  width: 100%;
  padding-bottom: 100%;
  border-radius: 10px;
  background: rgb(228, 228, 228);
}
.features-text{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.swiper{
  padding: 5px;
}
</style>
