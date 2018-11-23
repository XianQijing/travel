<template>
  <div class="wapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id" data-swiper-autoplay="3000">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
.wapper >>> .swiper-pagination-bullet-active
  background #eeeeee
.wapper
  width 100%
  height 0;
  overflow hidden
  padding-bottom 31%
  background #eeeeee
  img
    width 100%
</style>
