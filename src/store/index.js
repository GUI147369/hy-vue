// 仓库文件
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import a from './a.js'
import b from './b.js'
import c from './c.js'
Vue.use(Vuex)
// 创建仓库
let store = new Vuex.Store({
  // 选项对象
  // state 相当于data 仓库数据
  state: {
    userName: '',
    IpCityName: '',
    curCityName: '',
    cityData: []
  },
  // 相当于 vue 的计算属性 getters
  getters: {
    /**
    * 对数据进行处理
    * @param {Object} state 就是当前仓库的 state
    */
    filterCityData (state) {
      let hash = {}
      let i = 0
      let res = []
      // 循环数据
      state.cityData.forEach(item => {
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
    * @param {Object} state 就是当前仓库的 state
    * @param {Object} getters 就是当前的getters
    */
    filterLetters (state, getters) {
      let list = getters.filterCityData.map(item => {
        return item.py
      })
      return list
    },
    /**
     * 用户的昵称
     */
    userNickName (state) {
      let nickName = sessionStorage.getItem('nickName')
      state.userName = nickName
    }
  },
  // 操作仓库数据修改提交的
  mutations: {
    /**
     * 定位城市 只有ip变才能变
     */
    ipCityName (state, payload) {
      state.IpCityName = payload
    },
    /**
     * 修改state中的数据，修改 curCityName
     * @param {Object} state 就是当前仓库的 state
     * @param {String} name 是commit方法传递过来的参数(提交载荷) 城市名称
     */
    chgCityName (state, payload) {
      state.curCityName = payload
    },
    /**
     * 修改 城市数据数组
     * @param {Object} state 就是当前仓库的 state
     * @param {String} name 是commit方法传递过来的参数(提交载荷) 城市名称
     */
    chgCityData (state, payload) {
      state.cityData = payload
    },
    /**
     * 修改用户昵称
     */
    chgNickName (state, payload) {
      state.userName = payload
    }
  },
  // commit提交的是mutations 不是直接的改变状态
  actions: {
    /**
     * 获取城市信息数组
     * @param {Object} context 上下文对象 相当于 {state getters mutations}
     */
    getCityData ({ commit, getters, mutations }) {
      axios.get('./cityData.json').then((response) => {
        let res = response.data
        if (res.status === 0) {
          // this.$store.commit('chgCityData', res.data.cities)
          // 存入数据
          // this.chgCityData(res.data.cities)
          this.commit('chgCityData', res.data.cities)
        } else {
          alert('网络错误，请稍后再试')
        }
      })
    },
    /**
     * 调取百度API去获取当前城市
     */
    getCityName (commit, getters, mutations) {
      /* eslint-disable */
      var myCity = new BMap.LocalCity()
      myCity.get((result) => {
        console.log(result.name)
        var name = result.name
        var newName = name.substr(0, name.length-1)
        this.commit('chgCityName', newName)
        this.commit('ipCityName',newName)
      })
       /* eslint-enable */
    }
  },
  modules: {
    // modules 中选项对象是 key:value{Object}
    ma: a,
    mb: b,
    mc: c
  },
  // 如果使用了modules 都推荐使用namespaced(命名空间)
  namespaced: true
})
export default store
