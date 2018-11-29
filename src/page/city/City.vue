<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list
      :cities="cities"
      :hot="hotCity"
      :letter="letter"
    ></city-list>
    <city-alphabet
      :cities="cities"
      @change="handleLetterChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './component/Header'
import CitySearch from './component/Search'
import CityList from './component/List'
import CityAlphabet from './component/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      cities: {},
      hotCity: [],
      letter: ''
    }
  },
  methods: {
    getCity () {
      this.axios.get('/static/mock/city.json').then(res => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCity = data.hotCities
        }
      })
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCity()
  }
}
</script>

<style lang="stylus" scoped>
</style>
