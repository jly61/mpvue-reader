<template>
  <div class="category">
    <HomeBook
      :data="category"
      :row="row"
      col="2"
      mode="category"
      :show-title="false"
      :show-btn="false"
      @onBookClick="onCategoryClick"
    />
  </div>
</template>

<script>
  import HomeBook from '../../components/home/HomeBook'
  import {bookCategory} from '../../api'

  export default {
    name: 'category',
    components: {
      HomeBook
    },
    data() {
      return {
        category: [],
        row: 0
      }
    },
    mounted() {
      this.getBookCategory()
    },
    methods: {
      getBookCategory() {
        bookCategory().then(res => {
          this.category = res.data.data
          this.row = this.category.length / 2
        })
      },
      // 点击分类图书
      onCategoryClick(category) {
        this.$router.push({
          path: '/pages/list/main',
          query: {
            key: 'categoryId',
            text: category.category,
            title: category.categoryText
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>
