<template>
  <div>
    <h1>详情页面</h1>
    <span>id式 {{this.$route.params.id}}</span>
    <button @click='go'>去城市也买你</button>
  </div>
</template>
<script>
export default {
  props: {
    id: Number
  },
  created () {
    console.log(this.$route)
    console.log(this.$router)
  },
  methods: {
    go () {
      this.$router.push('/city')
    }
  }
}
</script>
