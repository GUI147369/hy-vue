<template>
  <div class="swiper-container HY-Banner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key='item._id'>
        <img :src='item.imgUrl'/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      // 轮播图数据
      bannerList: [],
      mySwiper: null
    }
  },
  methods: {
    initSwiper () {
      /* eslint-disable */
      this.mySwiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
        },
      })
      /* eslint-enable */
    }
  },
  created () {
    axios.get('http://localhost:3000/banner/search?pageSize=4')
      .then(res => {
        let data = res.data
        // console.log(res.data.data)
        if (data.code === 0) {
          this.bannerList = data.data
          // 1.对数据进行更新
          this.$nextTick(() => {
            this.initSwiper()
          })
        } else {
          alert('网络异常，请稍后再试')
        }
        // 2.数据更新之后，在做new Swiper  $nextTick能够确保真实dom更新
        // this.$nextTick(() => {
        //   /* eslint-disable */
        //   swiper = new Swiper('.swiper-container', {
        //     loop: true,
        //     autoplay: true,
        //     pagination: {
        //       el: '.swiper-pagination',
        //     },
        //   })
        //   /* eslint-enable */
        // })
      })
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .HY-Banner {
    height: 200px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
