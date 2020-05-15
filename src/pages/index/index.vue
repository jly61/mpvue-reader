<template>
  <div>
    <div class="home" v-if="isAuth">
      <SearchBar disable @onClick="onSearchBarClick"
                 :hot-search="hotSearch"
      />
      <HomeCard :data="homeCard"/>
      <HomeBanner
        img="http://www.youbaobao.xyz/book/res/bg.jpg"
        title="61阅读-随时随地打开阅读"
        subTitle="立即体验"
        @onClick="onBannerClick"
      />
      <div class="home-book">
        <HomeBook
          title="为您推荐"
          :data="recommend"
          row="1"
          col="3"
          mode="col"
          btn-text="换一批"
          @onMoreClick="recommendChange('recommend')"
          @onBookClick="onBookClick"
        />
        <HomeBook
          title="免费阅读"
          :data="freeRead"
          row="2"
          col="2"
          mode="row"
          btn-text="换一批"
          @onMoreClick="recommendChange('freeRead')"
          @onBookClick="onBookClick"
        />
        <HomeBook
          title="当前最热"
          :data="hotBook"
          row="1"
          col="4"
          mode="col"
          btn-text="换一批"
          @onMoreClick="recommendChange('hotBook')"
          @onBookClick="onBookClick"
        />
        <HomeBook
          title="分类"
          :data="category"
          row="3"
          col="2"
          mode="category"
          btn-text="查看全部"
          @onMoreClick="onCategoryMoreClick"
          @onBookClick="onBookClick"
        />
      </div>
    </div>
    <Auth v-if="!isAuth" @getUserInfo="init"/>
  </div>
</template>

<script>
  import SearchBar from '../../components/home/SearchBar'
  import HomeCard from '../../components/home/HomeCard'
  import HomeBanner from '../../components/home/HomeBanner'
  import HomeBook from '../../components/home/HomeBook'
  import Auth from '../../components/base/Auth'
  import {getHomeData, recommend, freeRead, hotBook, register} from '../../api'
  import {
    getSetting,
    getUserInfo,
    setStorageSync,
    getStorageSync,
    getUserOpenId,
    showLoading,
    hideLoading
  } from '../../utils/wechat'

  export default {
    components: {
      SearchBar,
      HomeCard,
      HomeBanner,
      HomeBook,
      Auth
    },
    data() {
      return {
        hotSearch: '',
        homeCard: {},
        banner: {},
        recommend: [],
        freeRead: [],
        hotBook: [],
        category: [],
        isAuth: true
      }
    },
    mounted() {
      // 查看是否授权
      this.init()
      this.getHomeData()
    },
    methods: {
      // 授权成功后再次检查授权信息，调用getSetting
      init() {
        this.getSetting()
      },
      // 授权成功后获取用户信息，不会调用getSetting的onSuccess
      getUserInfo() {
        const onOpenIdComplete = (openId) => {
          const userInfo = getStorageSync('userInfo')
          this.getHomeData(openId, userInfo)
          register(openId, userInfo)
        }
        getUserInfo((userInfo) => {
          setStorageSync('userInfo', userInfo)
          const openId = getStorageSync('openId')
          if (!openId || openId.length === 0) {
            getUserOpenId(onOpenIdComplete)
          } else {
            onOpenIdComplete(openId)
          }
        }, () => {
          console.log('failed')
        })
      },
      // 获取用户当前授权设置
      getSetting() {
        getSetting('userInfo', () => {
          this.isAuth = true
          showLoading('正在加载')
          this.getUserInfo()
        }, () => {
          this.isAuth = false
        })
      },
      // 点击更多
      recommendChange(key) {
        switch (key) {
          case 'recommend':
            recommend().then(res => {
              this.recommend = res.data.data
            })
            break
          case 'freeRead':
            freeRead().then(res => {
              this.freeRead = res.data.data
            })
            break
          case 'hotBook':
            hotBook().then(res => {
              this.hotBook = res.data.data
            })
            break
        }
      },
      // 点击分类加载更多
      onCategoryMoreClick() {
      },
      // 获取首页数据
      getHomeData(openId, userInfo) {
        if (!openId) {
          return
        }
        getHomeData({
          openId: openId
        }).then(res => {
          const {
            data: {
              hotSearch: {keyword},
              shelf,
              banner,
              recommend,
              freeRead,
              hotBook,
              category,
              shelfCount
            }
          } = res.data
          this.hotSearch = keyword
          this.banner = banner
          this.recommend = recommend
          this.freeRead = freeRead
          this.hotBook = hotBook
          this.category = category
          this.homeCard = {
            bookList: shelf,
            num: shelfCount,
            userInfo: userInfo
          }
          hideLoading()
        })
      },
      onSearchBarClick() {
        this.$router.push({
          path: '/pages/search/main',
          query: {
            hotSearch: this.hotSearch
          }
        })
      },
      onBannerClick() {
      },
      onBookClick(book) {
        this.$router.push({
          path: '/pages/detail/main',
          query: {
            fileName: book.fileName
          }
        })
      }
    }
  }
</script>

<style lang='scss' scoped>
  .home-book {
    margin-top: 23px;
  }
</style>
