<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe633;</span>{{this.gallaryImgs.length}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="showGallary" @close="handleBannerClose"></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleBannerClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  overflow hidden
  position relative
  height 0
  padding-bottom 55%
  .banner-img
    width 100%
  .banner-info
    position absolute
    color #fff
    left 0
    right 0
    bottom 0
    line-height .6rem
    display flex
    background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
    .banner-title
      flex 1
      font-size .32rem
      padding 0 .2rem
    .banner-number
      margin-top .2rem
      padding 0 .4rem
      height .32rem
      line-height .4rem
      border-radius .2rem
      font-size .24rem
      background rgba(0, 0, 0, .8)
      .banner-icon
        font-size .24rem
</style>
