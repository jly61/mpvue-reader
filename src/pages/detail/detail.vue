<template>
  <div>
    <DetailBook :book="bookDetail"/>
  </div>
</template>

<script>
  import DetailBook from '../../components/detail/DetailBook'
  import { bookDetail } from '../../api'
  import { getStorageSync } from '../../utils/wechat'

  export default {
    name: 'detail',
    components: {
      DetailBook
    },
    data() {
      return {
        bookDetail: {}
      }
    },
    mounted() {
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
    }
  }
</script>

<style scoped lang="scss">

</style>
