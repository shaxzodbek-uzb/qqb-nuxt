<template>
  <div class="home">
    <HeroSlider
      :slider.sync="slider"
      :cards.sync="cards"
      :news_categories="news_categories"
      :popular_products.sync="popular_products"
      :main_news.sync="main_news"
    />
  </div>
</template>

<script>
import HeroSlider from '@/components/HeroSlider'
export default {
  mounted() {
    this.$axios.$get('/pages/main').then((res) => {
      this.slider = res.data.slider
      this.cards = res.data.cards
      this.news_categories = res.data.news_categories
      this.popular_products = res.data.popular_products
      this.main_news = res.data.main_news
    })
  },
  data() {
    return {
      slider: { slides: [] },
      cards: [],
      news_categories: [],
      main_news: [],
      popular_products: { slides: [] },
    }
  },
  components: {
    HeroSlider,
  },
}
</script>
