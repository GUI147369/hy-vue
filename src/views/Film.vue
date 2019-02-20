<template>
  <div>
    <HYBanner></HYBanner>
    <HYTabs></HYTabs>
    <ul>
      <router-link to='/detail/100' tag='li'>流浪地球</router-link>
      <router-link to='/detail/200' tag='li'>蓝色生死恋</router-link>
    </ul>
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
