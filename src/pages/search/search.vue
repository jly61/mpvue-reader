<template>
    <div class="search-wrapper">
      <TagGroup
        :value="tags"
        header-text="热门搜索"
        btn-text="换一批"
        @onTagClick="onTagClick"
        @onBtnClick="onBtnClick"
      />
    </div>
</template>

<script>
  import TagGroup from '../../components/base/TagGroup'
  export default {
    name: 'search',
    components: {
      TagGroup
    },
    data() {
      return {
        tags: [
          'aaa',
          'bbb',
          'cccccccccccc',
          'ddd',
          'eeeeeeeeeeeeeeeeeeee'
        ]
      }
    },
    methods: {
      onTagClick(text, index) {
        console.log(text, index)
      },
      onBtnClick() {
        console.log('onBtnClick')
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
