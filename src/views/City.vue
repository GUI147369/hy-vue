<template>
  <div class="city-list">
    <header>
      <!-- 头部当前城市 -->
      <div class="header">
        <div class="left">
          <i class="iconfont icon-cancel-1-copy"></i>
        </div>
        <div class="title">当前城市-{{curCity}}</div>
      </div>
      <!-- 搜索框 -->
      <div class="search-city-input">
        <div class="input-wrap">
          <i class="iconfont icon-fangdajing"></i>
          <input type="text" placeholder="输入城市名或拼音" class="search-input">
          <div class="clean-icon">
            <i class="iconfont icon-cancel-1-copy"></i>
          </div>
        </div>
        <div class="cancel-btn">取消</div>
      </div>
    </header>
    <!-- 城市列表 -->
    <div class="city-list-wrap" ref='scroll'>
      <!-- 按字母排序 -->
      <ul class="city-list-content" >
        <!-- GPS定位 热门城市 -->
        <div class="recommend-city">
          <div class="gps-city">
            <div class="city-index-title">GPS定位你所在城市</div>
            <ul class="city-index-detail cleanfix">
              <li class="city-item-detail city-item-detail-gprs">
                <div class="city-item-text">定位失败</div>
              </li>
            </ul>
          </div>
          <div class="hot-city">
            <div class="city-index-title">热门城市</div>
            <ul class="city-index-detail cleanfix">
              <li class="city-item-detail">
                <div class="city-item-text">北京</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">上海</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">广州</div>
              </li>
              <li class="city-item-detail">
                <div class="city-item-text">深圳</div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 每个按字母排序的城市 -->
        <li class="city-index-section" v-for="(item, index) in filterCityData" :key='item.py' :id='item.py'>
          <p class="city-index-letter">{{ item.py }}</p>
          <ul class="city-index-detail">
            <li class="city-item-detail-white" v-for="(city, index) in item.list" :key='city.cityId'>
              <div class="city-item-text-white">{{ city.name }}</div>
            </li>
          </ul>
        </li>
      </ul>
      <!-- 26个字母 -->
    </div>
    <!-- 右边首字母排序 -->
    <div class="city-item-nav">
      <ul class="mint-indexlist-navlist">
        <li class="mint-indexlist-navitem" v-for="(item, index) in filterLetters" :key='index' @click='touchLetter(item)'>
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      curCity: '北京',
      cityData: []
    }
  },
  methods: {
    /**
     * 获取城市信息数组
     */
    getCityData () {
      axios.get('./cityData.json').then((response) => {
        let res = response.data
        if (res.status === 0) {
          this.cityData = res.data.cities
        } else {
          alert('网络错误，请稍后再试')
        }
      })
    },
    /**
     * 右边的拼音首字母
     * @param {String} py 拼音首字母
     */
    touchLetter (py) {
      // 得到左侧到顶部的距离
      let top = document.getElementById(py).offsetTop
      // 滚动条是左侧盒子的
      // console.log(top)
      // console.log(this.$refs.scroll)
      document.documentElement.scrollTop = top-50
    }
  },
  computed: {
    /**
     * 处理之后排序的的城市数据
     */
    filterCityData () {
      let hash = {}
      let i = 0
      let res = []
      // 循环数据
      this.cityData.forEach(item => {
        let firstLetter = item.pinyin.substr(0, 1).toUpperCase()
        // console.log(firstLetter)
        if (hash[firstLetter]) { // 存在
          let index = hash[firstLetter] - 1
          res[index].list.push(item)
        } else { // 不存在
          hash[firstLetter] = ++i
          let obj = {}
          obj.py = firstLetter
          obj.list = [item]
          res.push(obj)
        }
      })
      let temp = res.sort((a, b) => {
        return a.py.charCodeAt() - b.py.charCodeAt()
      })
      // console.log(temp)
      return temp
    },
    /**
     *  右侧的首字母排序
     */
    filterLetters () {
      let list = this.filterCityData.map(item => {
        return item.py
      })
      return list
    }
  },
  created () {
    this.getCityData()
  }
  /**
   *
  */
}
</script>

<style lang="less">
@import url('../assets/style/city.less');
</style>
