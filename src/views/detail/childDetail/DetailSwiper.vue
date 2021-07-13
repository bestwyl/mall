<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="(item,index) in detailTopImages" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue';
import SwiperItem from 'components/common/swiper/SwiperItem.vue';
export default {
  name:'DetailSwiper',
  props: {
    detailTopImages: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  created() {
    
  }
}
</script>

<style scoped>
  .detail-swiper{
    height: 300px;
    overflow: hidden;
  }
</style>