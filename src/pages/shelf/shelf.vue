<template>
  <div>
    <ShelfUserInfo :user-info="userInfo" :num="bookShelf.length" :read-day="userDay"/>
    <ShelfList :shelf-list="bookShelf"/>
  </div>
</template>

<script>
  import ShelfUserInfo from '../../components/shelf/ShelfUserInfo'
  import ShelfList from '../../components/shelf/ShelfList'
  import { bookInShelf, userDay } from '../../api'
  import { getStorageSync } from '../../utils/wechat'

  export default {
    name: 'shelf',
    components: {
      ShelfUserInfo,
      ShelfList
    },
    data() {
      return {
        bookShelf: [],
        userInfo: {},
        userDay: 0
      }
    },
    onShow() {
      this.userInfo = getStorageSync('userInfo')
      this.getBookShelf()
      this.getUserDay()
    },
    methods: {
      getBookShelf() {
        const openId = getStorageSync('openId')
        bookInShelf({
          openId
        }).then(res => {
          this.bookShelf = res.data.data
          this.bookShelf.push({})
        })
      },
      getUserDay() {
        const openId = getStorageSync('openId')
        userDay({
          openId
        }).then(res => {
          this.userDay = res.data.data.day
        })
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
