<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-icon">&#xe624;</div>
    </router-link >
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle">
      <router-link tag="div" to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
        景点详情
    </router-link >
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAbs = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.showAbs = true
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left .2rem
  top 0.2rem
  width .8rem
  height .8rem
  border-radius .4rem
  background rgba(0, 0, 0, .8)
  .header-abs-icon
    color #ffffff
    font-size .4rem
    line-height .8rem
    text-align center
.header-fixed
  height $headerHeight
  line-height $headerHeight
  text-align center
  color #ffffff
  position fixed
  background $bgColor
  top 0
  left 0
  right 0
  .header-fixed-back
    width .64rem
    text-align center
    font-size .4rem
    position absolute
    top 0
    left 0
    color #ffffff
</style>
