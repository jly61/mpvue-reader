<template>
  <div class="list-wrapper">
    <SearchTable :data="searchList"/>
  </div>
</template>

<script>
  import SearchTable from '../../components/search/SearchTable'
  import {searchList} from '../../api'
  import {setNavigationBarTitle} from '../../utils/wechat'

  export default {
    name: 'list',
    components: {
      SearchTable
    },
    data() {
      return {
        searchList: []
      }
    },
    mounted() {
      this.getSearchList()
      setNavigationBarTitle(this.$route.query.text)
    },
    methods: {
      getSearchList() {
        const {key, text} = this.$route.query
        const params = {}
        if (key && text) {
          params[key] = text
        }
        console.log(params)
        searchList(params).then(res => {
          this.searchList = res.data.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
