<template>
  <footer class="footer">
    <router-link to="/films" active-class='active'>
      <i class="iconfont icon-dianying"></i>
      <span>电影</span>
    </router-link>
    <router-link to="/cinemas" active-class='active'>
      <i class="iconfont icon-yingyuan"></i>
      <span>影院</span>
    </router-link>
    <router-link to="/center" active-class='active'>
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
    </router-link>
  </footer>
</template>
<style lang="less">
  .footer {
    height: 50px;
    border-top: 1px solid #cbcbcb;
    background: #fefefe;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    a {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      color: #969696;
      font-size: 14px;
      i {
        color: #747474;
        font-size: 16px;
      }
      &.active {
        color: #ff5f16;
        i {
          color: #ff5f16;
        }
      }
    }
  }
</style>
