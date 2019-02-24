<template>
  <div class="content">
    <!-- <h1>我是个人中心</h1>
    <router-link to='/card' tag='li'>卡</router-link>
    <router-link to='/money' tag='li'>余额</router-link>
    <router-link to='/set' tag='li'>设置</router-link> -->
    <!-- 头像 -->
    <div class="avatar">
      <router-link to='/user' tag='div' class="avatar-img"><img src="../../public/images/touxiang.png"/></router-link>
      <router-link to='/user' tag='div'>{{ }}</router-link>
    </div>
    <!--选项卡 -->
    <ul class="my-order-tab">
      <li><router-link to='/filmOrder'><i class="iconfont icon-youhuiquan"></i><p>电影订单</p></router-link></li>
      <li><router-link to='/groupOrder'><i class="iconfont icon-ziyuan"></i><p>拼团订单</p></router-link></li>
    </ul>
    <!-- card 影卡-->
    <div class="option card">
      <router-link to='card'>
        <i class="iconfont icon-qia"></i>
        <span>好影卡</span>
        <i class="iconfont icon-youjiantou"></i>
      </router-link>
    </div>
    <!--  balance 余额-->
    <div class="option balance">
      <router-link to='money'>
        <i class="iconfont icon-yue"></i>
        <span class="diff">余额<span><i style="font-size:14px">￥</i>0</span></span>
        <i class="iconfont icon-youjiantou"></i>
      </router-link>
    </div>
    <!-- set设置 -->
    <div class="option set">
      <router-link to='set'>
        <i class="iconfont icon-shezhi"></i>
        <span>设置</span>
        <i class="iconfont icon-youjiantou"></i>
      </router-link>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState([
      'userName'
    ]),
    ...mapGetters([
      'userNickName'
    ])
  }
}
</script>

<style lang="less">
/* 头像 */
.content {
  .avatar {
    height: 150px;
    background: url(../../public/images/center-bg.png);
    background-size: 100%  140px;
    padding: 20px 0 0 20px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 14px;
    .avatar-img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  /* 选项卡 */
  .my-order-tab  {
    width: 100%;
    height: 70px;
    background: #ffffff;
    display: flex;
    padding: 10px;
    box-sizing: border-box;
    margin-bottom: 10px;
    li {
      width: 50%;
      height: 100%;
      align-self: center;
      a {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        font-size: 14px;
        p {
          color: #797d82;
        }
        i {
          font-size: 24px;
          color: #ffc82d;
        }
        .icon-ziyuan {
          color : #c6da5c;
        }
      }
    }
  }
  /* option */
  .option {
    padding: 14px 20px;
    background: #ffffff;
    margin-bottom: 2px;
    a {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        width: 80%;
        padding-left: 10px;
        font-size: 14px;
      }
      i{
        font-size: 22px;
      }
      .icon-qia {
        color: #ffa68e;
      }
      .icon-yue {
        color: #ffbc4b;
      }
      .diff {
        display: flex;
        justify-content: space-between;
        text-align: right;
        font-size: 14px;
      }
      .icon-shezhi{
        color: #c1d267;
      }
      .icon-youjiantou {
        font-size: 10px;
      }
    }
  }
  // .option a i:first-of-type {
  //   font-size: .20rem;
  // }
  // .option a .icon-qia {
  //   color: #ffa68e;
  // }
  // .option a .icon-yue {
  //   color: #ffbc4b;
  // }
  // .option a .diff {
  //   display: flex;
  //   justify-content: space-between;
  //   text-align: right;
  //   font-size: .14rem;
  // }
  // .option a .icon-shezhi {
  //   color: #c1d267;
  // }
  // .option a i:last-of-type {
  //   font-size: .10rem;
  // }
}
</style>
