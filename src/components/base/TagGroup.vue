<template>
  <div class="tag-group-wrapper">
    <div class="tag-group-header">
      <div class="header-text">{{headerText}}</div>
      <div class="header-btn" @click="onBtnClick">{{btnText}}</div>
    </div>
    <div class="tag-group">
      <div class="tag-group-inner" v-for="(text, index) in value" :key="index">
        <Tag :text="text" @click="onTagClick(text, index)"/>
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

</style>
