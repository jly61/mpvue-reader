<template>
    <div class="search-wrapper">
      <SearchBar disabled="false"/>
      <div class="tag-group-wrapper">
        <TagGroup
          :value="tags"
          header-text="热门搜索"
          btn-text="换一批"
          @onTagClick="onTagClick"
          @onBtnClick="onBtnClick"
        />
      </div>
      <SearchItem
        icon="apps-o"
        title="计算机"
        sub-title="分类"
      />
      <SearchItem
        icon="apps-o"
        title="计算机"
        sub-title="分类"
      />
      <SearchItem
        icon="apps-o"
        title="计算机"
        sub-title="分类"
      />
    </div>
</template>

<script>
  import SearchBar from '../../components/home/SearchBar'
  import TagGroup from '../../components/base/TagGroup'
  import SearchItem from '../../components/search/SearchItem'
  export default {
    name: 'search',
    components: {
      TagGroup,
      SearchBar,
      SearchItem
    },
    data() {
      return {
        tags: [
          'aaa',
          'bbb',
          'cccccccccccc',
          'dddddddd',
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
  .tag-group-wrapper {
    margin-top: 20px;
  }
</style>
