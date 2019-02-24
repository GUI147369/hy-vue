<template>
  <div class="login-main">
    <!-- <h1>我是登录页</h1>
    <input type='text' placeholder='用户名' v-model='userName'/>
    <input type='password' placeholder='密码' v-model='passWord'/>
    <button @click='login'>登录</button> -->
    <div class="login-logo">
      <img src="../../public/images/logo.png"/>
    </div>
    <div class="login-form">
      <div class="from-group">
        <div class="input-wrap">
          <input type="text" placeholder="用户名" class="form-input" v-model='userName' @keyup="showClear"/>
          <div class="clear" ref='clear1' style="display:none" @click="clearText1">
            <i class="iconfont icon-cancel-1-copy"></i>
          </div>
        </div>
      </div>
      <div class="from-group">
        <div class="input-wrap">
          <input type="password" placeholder="密码" class="form-input" v-model='passWord' @keyup="showClear"/>
          <div class="clear" ref='clear2' style="display:none" @click="clearText2">
            <i class="iconfont icon-cancel-1-copy"></i>
          </div>
        </div>
      </div>
      <div class="error-tip" ref='error'>用户名或密码错误</div>
      <button @click='login'>登录</button>
    </div>
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
      if (this.userName !== '' || this.passWord !== '') {
        axios.post('http://localhost:3000/user/login', {
          name: this.userName,
          pwd: this.passWord
        }).then((res) => {
          console.log(res.data)
          if (res.data.code === 0) {
            // 设置sessionStorage
            sessionStorage.setItem('nickName', res.data.data.nickName)
            // 跳转想去的页面
            this.$router.replace({
              path: this.$route.query.redirect
            })
          } else {
            // 密码或密码错误
            // alert(res.data.msg)
            this.$refs.error.style.display = 'block'
            this.$refs.clear1.style.display = 'none'
            this.$refs.clear2.style.display = 'none'
          }
        })
      } else {
        alert('用户名和密码不能为空')
      }
    },
    showClear () {
      this.$refs.error.style.display = 'none'
      if (this.userName !== '') {
        this.$refs.clear1.style.display = 'block'
      } else {
        this.$refs.clear1.style.display = 'none'
      }
      if (this.passWord !== '') {
        this.$refs.clear2.style.display = 'block'
      } else {
        this.$refs.clear2.style.display = 'none'
      }
    },
    clearText1 () {
      this.userName = ''
      this.$refs.clear1.style.display = 'none'
    },
    clearText2 () {
      this.passWord = ''
      this.$refs.clear2.style.display = 'none'
    }
  }
}
</script>
<style lang="less">
.login-main {
  overflow: hidden;
  height: 100%;
  background: #ffffff;
  .login-logo {
    padding: 50px 0;
    margin:  auto;
    img {
      width: 150px;
      margin: auto;
    }
  }
  .login-form {
    text-align: center;
    padding: 0 30px;
    .error-tip {
      font-size: 14px;
      color: #f33333;
      height: 40px;
      line-height: 40px;
      display: none;
    }
    button {
      text-align: center;
      background: #3ea1f3;
      width: 80px;
      height: 30px;
      line-height: 30px;
      border: 0;
      border-radius: 4px;
      color: #ffffff;
    }
    .from-group {
      height: 30px;
      margin: 10px auto;
      margin-bottom: 30px;
      border-bottom: 1px solid #cccccc;
      .input-wrap {
        position: relative;
        .form-input {
          width: 100%;
          height: 20px;
          border: 0;
        }
        .clear {
          z-index: 1000;
          position: absolute;
          right: 30px;
          top: 4px;
          width: 15px;
          height: 15px;
          line-height: 10px;
          border-radius: 50%;
          background: #7e7a7a;
          .icon-cancel-1-copy {
            font-size: 8px;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
