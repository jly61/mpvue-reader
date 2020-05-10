<template>
  <div class="home">
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
        title="分类"
        :data="data"
        row="2"
        col="2"
        mode="category"
        btn-text="更多"
        @onMoreClick="onMoreClick"
        @onBookClick="onBookClick"
      />
    </div>
  </div>
</template>

<script>
  import SearchBar from '../../components/home/SearchBar'
  import HomeCard from '../../components/home/HomeCard'
  import HomeBanner from '../../components/home/HomeBanner'
  import HomeBook from '../../components/home/HomeBook'
  import {getHomeData} from '../../api'

  export default {
    components: {
      SearchBar,
      HomeCard,
      HomeBanner,
      HomeBook
    },
    data() {
      return {
        hotSearch: '',
        homeCard: {},
        banner: {},
        recommend: [],
        freeRead: [],
        hotBook: [],
        category: []
      }
    },
    created() {
      this.$nextTick(() => {
        getHomeData({
          openId: 666
        }).then(res => {
          const {data: {
            hotSearch: { keyword },
            shelf,
            banner,
            recommend,
            freeRead,
            hotBook,
            category,
            shelfCount
          }} = res.data
          this.hotSearch = keyword
          this.banner = banner
          this.recommend = recommend
          this.freeRead = freeRead
          this.hotBook = hotBook
          this.category = category
          this.homeCard = {
            bookList: shelf,
            num: shelfCount,
            userInfo: {
              avatar: 'https://www.youbaobao.xyz/mpvue-res/logo.jpg',
              nickname: '米老鼠'
            }
          }
          console.log(res.data)
        })
      })
    },
    methods: {
      onSearchBarClick() {
      },
      onBannerClick() {
      },
      onMoreClick() {
        console.log('更多')
      },
      onBookClick() {
        console.log('点击图书')
      }
    }
  }
</script>

<style lang='scss' scoped>
  .home-book {
    margin-top: 23px;
  }
</style>
