<template>
  <div class="search-item-wrapper" @click="onClick">
    <div class="icon-wrapper">
      <van-icon :name="icon" color="rgba(0, 0, 0, .5)" size='16px' :style="{height: '16px'}"></van-icon>
    </div>
    <div class="search-item-info">
      <div class="search-item-title">{{title}}</div>
      <div class="search-item-sub-title">{{subTitle}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchItem',
    props: {
      title: String,
      subTitle: String,
      icon: String
    },
    methods: {
      onClick() {
        this.$emit('onClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-item-wrapper {
    display: flex;
    align-items: center;
    height: 36.5px;
    padding: 15px;
    .icon-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 32px;
      height: 32px;
      background: #F7F7F9;
      border-radius: 50%;
    }
    .search-item-info {
      width: 80%;
      margin-left: 10px;
      .search-item-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        color: #333333;
        font-weight: 500;
      }
      .search-item-sub-title {
        font-size: 12px;
        color: rgba(0,0,0,0.45);
      }
    }
  }
</style>
