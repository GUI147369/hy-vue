<template>
  <div class="city-list">
    <header>
      <!-- {{ maName }}
      {{ mbName }} -->
      <!-- {{ aname }}
      {{ bname }}
      {{ cname }} -->
      <!-- this.$store.commit('ma/chgAName') -->
      <!-- <button @click="chgAName({ name: '张三'})">修改a中的name</button>
      <button @click="chgBName( {name: '李四'})">修改b中的name</button>
      <button @click="$store.commit('/updateName', {name:'王五'})">修改c中的name</button> -->
      <!-- 头部当前城市 -->
      <div class="header">
        <div class="left">
          <i class="iconfont icon-cancel-1-copy"></i>
        </div>
        <div class="title">当前城市-{{ curCityName }}</div>
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
                <div class="city-item-text">{{ IpCityName }}</div>
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
        <li class="city-index-section" v-for="(item) in filterCityData" :key='item.py' :id='item.py'>
          <p class="city-index-letter">{{ item.py }}</p>
          <ul class="city-index-detail">
            <li class="city-item-detail-white" v-for="(city) in item.list" :key='city.cityId'>
              <div class="city-item-text-white" @click="chgCityName(city.name)">{{ city.name }}</div>
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
// import axios from 'axios'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      // curCityName: '北京',
      // cityData: []
    }
  },
  /**
   * mapState mapGetters
   */
  computed: {
    cname () {
      return this.$store.state.mc.name
    },
    // ...Vuex.mapState([
    //   'cityData',
    //   'curCityName',
    // ]),
    // ...Vuex.mapGetters([
    //   'filterLetters',
    //   'filterCityData'
    // ]),
    // 对于这种情况，你可以将模块的空间名称字符串作为第一个参数传递给上述函数，这样所有绑定都会自动将该模块作为上下文。
    // 在主模块中已经定义好了
    ...mapState('ma', {
      'aname': (state) => state.name
    }),
    ...mapState('mb', {
      'bname': (state) => state.name
    }),
    ...mapState([
      'cityData',
      'curCityName',
      'IpCityName'
      // 'maName', 不能使用，这个找的是this.$store.state
      // 'mbName'
    ]),
    ...mapGetters([
      'filterLetters',
      'filterCityData'
    ])
    // maName () {
    //   return this.$store.state.ma.name
    // },
    // mbName () {
    //   return this.$store.state.mb.name
    // }
  },
  /**
  * 当前城市-
  */
  // curCityName () {
  //  return this.$store.state.curCityName
  //  },
  // /**
  // * 处理之后排序的的城市数据
  // */
  // filterCityData () {
  //  return this.$store.getters.filterCityData
  //  },
  // /**
  // *  右侧的首字母排序
  // */
  // filterLetters () {
  //   return this.$store.getters.filterLetters
  //  }
  // },
  /**
  * mapMutations
  */
  methods: {
    // 事件操作
    ...mapMutations([
      'chgCityName',
      'chgCityData'
    ]),
    // 异步请求
    ...mapActions([
      'getCityData',
      'ipCityName'
    ]),
    ...mapMutations('ma', [
      'chgAName'
    ]),
    ...mapMutations('mb', [
      'chgBName'
    ]),
    /**
     * 点击修改子a模块的name
     */

    /**
     * 点击城市 切换城市
     * 点击修改数据 只能用mutation 在store的js文件中
     * @param {Object} 点击城市对象
     */
    // changeCityName (city) {
    //   // this.$store.state.curCityName = city.name
    //   // this.$store.commit('chgCityName', city.name)
    //   this.chgCityName(city.name)
    // },
    /**
     * 右边的拼音首字母
     * @param {String} py 点击拼音首字母
     */
    touchLetter (py) {
      // 得到左侧到顶部的距离
      let top = document.getElementById(py).offsetTop
      // 滚动条是左侧盒子的
      // console.log(top)
      // console.log(this.$refs.scroll)
      document.documentElement.scrollTop = top - 50
    }
  },
  created () {
    // this.getCityData()
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
