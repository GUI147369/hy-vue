<template>
  <div>
    <HYBanner></HYBanner>
    <HYTabs></HYTabs>
    <HYFooter></HYFooter>
  </div>
</template>
<script>
import HYBanner from '../components/HYBanner/Index.vue'
import HYTabs from '../components/HYTabs/Index.vue'
import HYFooter from '../components/HYFooter/Index.vue'
export default {
  components: {
    HYBanner,
    HYTabs,
    HYFooter
  }
}
</script>
