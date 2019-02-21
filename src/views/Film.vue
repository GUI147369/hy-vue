<template>
  <div class="film-list">
    <router-link tag='div' to='/city' class="address">
      <span>北京</span>
      <i class="iconfont icon-xiajiantou"></i>
    </router-link>
    <!-- 导航 -->
    <header>
      <div class="left">
        <div class="city"><span>深圳</span><i class="iconfont icon-xiajiantou"></i></div>
      </div>
      <div class="title">电影</div>
      <div class="right"></div>
    </header>
    <HYBanner></HYBanner>
    <HYTabs></HYTabs>
    <router-view></router-view>
  </div>
</template>
<script>
import HYBanner from '../components/HYBanner/Index.vue'
import HYTabs from '../components/HYTabs/Index.vue'
export default {
  components: {
    HYBanner,
    HYTabs
  }
}
</script>
<style lang='less'>
.film-list {
  position: relative;
  .address {
    position: absolute;
    top: 18px;
    left: 7px;
    z-index: 1000;
    color: #fff;
    font-size: 14px;
    background: rgba(0,0,0,.3);
    height: 26px;
    line-height: 26px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
    i {
      font-weight: bolder;
      padding-left: 5px ;
      font-size: 10px;
    }
  }
  /*头部导航 */
  header {
    position: fixed;
    top: -47px;
    z-index: 2000;
    display: flex;
    width: 100%;
    height: 47px;
    background: #FFFFFF;
    align-items: center;
    .left {
      width: 15%;
      padding-left: 15px;
      cursor: pointer;
      .icon-xiajiantou {
        padding-left: 5px;
        font-size: 10px;
      }
    }
    .title {
      flex: 1;
      text-align: center;
      font-size: 16px;
    }
    .right {
      width: 15%;
    }
  }
}
</style>
