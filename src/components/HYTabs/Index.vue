<template>
  <div class="tabs-wrap">
    <!--选项卡按钮-->
    <div class="tabs-bar">
      <ul class="tabs-nav">
        <router-link active-class="active" tag='li' to='/films/nowPlaying' ref='transtion'><span>正在热映</span></router-link>
        <router-link active-class="active" tag='li' to='/films/comingSoon' ref='transtion2'><span>即将上映</span></router-link>
        <div class="tab-ink-bar-wrapper" id='change'><span class="tab-ink-bar"></span></div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$refs.transtion)
    this.$refs.transtion.$el.addEventListener('click', function () {
      document.getElementById('change').style.transform = 'translateX(0%)'
    })
    this.$refs.transtion2.$el.addEventListener('click', function () {
      document.getElementById('change').style.transform = 'translateX(100%)'
    })
  }
}
</script>

<style lang="less">
/*选项卡*/
.tabs-bar {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid rgb(219, 219, 219);
  background: #FFFFFF;
  .tabs-nav {
    width: 100%;
    display: flex;
    position: relative;
    li {
      width: 50%;
      text-align: center;
      cursor: pointer;
    }
    .active {
      color: #ff5f16;
    }
    /*选项卡底部横线*/
    .tab-ink-bar-wrapper {
      position: absolute;
      top: 33px;
      width: 50%;
      height: 2px;
      transition: all .5s;
      .tab-ink-bar {
        width: 55px;
        display: block;
        margin: auto;
        border-bottom: 2px solid #ff5f16;
      }
    }
  }
}
</style>
