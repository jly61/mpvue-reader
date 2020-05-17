<template>
  <div>
    <web-view :src="url"></web-view>
  </div>
</template>

<script>
  export default {
    name: 'read',
    data() {
      return {
        url: ''
      }
    },
    mounted() {
      const query = this.$route.query
      let _url = 'http://www.youbaobao.xyz/book/#/ebook/'
      if (query.opf && query.fileName) {
        _url = `${_url}${query.fileName}?opf=${query.opf}`
      }
      if (query.opf && query.navigation) {
        _url = `${_url}&navigation=${query.navigation}`
      }
      this.url = _url
      console.log(this.url)
    }
  }
</script>

<style scoped lang="scss">

</style>
