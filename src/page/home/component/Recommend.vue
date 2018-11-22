<template>
  <div>
    <div class="recommend-title">
      热销推荐
    </div>
    <ul>
      <li class="item">
        <div class="item-img-wrapper">
          <img src="" alt="" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title"> </p>
          <p class="item-desc"> </p>
          <button class="item-buttom">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
.recommend-title
  line-height .8rem
  margin-top .2rem
  background #eeeeee
  text-indent .2rem
.item
  display flex
  overflow hidden
  height 1.9rem
  background red
</style>
