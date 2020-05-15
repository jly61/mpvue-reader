<template>
  <div class="home-book">
    <div class="home-book-title">{{title}}</div>
    <div class="home-book-content">
      <div class="home-book-row" v-for="(rowItem, rowIndex) in bookData" :key="rowIndex">
        <div class="home-book-col" v-for="(colItem, colIndex) in rowItem" :key="colIndex"
             :style="{flex: '0 0 ' + 100/col + '%'}">
          <div class="book-wrapper" :style="{ flexDirection: mode === HOME_BOOK_MODE.COL ? 'column' : 'row' }"
               @click="onBookClick(colItem)"
               v-if="mode === HOME_BOOK_MODE.COL || mode === HOME_BOOK_MODE.ROW"
          >
            <ImageView :src="colItem.cover" height="147"/>
            <div class="book-title-wrapper book-title-col" v-if="mode === HOME_BOOK_MODE.COL">
              <div class="book-title">{{colItem.title}}</div>
            </div>
            <!--            row-->
            <div class="book-title-wrapper book-title-row" v-else>
              <div class="book-title">{{colItem.title}}</div>
              <div class="book-author-wrapper">
                <div class="book-title book-author">{{colItem.author}}</div>
                <div class="book-title book-author book-category">{{colItem.categoryText}}</div>
              </div>
            </div>
          </div>
          <div class="category-wrapper" v-else>
            <div class="category-title">{{colItem.text}}</div>
            <div class="category-num">{{colItem.num}}本书</div>
            <div class="category-img-wrapper">
              <div class="category-img1">
                <ImageView :src="colItem.cover"></ImageView>
              </div>
              <div class="category-img2">
                <ImageView :src="colItem.cover2"></ImageView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home-book-footer" v-if="showBtn">
      <van-button round class="home-book-btn" block="true" @click="onMoreClick">{{btnText}}</van-button>
    </div>
  </div>
</template>

<script>
  import {HOME_BOOK_MODE, CATEGORY} from '@/utils/const'
  import ImageView from '../base/ImageView'

  export default {
    name: 'HomeBook',
    components: {
      ImageView
    },
    props: {
      title: String,
      data: {
        type: Array,
        default: []
      },
      btnText: '',
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
      HOME_BOOK_MODE() {
        return HOME_BOOK_MODE
      },
      bookData() {
        const {data, row, col} = this
        if (data && data.length > 0) {
          // 将英文分类转换成中文分类
          data.forEach(item => {
            item.text = CATEGORY[item.categoryText.toLowerCase()]
          })
          const number = row * col
          const bookData = data.slice(0, number)
          const rowBookData = []
          let _row = 0
          while (_row < row) {
            // 如两行两列，第一行：0,2  第二行： 2,4
            rowBookData.push(bookData.slice(_row * col, _row * col + col))
            _row++
          }
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
      onMoreClick() {
        this.$emit('onMoreClick')
      },
      // 点击图书事件
      onBookClick(book) {
        this.$emit('onBookClick', book)
      }
    }
  }
</script>

<style scoped lang="scss">
  .home-book {
    .home-book-title {
      padding: 13px 0 0 20.5px;
    }

    .home-book-content {
      padding: 0 12px;
      margin-top: 10.5px;

      .home-book-row {
        display: flex;
        flex-flow: row nowrap;
        margin-top: 12px;

        .home-book-col {
          padding: 0 8px;
          box-sizing: border-box;

          .book-wrapper {
            display: flex;

            .book-title-wrapper {
              .book-title {
                font-size: 12px;
                color: #212731;
                line-height: 16.5px;
                max-height: 33px;
                font-weight: 500;
                overflow: hidden;
                word-break: break-word;
              }
            }

            .book-title-row {
              display: flex;
              flex: 0 0 50%;
              flex-direction: column;
              justify-content: space-around;
              margin-left: 9px;

              .book-title {
                font-size: 14px;
                color: #1F1F1F;
                line-height: 18px;
                max-height: 36px;
                overflow: hidden;
                word-break: break-word;
              }

              .book-author {
                font-size: 12px;
                color: #868686;
                line-height: 14px;
                max-height: 14px;
              }
            }
          }
          .category-wrapper {
            position: relative;
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            background: #F8F9FB;
            border-radius: 10px;
            padding: 13.5px 0 14.5px 16px;
            box-sizing: border-box;
            height: 96px;
            .category-title {
              width: 150px;
              overflow: hidden;
              text-overflow: ellipsis;
              font-size: 16px;
              line-height: 22.5px;
              color: #212832;
            }
            .category-num {
              font-size: 12px;
              line-height: 16.5px;
              color: #868686;
            }
            .category-img-wrapper {
              position: absolute;
              right: 0;
              bottom: 0;
              height: 60px;
              .category-img1 {
                position: absolute;
                bottom: -3px;
                right: 0;
                z-index: 99;
                width: 48px;
              }
              .category-img2 {
                position: absolute;
                bottom: -3px;
                right: 30px;
                z-index: 89;
                width: 36px;
              }
            }
          }
        }
      }
    }

    .home-book-footer {
      margin: 12px 20px 20px;
    }
  }
</style>
<style lang="scss">
  // 修改vant按钮样式
  .home-book-footer {
    .van-button--default {
      width: 100%;
      text-align: center;
      font-size: 14px;
      color: #3696EF;
      border: 1px solid #EDEEEE;
    }
  }
  // 图片组件圆角
  .category-img1 {
    .image {
      border-radius: 0 0 10px 0;
    }
  }
</style>
