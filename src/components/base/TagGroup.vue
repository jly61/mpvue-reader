<template>
  <div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="header-text">{{headerText}}</div>
      <div class="header-btn" @click="onBtnClick">{{btnText}}</div>
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(text, index) in value" :key="index">
        <Tag :text="text" @onClick="onTagClick(text, index)"/>
      </div>
    </div>
  </div>
</template>

<script>
  import Tag from './Tag'
  export default {
    name: 'TagGroup',
    props: {
      headerText: String,
      btnText: String,
      value: Array
    },
    components: {
      Tag
    },
    methods: {
      onTagClick(text, index) {
        this.$emit('onTagClick', text, index)
      },
      onBtnClick() {
        this.$emit('onBtnClick')
      }
    }
  }
</script>

<style scoped lang="scss">
  .tag-group-wrapper {

    .tag-group-header {
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      padding: 0 16px;
      .header-text {
        color: #333333;
      }
      .header-btn {
        color: #3696EF;
      }
    }
    .tag-group {
      max-width: 100%;
      box-sizing: border-box;
      margin-top: 4px;
      display: flex;
      flex-flow: row wrap;
      padding: 10px;
      .tag-group-inner {
        max-width: 100%;
        box-sizing: border-box;
        padding: 6px;
      }
    }
  }
</style>
