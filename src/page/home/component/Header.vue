<template>
  <div class="header">
    <div class="header-left ">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩/主题
      </div>
      <router-link to="/city">
      <div class="header-right">{{this.city}}
        <span class="iconfont arrow-icon">&#xe6aa;</span>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display:flex
  height: $headerHeight
  background: $bgColor
  color #fff
  line-height $headerHeight
  .header-left
    width: 0.64rem
    float: left
    .back-icon
      text-align center
      font-size .4rem
  .header-input
    flex: 1
    padding-left .2rem
    line-height .64rem
    margin-top .12rem
    height .64rem
    background #ffffff
    border-radius .1rem
    color #cccccc
  .header-right
    width: 1.24rem
    text-align center
    float: right
    color #ffffff
    .arrow-icon
      margin-left -.04rem
</style>
