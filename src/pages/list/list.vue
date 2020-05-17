<template>
  <div class="list-wrapper">
    <SearchTable :data="searchList"/>
  </div>
</template>

<script>
  import SearchTable from '../../components/search/SearchTable'
  import {searchList} from '../../api'
  import {setNavigationBarTitle, showToast} from '../../utils/wechat'

  export default {
    name: 'list',
    components: {
      SearchTable
    },
    data() {
      return {
        searchList: [],
        page: 1
      }
    },
    mounted() {
      this.page = 1
      this.getSearchList()
      setNavigationBarTitle(this.$route.query.title)
    },
    // 触底触发
    onReachBottom() {
      this.page++
      const {key, text} = this.$route.query
      const params = {}
      if (key && text) {
        params[key] = text
        params['page'] = this.page
      }
      searchList(params).then(res => {
        const list = res.data.data
        // console.log(list)
        if (list.length > 0) {
          this.searchList.push(...list)
        } else {
          showToast('没有更多了', 2000)
        }
        console.log(this.searchList, this.page)
      })
    },
    methods: {
      getSearchList() {
        const {key, text} = this.$route.query
        const params = {}
        if (key && text) {
          params[key] = text
        }
        searchList(params).then(res => {
          this.searchList = res.data.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
