<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          class="search-item border-bottom"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li
          class="search-item border-bottom"
          v-show="hasList"
        >没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasList () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(v => {
            if (v.name.indexOf(this.keyword) > -1 || v.spell.indexOf(this.keyword) > -1) {
              result.push(v)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .search-input
      height .62rem
      width 100%
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666666
  .search-content
    position absolute
    top 1.58rem
    left 0
    bottom 0
    right 0
    background #eeeeee
    z-index 1
    .search-item
      line-height .62rem
      color #666
      padding-left .2rem
      background #ffffff
</style>
