<template>
  <div>
    <DetailBook :book="bookDetail"/>
    <DetailStat
      :readers="bookDetail.readers"
      :reader-num="bookDetail.readerNum"
      :rank-num="bookDetail.rankNum"
      :rank-avg="bookDetail.rankAvg"
    />
    <DetailRate @onRateChange="onRateChange" :rate-value="bookDetail.rank" />
  </div>
</template>

<script>
  import DetailBook from '../../components/detail/DetailBook'
  import DetailStat from '../../components/detail/DetailStat'
  import DetailRate from '../../components/detail/DetailRate'
  import { bookDetail, bookRankSave } from '../../api'
  import { getStorageSync } from '../../utils/wechat'

  export default {
    name: 'detail',
    components: {
      DetailBook,
      DetailStat,
      DetailRate
    },
    data() {
      return {
        bookDetail: {}
      }
    },
    mounted() {
      this.getBookDetail()
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
            console.log(this.bookDetail)
          })
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
