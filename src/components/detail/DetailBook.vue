<template>
  <div class="detail-info">
    <div class="book-img">
      <ImageView :src="book.cover"/>
    </div>
    <div class="book-info">
      <div class="book-title">{{book.title}}</div>
      <div class="book-author">{{book.author}}</div>
      <div class="book-category">{{book.categoryText}}</div>
    </div>
  </div>
</template>

<script>
  import ImageView from '../base/ImageView'
  export default {
    name: 'DetailBook',
    props: {
      book: Object
    },
    components: {
      ImageView
    },
    mounted() {
      console.log(this.book)
    }
  }
</script>

<style scoped lang="scss">
  .detail-info {
    display: flex;
    padding: 16px 20px;
    .book-img {
      width: 108px;
      height: 157px;
    }
    .book-info {
      flex: 1;
      overflow: hidden;
      margin-left: 21.5px;
      padding-top: 15px;
      .book-title {
        font-size: 22px;
        color: #333;
        line-height: 24px;
        max-height: 48px;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
      }
      .book-author {
        font-size: 16px;
        line-height: 18px;
        max-height: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #333;
        font-weight: 500;
      }
      .book-category {
        margin-top: 12px;
        font-size: 14px;
        line-height: 16px;
        max-height: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #868686;
      }
    }
  }
</style>
