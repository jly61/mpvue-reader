<template>
  <div class="home-banner" @click="onClick">
    <div class="bg-img" :style="{backgroundImage: bgImage}">
      <div class="title">{{title}}</div>
      <div class="sub-title">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeBanner',
    props: {
      img: String,
      title: String,
      subTitle: String
    },
    computed: {
      bgImage() {
        return 'url(' + this.img + ')'
      }
    },
    methods: {
      onClick() {
        this.$emit('onClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  .home-banner {
    margin-top: 20px;
    padding: 0 20px;

    .bg-img {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 125px;
      border-radius: 10px;
      background-size: 100% 100%;
      background-repeat: no-repeat;

      .title {
        font-size: 16px;
        color: #fff;
        font-weight: 500;
      }

      .sub-title {
        font-size: 16px;
        color: #fff;
        border: 1px solid #eee;
        border-radius: 50px;
        padding: 5px 15px;
        margin-top: 10px;
        background: #4585ff;
      }
    }
  }
</style>
