<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <div class="wapper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="item in imgs" :key="item" data-swiper-autoplay="3000">
            <img class="gallary-img" :src="item" alt="">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        observeParents: true,
        observer: true,
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  display flex
  flex-direction column
  justify-content center
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 99
  background #000
  .wrapper
    width 100%
    height 0
    // overflow hidden
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>
