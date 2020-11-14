<template>
  <div class="home">
    <HeroSlider
      :slider.sync="slider"
      :cards.sync="cards"
      :news_categories="news_categories"
      :popular_products.sync="popular_products"
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
    })
  },
  data() {
    return {
      slider: { slides: [] },
      cards: [],
      news_categories: [],
      popular_products: { slides: [] },
    }
  },
  components: {
    HeroSlider,
  },
}
</script>
