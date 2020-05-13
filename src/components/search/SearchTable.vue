<template>
  <div class="search-table-wrapper">
    <div class="search-table" @click="onClick(book)" v-for="(book, index) in data" :key="index">
      <div class="book-img-wrapper">
        <ImageView
          :src="book.cover"
        />
      </div>
      <div class="book-info">
        <div class="book-title">{{book.title}}</div>
        <div class="book-author">{{book.author}}</div>
        <div class="book-category">{{book.categoryText}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import ImageView from '../base/ImageView'

  export default {
    name: 'SearchTable',
    props: {
      data: Array
    },
    components: {
      ImageView
    },
    methods: {
      onClick(book) {
        this.$emit('onClick', book)
      }
    }
  }
</script>

<style scoped lang="scss">
  .search-table-wrapper {
    padding: 0 16px;
    .search-table {
      display: flex;
      margin: 14px 0;
      align-items: center;
      .book-img-wrapper {
        width: 47px;
        height: 68.5px;
      }
      .book-info {
        width: 80%;
        margin-left: 15.5px;
        .book-title {
          width: 100%;
          font-size: 16px;
          line-height: 22.5px;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 500;
        }
        .book-author {
          font-size: 13px;
          color: rgba(0, 0, 0, .65);
          line-height: 18px;
          margin-top: 5px;
        }
        .book-category {
          font-size: 13px;
          color: rgba(0, 0, 0, .45);
          line-height: 18px;
        }
      }
    }
  }
</style>
