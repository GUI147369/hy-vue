<template>
  <div>
    <h1>我是登录页</h1>
    <input type='text' placeholder='用户名' v-model='userName'/>
    <input type='password' placeholder='密码' v-model='passWord'/>
    <button @click='login'>登录</button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      userName: '',
      passWord: ''
    }
  },
  methods: {
    login () {
      axios.post('http://localhost:3000/user/login', {
        name: this.userName,
        pwd: this.passWord
      }).then((res) => {
        console.log(res.data)
        if (res.data.code === 0) {
          // 设置sessionStorage
          sessionStorage.setItem('nickName', res.data.data.nickName)
          // 跳转想去的页面
          this.$router.push({
            path: this.$route.query.redirect
          })
        } else {
          alert(res.data.msg)
        }
      })
    }
  }
}
</script>
