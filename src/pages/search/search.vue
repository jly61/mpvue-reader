<template>
  <div class="search-wrapper">
    <SearchBar
      :focus="inputFocus"
      disabled="false"
      @onChange="onChange"
      @onClear="onClear"
      @onConfirm="onConfirm"
      :hot-search="hotSearchWord"
      ref="searchBar"
    />
    <div class="tag-group-wrapper">
      <TagGroup
        :value="hotSearchArray"
        header-text="热门搜索"
        btn-text="换一批"
        @onTagClick="showBookDetail"
        @onBtnClick="changeHotSearch"
        v-if="hotSearchArray.length > 0 && !showList"
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
  import {search, hotSearch} from '../../api'
  import {getStorageSync, setStorageSync, showToast} from '../../utils/wechat'

  export default {
    name: 'search',
    components: {
      TagGroup,
      SearchBar,
      SearchList
    },
    data() {
      return {
        inputFocus: true,
        hotSearchWord: '',
        hotSearch: [],
        historySearch: [],
        searchList: {},
        openId: '',
        page: 1
      }
    },
    computed: {
      // 判断搜索列表
      showList() {
        const keys = Object.keys(this.searchList)
        return keys.length > 0
      },
      hotSearchArray() {
        const hotSearchArray = []
        this.hotSearch.forEach(item => {
          hotSearchArray.push(item.title)
        })
        return hotSearchArray
      }
    },
    mounted() {
      this.page = 1
      this.openId = getStorageSync('openId')
      // 搜索框内容
      this.hotSearchWord = this.$route.query.hotSearch
      hotSearch().then(res => {
        this.hotSearch = res.data.data
      })
      this.historySearch = getStorageSync('historySearch') || []
    },
    // 滚动事件
    onPageScroll() {
      this.inputFocus = false
      console.log('scroll')
    },
    // 上拉触底事件
    onReachBottom() {
      if (this.showList) {
        console.log('bottom')
        this.page++
        const searchWord = this.$refs.searchBar.getValue()
        this.onSearch(searchWord)
      }
    },
    methods: {
      // 搜索框确认事件
      onConfirm(keyword) {
        if (!keyword || keyword.trim().length === 0) {
          keyword = this.hotSearchWord
          // 回车将热搜词写入搜索框
          this.$refs.searchBar.setValue(keyword)
        }
        this.onSearch(keyword)
        this.inputFocus = false
        if (!this.historySearch.includes(keyword)) {
          this.historySearch.push(keyword)
          setStorageSync('historySearch', this.historySearch)
        }
      },
      // 清除搜索框
      onClear(keyword) {
        this.searchList = {}
      },
      // 搜素输入改变时
      onChange(keyword) {
        if (!this.$refs.searchBar.getValue()) {
          this.searchList = {}
        }
        this.page = 1
        this.inputFocus = true
        if (!keyword || keyword.trim().length === 0) {
          return
        }
        this.onSearch(keyword)
      },
      onSearch(keyword) {
        search({
          keyword: keyword,
          openId: this.openId,
          page: this.page
        }).then(res => {
          // this.searchList = res.data.data
          if (this.page === 1) {
            this.searchList = res.data.data
          } else {
            const {book} = res.data.data
            if (book && book.length > 0) {
              console.log(this.page)
              console.log(...book)
              console.log(this.searchList)
              this.searchList.book.push(...book)
            } else {
              showToast('没有更多数据', 2000)
            }
          }
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
        this.historySearch = []
        setStorageSync('historySearch', [])
      },
      searchKeyWord(text, index) {
        this.$refs.searchBar.setValue(text)
        this.onSearch(text)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tag-group-wrapper {
    margin-top: 20px;
  }
</style>
