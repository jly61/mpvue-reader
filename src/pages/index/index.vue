<template>
  <div class="home">
    <SearchBar disable @onClick="onSearchBarClick" />
    <HomeCard/>
    <HomeBanner
      img="http://www.youbaobao.xyz/book/res/bg.jpg"
      title="61阅读-随时随地打开阅读"
      subTitle="立即体验"
      @onClick="onBannerClick"
    />
    <div class="home-book">
      <HomeBook
        title="为你推荐"
        :data="data"
        row="1"
        col="3"
      />
    </div>
  </div>
</template>

<script>
  import SearchBar from '../../components/home/SearchBar'
  import HomeCard from '../../components/home/HomeCard'
  import HomeBanner from '../../components/home/HomeBanner'
  import HomeBook from '../../components/home/HomeBook'

  export default {
    components: {
      SearchBar,
      HomeCard,
      HomeBanner,
      HomeBook
    },
    data() {
      return {
        data: [
          {
            'id': 34,
            'fileName': '2018_Book_GeographiesOfTheUniversity',
            'cover': 'https://www.youbaobao.xyz/book/res/img/Geography/978-3-319-75593-9_CoverFigure.jpg',
            'title': 'Geographies of the University',
            'author': 'Peter Meusburger',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_GeographiesOfTheUniversity',
            'category': 7,
            'categoryText': 'Geography',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 59,
            'fileName': '2018_Book_DrinkingInVictorianAndEdwardia',
            'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-92964-4_CoverFigure.jpg',
            'title': 'Drinking in Victorian and Edwardian Britain',
            'author': 'Thora Hands',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_DrinkingInVictorianAndEdwardia',
            'category': 8,
            'categoryText': 'History',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 60,
            'fileName': '2018_Book_HarnessingThePowerOfTheCrimina',
            'cover': 'https://www.youbaobao.xyz/book/res/img/History/978-3-319-77908-9_CoverFigure.jpg',
            'title': 'Harnessing the Power of the Criminal Corpse',
            'author': 'Sarah Tarlow',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_HarnessingThePowerOfTheCrimina',
            'category': 8,
            'categoryText': 'History',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          },
          {
            'id': 75,
            'fileName': '2018_Book_TheEuropeanBloodAndMarrowTrans',
            'cover': 'https://www.youbaobao.xyz/book/res/img/MedicineAndPublicHealth/978-3-319-50026-3_CoverFigure.jpg',
            'title': 'The European Blood and Marrow Transplantation Textbook for Nurses',
            'author': 'Michelle Kenyon',
            'publisher': 'Springer International Publishing',
            'bookId': '2018_Book_TheEuropeanBloodAndMarrowTrans',
            'category': 17,
            'categoryText': 'MedicineAndPublicHealth',
            'language': 'en',
            'rootFile': 'OEBPS/package.opf'
          }
        ]
      }
    },
    methods: {
      onSearchBarClick() {
      },
      onBannerClick() {
      }
    }
  }
</script>

<style lang='scss' scoped>
  .home-book {
    margin-top: 23px;
  }
</style>
