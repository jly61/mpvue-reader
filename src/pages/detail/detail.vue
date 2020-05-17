<template>
  <div>
    <DetailBook :book="bookDetail"/>
    <DetailStat
      :readers="bookDetail.readers"
      :reader-num="bookDetail.readerNum"
      :rank-num="bookDetail.rankNum"
      :rank-avg="bookDetail.rankAvg"
    />
    <DetailRate
      @onRateChange="onRateChange"
      :rate-value="bookDetail.rank"
    />
    <DetailContent
      :contents="contents"
      @readBook="readBook"
    />
    <DetailBottom :is-in-shelf="isInShelf" @handleShelf="handleShelf" @readBook="readBook"/>
  </div>
</template>

<script>
  import DetailBook from '../../components/detail/DetailBook'
  import DetailStat from '../../components/detail/DetailStat'
  import DetailRate from '../../components/detail/DetailRate'
  import DetailContent from '../../components/detail/DetailContent'
  import DetailBottom from '../../components/detail/DetailBottom'
  import {bookDetail, bookRankSave, bookContent, bookInShelf, bookShelfSave, bookShelfRemove} from '../../api'
  import {getStorageSync} from '../../utils/wechat'

  export default {
    name: 'detail',
    components: {
      DetailBook,
      DetailStat,
      DetailRate,
      DetailContent,
      DetailBottom
    },
    data() {
      return {
        bookDetail: {},
        contents: [], // 图书目录
        isInShelf: false
      }
    },
    mounted() {
      this.getBookDetail()
      this.getBookContent()
      this.getBookInShelf()
    },
    methods: {
      onRateChange(value) {
        const openId = getStorageSync('openId')
        const fileName = this.$route.query.fileName
        bookRankSave({
          openId,
          fileName,
          rank: value
        }).then(res => {
          this.getBookDetail()
        })
      },
      getBookDetail() {
        const openId = getStorageSync('openId')
        const fileName = this.$route.query.fileName
        if (openId && fileName) {
          bookDetail({
            openId: openId,
            fileName: fileName
          }).then(res => {
            this.bookDetail = res.data.data
          })
        }
      },
      getBookContent() {
        const fileName = this.$route.query.fileName
        if (fileName) {
          bookContent({
            fileName
          }).then(res => {
            this.contents = res.data.data
            console.log(this.contents)
          })
        }
      },
      readBook(href) {
        let index = href.indexOf('/')
        if (index > 0) {
          href = href.slice(index + 1)
        }
        let query = {
          fileName: this.bookDetail.fileName,
          opf: this.bookDetail.opf
        }
        if (href) {
          query.navigation = href
        }
        if (this.bookDetail && this.bookDetail.fileName) {
          this.$router.push({
            path: '/pages/read/main',
            query
          })
        }
      },
      getBookInShelf() {
        const openId = getStorageSync('openId')
        const fileName = this.$route.query.fileName
        if (openId && fileName) {
          bookInShelf({
            openId: openId,
            fileName: fileName
          }).then(res => {
            const data = res.data.data
            data.length === 0 ? this.isInShelf = false : this.isInShelf = true
          })
        }
      },
      // 加入/移除书架
      handleShelf() {
        const openId = getStorageSync('openId')
        const fileName = this.$route.query.fileName
        if (!this.isInShelf) {
          bookShelfSave({
            openId: openId,
            fileName: fileName
          }).then(res => {
            this.getBookInShelf()
          })
        } else {
          const _this = this
          mpvue.showModal({
            title: '提示',
            content: `是否将《${this.bookDetail.title}》移除书架`,
            success(res) {
              if (res.confirm) {
                bookShelfRemove({
                  openId: openId,
                  fileName: fileName
                }).then(res => {
                  _this.getBookInShelf()
                })
              }
            }
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
