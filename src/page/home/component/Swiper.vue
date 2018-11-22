<template>
  <div class="wapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/qs/1811/3f/85a00499e2e0802.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/qs/1810/25/44fe8c8edc136402.jpg'
        }
      ]
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    console.log('this is current swiper instance object', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    callback () {
      console.log('ss')
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
  padding-bottom 25%
  background #eeeeee
  img
    width 100%
</style>
