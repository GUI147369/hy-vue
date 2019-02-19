<template>
  <div>
    <!-- 放置一个坑 后面的页面的切换，会按照路由的对照表去渲染这个坑 -->
    <!-- 放置films cinema center页面 -->
    <router-view></router-view>
    <HYFooter></HYFooter>
  </div>
</template>
<script>
import HYFooter from '../components/HYFooter/Index.vue'
export default {
  components: {
    HYFooter
  }
}
</script>
