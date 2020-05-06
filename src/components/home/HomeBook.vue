<template>
  <div class="home-book">
    <div class="home-book-title">{{title}}</div>
    <div class="home-book-content"></div>
    <div class="home-book-footer"></div>

  </div>
</template>

<script>
  import {HOME_BOOK_MODE} from '@/utils/const'

  export default {
    name: 'HomeBook',
    props: {
      title: String,
      data: {
        type: Array,
        default: []
      },
      row: {
        type: Number,
        default: 0
      },
      col: {
        type: Number,
        default: 1
      },
      mode: {
        type: String,
        default: HOME_BOOK_MODE.ROW
      },
      showTitle: {
        type: Boolean,
        default: true
      },
      showBtn: {
        type: Boolean,
        default: true
      },
      linearBg: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      bookData() {
        const { data, row, col } = this
        if (data && data.length > 0) {
          const number = row * col
          const bookData = data.slice(0, number)
          const rowBookData = []
          let _row = 0
          while (_row < row) {
            // 如两行两列，第一行：0,2  第二行： 2,4
            rowBookData.push(bookData.slice(_row * col, _row * col + col))
            _row++
          }
          console.log(rowBookData)
          return rowBookData
        } else {
          return []
        }
      }
    },
    mounted() {
    },
    methods: {
      // 点击更多事件
      onMoreClick() {},
      // 点击图书事件
      onBookClick() {}
    }
  }
</script>

<style scoped lang="scss">
  .home-book {
    .home-book-title {
      padding: 13px 0 0 20.5px;
    }
    .home-book-content {}
    .home-book-footer {}
  }
</style>
