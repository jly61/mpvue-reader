<template>
  <div class="auth-wrapper">
    <div class="auth">
      <div class="auth-info">
        <div class="auth-img">
          <ImageView src="https://www.youbaobao.xyz/mpvue-res/logo.jpg" round/>
        </div>
        <div class="sub-title">登陆61读书</div>
        <div class="title">全场好书免费读</div>
      </div>
      <button class="auth-btn" open-type="getUserInfo" @getuserinfo="getUserInfo">授权登录</button>
    </div>
  </div>
</template>

<script>
  import ImageView from './ImageView'
  export default {
    name: 'Auth',
    components: {
      ImageView
    },
    methods: {
      getUserInfo() {
        this.$emit('getUserInfo')
      }
    }
  }
</script>

<style scoped lang="scss">
  .auth-wrapper {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #999;
    .auth {
      display: flex;
      flex-direction: column;
      width: 248px;
      height: 270px;
      background: #f5f5f5;
      border-radius: 18px;
      .auth-info {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        margin-top: 22.5px;
        .auth-img {
          width: 74px;
        }
        .sub-title {
          margin-top: 18px;
          font-size: 13px;
          color: #999;
        }
        .title {
          margin-top: 3.5px;
          font-size: 16px;
          font-weight: bold;
          color: #333333;
        }
      }
      .auth-btn {
        width: 100%;
        height: 49px;
        line-height: 49px;
        font-size: 15px;
        color: #fff;
        border-radius: 0 0 18px 18px;
        background-image: linear-gradient(90deg, #1EA3F5 0%, #0F87FC 100%);
      }
    }
  }
</style>
