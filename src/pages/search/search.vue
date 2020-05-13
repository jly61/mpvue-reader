<template>
  <div class="search-wrapper">
    <SearchBar disabled="false"
      @onChange="onChange"
    />
    <div class="tag-group-wrapper">
      <TagGroup
        :value="hotSearch"
        header-text="热门搜索"
        btn-text="换一批"
        @onTagClick="showBookDetail"
        @onBtnClick="changeHotSearch"
        v-if="hotSearch.length > 0 && !showList"
      />
    </div>
    <div class="tag-group-wrapper">
      <TagGroup
        :value="historySearch"
        header-text="历史搜索"
        btn-text="清空"
        @onTagClick="searchKeyWord"
        @onBtnClick="clearHistorySearch"
        v-if="historySearch.length > 0 && !showList"
      />
    </div>
    <SearchList :data="searchList" v-if="showList"/>
  </div>

</template>

<script>
  import SearchBar from '../../components/home/SearchBar'
  import TagGroup from '../../components/base/TagGroup'
  import SearchList from '../../components/search/SearchList'
  import { search } from '../../api'
  import { getStorageSync } from '../../utils/wechat'

  export default {
    name: 'search',
    components: {
      TagGroup,
      SearchBar,
      SearchList
    },
    data() {
      return {
        hotSearch: [],
        historySearch: [],
        searchList: {},
        openId: ''
      }
    },
    computed: {
      // 判断搜索列表
      showList() {
        const keys = Object.keys(this.searchList)
        return keys.length > 0
      }
    },
    created() {
      this.openId = getStorageSync('openId')
    },
    methods: {
      // 搜素输入改变时
      onChange(keyword) {
        if (!keyword || keyword.trim().length === 0) {
          return
        }
        this.onSearch(keyword)
      },
      onSearch(keyword) {
        search({
          keyword: keyword,
          openId: this.openId
        }).then(res => {
          this.searchList = res.data.data
          console.log(this.searchList)
        })
      },
      // 点击tag标签,跳转到book详情页
      showBookDetail() {
        console.log('tag')
      },
      // 热门搜索换一批
      changeHotSearch() {
        console.log('换一批')
      },
      // 清空历史搜索
      clearHistorySearch() {
        console.log('清空历史搜索')
      },
      searchKeyWord() {}
    }
  }
</script>

<style scoped lang="scss">
  .tag-group-wrapper {
    margin-top: 20px;
  }
</style>
