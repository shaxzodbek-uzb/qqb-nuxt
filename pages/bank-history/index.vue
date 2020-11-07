<template>
  <div
    class="bank-history-page p-relative"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="bank-history-container pt-60">
        <h1 class="title-50">История банка</h1>

        <div class="cards-entry-text"></div>

        <div class="carousel-tab-wrap">
          <div
            class="carousel-tab-items"
            data-items="tabContent"
            v-for="item in histories"
            :key="item.id"
            :class="{ active: item.id == active_item }"
          >
            <div class="row">
              <div class="col-xl-6">
                <div class="bank-year-text">
                  <p>{{ item.year }}</p>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="bank-year-meta" v-html="item.description"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="slick--wrapper p-fixed w-100" v-if="histories.length > 0">
      <div class="container p-relative">
        <VueSlickCarousel
          v-bind="settings"
          ref="carousel"
          :slidesToShow="17"
          :focusOnSelect="true"
          :draggable="false"
          :speed="700"
        >
          <div
            class="slick--items"
            data-id="0"
            data-items="slick"
            v-for="item in histories"
            :key="item.id"
            @click="active_item = item.id"
          >
            <h3>{{ item.year }}</h3>
          </div>
        </VueSlickCarousel>

        <div class="custom-arrow custom-arrow__prev" @click="showPrevItem">
          <img src="~/static/img/svg/arrow-left.png" alt />
        </div>

        <div class="custom-arrow custom-arrow__right" @click="showNextItem">
          <img src="~/static/img/svg/arrow-right.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset } from '~/utils/frontend'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  data() {
    return {
      settings: {
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 7,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      },
      histories: [],
      active_item: 0,
    }
  },
  components: { VueSlickCarousel },
  mounted() {
    setOffset()
    let me = this
    this.$axios.$get('/bank-histories').then((res) => {
      me.histories = res.data['bank-histories']
      me.active_item = me.histories[0].id
    })
  },
  methods: {
    showPrevItem() {
      this.$refs.carousel.prev()
    },

    showNextItem() {
      this.$refs.carousel.next()
    },
  },
}
</script>

<style></style>
