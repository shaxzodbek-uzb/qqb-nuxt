<template>
  <div class="home">
    <HeroSlider
      :slider.sync="slider"
      :cards.sync="cards"
      :news_categories="news_categories"
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
    })
  },
  data() {
    return {
      slider: { slides: [] },
      cards: [],
      news_categories: [],
    }
  },
  components: {
    HeroSlider,
  },
}
</script>
