<template>
  <div class="home-card">
    <div class="home-card-inner">
      <div class="user-info">
        <div class="avatar-wrapper">
          <ImageView :src="avatar" round height="100%" mode="scaleToFill"/>
        </div>
        <div class="nickname">{{nickname}}</div>
        <div class="shelf-text">书架共有{{data.num}}本好书</div>
        <div class="round-item"></div>
        <div class="shelf-text">特别精选</div>
      </div>
      <div class="book-info">
        <div class="book-wrapper" v-for="(book, index) in bookList" :key="index">
          <div class="book-img-wrapper" @click="onBookClick">
            <ImageView :src="book.cover"/>
          </div>
        </div>
        <div class="shelf-wrapper" @click="gotoShelf">
          <div class="shelf">书架</div>
          <van-icon class="arrow" name="arrow" size="11px" color="#828489"></van-icon>
        </div>
      </div>
      <div class="feedback-wrapper" @click="onFeedbackClick">反馈</div>
      <van-dialog id="van-dialog"/>
    </div>
  </div>
</template>

<script>
  import ImageView from '../base/ImageView'
  import Dialog from 'vant-weapp/dist/dialog/dialog'

  export default {
    name: 'HomeCard',
    components: {
      ImageView
    },
    computed: {
      avatar() {
        if (this.data && this.data.userInfo) {
          return this.data.userInfo.avatarUrl
        } else {
          return ''
        }
      },
      nickname() {
        if (this.data && this.data.userInfo) {
          return this.data.userInfo.nickName
        } else {
          return ''
        }
      },
      bookList() {
        return (this.data.bookList) || []
      }
    },
    props: {
      data: {
        type: Object
      },
      hasSign: {
        type: Boolean,
        default: false
      },
      signDay: {
        type: Number,
        default: 0
      }
    },
    methods: {
      gotoShelf() {
        this.$router.push({
          path: '/pages/shelf/main'
        })
      },
      onBookClick() {
        this.$emit('onClick')
      },
      sign() {
      },
      onFeedbackClick() {
        Dialog.confirm({
          title: '反馈',
          message: '是否提交反馈信息'
        }).then(() => {
          console.log('确认提交后')
        }).catch(() => {
          console.log('不提交后')
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .home-card {
    background-image: linear-gradient(-90deg, #54575F 0%, #595B60 100%);
    border-radius: 15px;
    margin: 22px 20px 0;

    .home-card-inner {
      position: relative;
      box-sizing: border-box;
      padding: 21.5px 17px 20px 20px;

      .user-info {
        display: flex;
        align-items: center;

        .avatar-wrapper {
          width: 20px;
          height: 20px;
        }

        .nickname, .shelf-text {
          font-size: 12px;
          color: #fff;
        }

        .nickname {
          margin: 0 8.5px;
        }

        .shelf-text {
          opacity: 0.7;
        }

        .round-item {
          width: 4px;
          height: 4px;
          background: #A2A2A2;
          border-radius: 50%;
          margin: 0 8px;
        }
      }

      .book-info {
        display: flex;
        margin-top: 16.5px;

        .book-wrapper {
          display: flex;
          flex: 1;
          justify-content: space-between;

          .book-img-wrapper {
            width: 72px;
            height: 101px;
          }
        }

        .shelf-wrapper {
          display: flex;
          align-items: center;
          margin-left: 17.5px;

          .shelf {
            width: 11px;
            font-size: 11px;
            word-break: break-all;
            color: #fff;
            opacity: .8;
          }

          .arrow {
            margin-left: 4.5px;
          }
        }
      }

      .feedback-wrapper {
        position: absolute;
        top: 19.5px;
        right: 0;
        border-radius: 100px 0 0 100px;
        width: 44.5px;
        height: 23.5px;
        line-height: 23.5px;
        text-align: center;
        background: #707070;
        color: #fff;
        font-size: 11px;
      }
    }
  }
</style>
