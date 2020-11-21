<template>
  <div class="swipe-container">
    <!-- :wheelControl="false" -->
    <div class="hooper-container">
      <!-- Parent Slide 1 -->
      <div class="hooper-slide-items hooper-slide-1">
        <div class="set-offset-slide d-flex f-column">
          <div class="hooper-nested-container f-fill">
            <!-- Begin Nested Slider -->
            <VueSlickCarousel
              v-bind="settings"
              :autoplay="true"
              ref="carousel"
              v-if="slider.slides.length != 0"
            >
              <!-- Nested Slide 1 -->
              <div
                v-for="slide in slider.slides"
                class="nested-slide-items p-relative d-flex align-center"
                :key="slide.id"
              >
                <img
                  class="slide-full-banner p-absolute img-cover"
                  :src="slide.image"
                  alt
                />

                <div class="container">
                  <div class="nested-slide-text p-relative">
                    <h1 class="title-60">{{ slide.name }}</h1>

                    <p v-html="slide.description"></p>

                    <nuxt-link
                      v-if="slide.url"
                      :to="localePath(`/${slide.url}`)"
                      class="btn btn-border rounded pointer transition"
                      >{{ $t('Подробнее') }}</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <!-- End Nested Slide 1 -->

              <!-- Nested Slide 2 -->
              <div v-if="slider.slides.length == 0">
                <h3></h3>
              </div>
              <!-- End Nested Slide 2 -->

              <template #prevArrow="arrowOption">
                <div class="custom-fraction-slot">
                  <div class="container">
                    <div class="slot-text">
                      {{ arrowOption.currentSlide + 1 }}
                      <span>/</span>
                      {{ arrowOption.slideCount }}
                    </div>
                  </div>
                </div>
              </template>
            </VueSlickCarousel>

            <!-- Nested Slide Arrows -->
            <div class="nested-slide-arrow-slot">
              <div class="container">
                <div class="arrow-slot-container d-flex">
                  <div
                    class="custom-arrow-slot arrow-slot--left child-center"
                    @click="prevSlide"
                  >
                    <img src="/img/svg/arrow-left.png" alt />
                  </div>

                  <div
                    class="custom-arrow-slot arrow-slot--right child-center"
                    @click="nextSlide"
                  >
                    <img src="/img/svg/arrow-right.png" alt />
                  </div>
                </div>
              </div>
            </div>
            <!-- End Nested Slide Arrows -->

            <!-- End Nested Slider -->
          </div>
          <div class="app-exchange-wrap p-relative">
            <img
              src="/img/svg/lines.svg"
              class="content-overlay p-absolute"
              alt
            />
            <div class="container">
              <div class="app-exchange-row d-flex align-center p-relative">
                <div class="app-exchange-cell">
                  <span>{{ $t('Кредиты') }}</span>
                  <h1>{{ $t('от', { percent: '23%' }) }}</h1>
                </div>
                <div class="app-exchange-cell">
                  <span>{{ $t('Ипотека') }}</span>
                  <h1>{{ $t('от', { percent: '18%' }) }}</h1>
                </div>
                <div class="app-exchange-cell">
                  <span>{{ $t('Вклады') }}</span>
                  <h1>{{ $t('от', { percent: '14%' }) }}</h1>
                </div>
                <div class="app-exchange-cell" v-if="false">
                  <span>{{ $t('Карты с CashBack') }}</span>
                  <h1>{{ $t('от') }} 2%</h1>
                </div>

                <img
                  class="slide-angle-icon ml-auto pointer"
                  src="/img/svg/angle-down.png"
                  alt
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Parent Slide 1 -->

      <!-- Parent Slide 2 -->
      <div class="hooper-slide-items hooper-slide-2">
        <div
          class="set-offset-slide d-flex f-column"
          data-set="offset"
          data-offset="top bottom"
        >
          <div
            class="nested-container-offset f-fill d-flex"
            data-offset="setLeftOffset"
          >
            <div class="slide-offset-container d-flex">
              <div class="slide-offset-left d-flex f-column">
                <h1 class="title-40">
                  <span>{{ $t('Популярные') }}</span> {{ $t('Продукты') }}
                </h1>

                <p>
                  {{
                    $t(
                      'Покупайте товары и оплачивайте услуги в торговых точках по всему миру. Снимайте наличные средства в банкоматах и кассах филиалов банка.'
                    )
                  }}
                </p>

                <nuxt-link :to="localePath('/')" class="button-arrow">
                  <span>{{ $t('Смотреть все') }}</span>
                  <img src="/img/svg/arrow-right.png" alt />
                </nuxt-link>

                <!-- Nested Slide Arrows -->
                <div class="nested-slide-arrow-slot arrow-slot-relative">
                  <div class="container">
                    <div class="arrow-slot-container d-flex">
                      <div
                        class="custom-arrow-slot arrow-slot--left child-center"
                        @click="nestedFirstPrevSlide"
                      >
                        <img src="/img/svg/arrow-left.png" alt />
                      </div>

                      <div
                        class="custom-arrow-slot arrow-slot--right child-center"
                        @click="nestedFirstNextSlide"
                      >
                        <img src="/img/svg/arrow-right.png" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Nested Slide Arrows -->
              </div>
              <div class="hooper-nested-container">
                <!-- Begin Nested Slider -->
                <VueSlickCarousel
                  ref="nestedCarouselFirst"
                  v-bind="nestedSettings"
                  class="hooper-var-width hooper-var-second"
                  v-if="popular_products.slides.length != 0"
                >
                  <!-- Nested Slide 2 -->
                  <div
                    class="var-width-items"
                    v-for="item in popular_products.slides"
                    :key="item.id"
                  >
                    <nuxt-link
                      :to="localePath(`/${item.url}`)"
                      class="card-items rounded transition d-flex f-column align-center h-100"
                    >
                      <img
                        class="card-background-1 img-cover p-absolute"
                        :src="item.image"
                        alt
                      />

                      <h2>{{ item.name }}</h2>
                      <div
                        class="mt-auto mb-auto"
                        v-html="item.description"
                      ></div>

                      <div
                        class="fake-route-button-2 rounded pointer transition"
                      >
                        {{ $t('Подробнее') }}
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- End Nested Slide 2 -->
                  <div v-if="popular_products.slides.length == 0">
                    <h3></h3>
                  </div>
                  <template #prevArrow="arrowOption">
                    <div class="custom-fraction-slot fraction-offset-slot">
                      <div class="container">
                        <div class="slot-text">
                          {{ arrowOption.currentSlide + 1 }}
                          <span>/</span>
                          {{ arrowOption.slideCount }}
                        </div>
                      </div>
                    </div>
                  </template>
                </VueSlickCarousel>
                <!-- End Begin Nested Slider -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Parent Slide 2 -->

      <!-- Parent Slide 3 -->
      <div class="hooper-slide-items hooper-slide-3">
        <div
          class="set-offset-slide d-flex f-columne"
          data-set="offset"
          data-offset="top bottom"
        >
          <div
            class="nested-container-offset f-fill d-flex"
            data-offset="setLeftOffset"
          >
            <div class="slide-offset-container d-flex">
              <div class="slide-offset-left d-flex f-column">
                <h1 class="title-40">
                  <span>{{ $t('Лучшие') }}</span> {{ $t('Карты') }}
                </h1>

                <p>
                  {{
                    $t(
                      'Покупайте товары и оплачивайте услуги в торговых точках по всему миру. Снимайте наличные средства в банкоматах и кассах филиалов банка.'
                    )
                  }}
                </p>

                <nuxt-link :to="localePath('/')" class="button-arrow">
                  <span>{{ $t('Смотреть все') }}</span>
                  <img src="/img/svg/arrow-right.png" alt />
                </nuxt-link>

                <!-- Nested Slide Arrows -->
                <div class="nested-slide-arrow-slot arrow-slot-relative">
                  <div class="container">
                    <div class="arrow-slot-container d-flex">
                      <div
                        class="custom-arrow-slot arrow-slot--left child-center"
                        @click="nestedSecondPrevSlide"
                      >
                        <img src="/img/svg/arrow-left.png" alt />
                      </div>

                      <div
                        class="custom-arrow-slot arrow-slot--right child-center"
                        @click="nestedSecondNextSlide"
                      >
                        <img src="/img/svg/arrow-right.png" alt />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End Nested Slide Arrows -->
              </div>
              <div class="hooper-nested-container">
                <!-- Begin Nested Slider -->
                <VueSlickCarousel
                  ref="nestedCarouselSecond"
                  v-bind="nestedSettings"
                  class="hooper-var-width"
                  v-if="cards.length != 0"
                >
                  <!-- Nested Slide 1 -->
                  <nuxt-link
                    :to="localePath('/cards/' + item.id)"
                    tag="div"
                    class="var-width-items pointer"
                    v-for="item in cards"
                    :key="item.id"
                  >
                    <div
                      class="card-items rounded transition d-flex f-column h-100"
                      @mouseover="hover_card = item.id"
                      @mouseleave="hover_card = 0"
                      :class="{
                        'card-active': item.id == hover_card || mobile_view,
                      }"
                    >
                      <div
                        class="card-items__header card-header-animate mb-auto items-center"
                      >
                        <h1 class="text-left">
                          {{ item.name }}
                          <br />({{ item.type }})
                        </h1>
                      </div>

                      <div class="card-hidden-content">
                        <div class="hidden-content-items d-flex">
                          <div class="hidden-content-left">
                            <img
                              src="~static/img/slide-images/card-icon-1.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <span
                              >{{
                                $t('Банковские услуги по открытию карты')
                              }}:</span
                            >
                            <b>{{ item.cost }}</b>
                          </div>
                        </div>
                        <div class="hidden-content-items d-flex">
                          <div class="hidden-content-left">
                            <img
                              src="~static/img/slide-images/card-icon-2.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <span>{{ $t('Срок действия') }}:</span>
                            <b>{{ item.validity }}</b>
                          </div>
                        </div>
                        <div class="hidden-content-items d-flex">
                          <div class="hidden-content-left">
                            <img
                              src="~static/img/slide-images/card-icon-3.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <span>{{ $t('Необходимые документы') }}:</span>
                            <b>{{ item.required_documents }}</b>
                          </div>
                        </div>
                      </div>

                      <div class="card-items-img d-flex p-relative f-center">
                        <img
                          :src="item.image"
                          class="card-back d-block p-absolute"
                          alt
                        />
                        <img
                          :src="item.cover_image"
                          class="card-front d-block p-relative"
                          alt
                        />
                      </div>
                    </div>
                  </nuxt-link>
                  <!-- End Nested Slide 1 -->
                  <!-- Nested Slide 2 -->
                  <div v-if="cards.length == 0">
                    <h3></h3>
                  </div>
                  <template #prevArrow="arrowOption">
                    <div class="custom-fraction-slot fraction-offset-slot">
                      <div class="container">
                        <div class="slot-text">
                          {{ arrowOption.currentSlide + 1 }}
                          <span>/</span>
                          {{ arrowOption.slideCount }}
                        </div>
                      </div>
                    </div>
                  </template>
                </VueSlickCarousel>
                <!-- End Begin Nested Slider -->
                <!-- <div class="background-overlay"></div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Parent Slide 3 -->

      <!-- Parent Slide 4 -->
      <div class="hooper-slide-items header-white hooper-slide-4">
        <div class="slide-no-space h-100">
          <div class="no-space-header">
            <img
              class="img-line-2 img-cover p-absolute"
              src="/img/svg/line-2.png"
              alt
            />
            <div class="content-overlay-1 p-absolute w-100"></div>
            <div class="content-overlay-2 p-absolute w-100 h-100"></div>
            <div class="content-overlay-3 p-absolute w-100 h-100"></div>

            <div class="container p-relative" style="z-index: 1;">
              <div class="row">
                <div class="col-xl-4" v-for="news in main_news" :key="news.id">
                  <p>
                    <span>{{ news.name }}</span>
                    <nuxt-link
                      :to="localePath(`/news/${news.id}`)"
                      class="d-block text-white"
                    >
                      {{ $t('Подробнее') }}
                    </nuxt-link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="no-space-body">
            <div
              class="news-offset-wrap pt-60 pb-60"
              data-offset="setLeftOffset"
            >
              <h1 class="title-50">{{ $t('Новости') }}</h1>
              <div
                class="tabs card-tab-navigation tab-navigation--credit no-tab-border d-flex"
              >
                <a
                  v-for="item in news_categories"
                  :key="item.id"
                  @click="activetab = item.id"
                  class="tab-items p-relative pointer"
                  :class="[activetab === item.id ? 'active' : '']"
                >
                  {{ item.name }}
                </a>
              </div>

              <div class="content">
                <div
                  v-for="item in news_categories"
                  :key="item.id"
                  class="tabcontent"
                >
                  <div
                    class="slide-first-content p-relative"
                    v-if="activetab === item.id"
                  >
                    <div class="nested-hooper-arrow d-none">
                      <div class="container">
                        <div class="arrow-slot-container d-flex">
                          <div
                            class="custom-arrow-slot arrow-slot--left child-center"
                            @click.prevent="newsPrev"
                          >
                            <img src="/img/svg/arrow-left.png" alt />
                          </div>

                          <div
                            class="custom-arrow-slot arrow-slot--right child-center"
                            @click.prevent="newsNext"
                          >
                            <img src="/img/svg/arrow-right.png" alt />
                          </div>
                        </div>
                      </div>
                    </div>

                    <hooper
                      class="nested-hooper orphan-hooper-1"
                      ref="hooperNested"
                      :settings="newsHooper"
                    >
                      <slide v-for="news in item.news" :key="news.id">
                        <nuxt-link
                          :to="localePath(`/news/${news.id}`)"
                          class="news-items-2 orphan-news-2 transition rounded d-block p-relative"
                        >
                          <div class="card-background p-absolute w-100 h-100">
                            <img
                              :src="news.image"
                              class="img-cover d-block"
                              alt
                            />
                            <div
                              class="card-background__overlay p-absolute w-100 h-100"
                            ></div>
                          </div>
                          <div class="embed-news">
                            <div class="embed-news__date d-flex align-center">
                              <img src="/img/svg/calendar.png" alt />
                              <span>{{ news.created_at }}</span>
                            </div>

                            <h1>
                              {{ news.name }}
                            </h1>

                            <p
                              :class="
                                news.description.length > 150
                                  ? 'text-row-truncate'
                                  : ''
                              "
                              class="mb-0"
                            >
                              {{ news.description.slice(0, 150) }}
                            </p>
                          </div>
                        </nuxt-link>
                      </slide>
                    </hooper>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Parent Slide 4 -->

      <!-- Parent Slide 5 -->
      <div class="hooper-slide-items header-white hooper-slide-5">
        <div class="slide-no-space h-100">
          <div
            class="service-slide-wrap p-relative h-100"
            data-set="offset"
            data-offset="bottom"
          >
            <div class="content-overlay-4 p-absolute w-100"></div>
            <img
              class="service-full-img p-absolute img-cover"
              src="/img/slide-images/slide-img-3.png"
              alt
            />
            <div class="content-overlay-5 p-absolute w-100 h-100"></div>
            <div class="content-overlay-6 p-absolute w-100 h-100"></div>

            <div
              class="service-slide-content p-relative text-white d-flex h-100"
              data-set="offset"
              data-offset="top"
            >
              <div class="pt-60 pb-60 w-100">
                <div class="container h-100">
                  <div class="d-flex f-column h-100">
                    <div class="service-title d-flex align-center">
                      <h1 class="title-50 w-100">
                        {{ $t('Сервисы QQB Mobile') }}
                      </h1>

                      <!-- Nested Slide Arrows -->
                      <div class="nested-slide-arrow-slot arrow-slot-relative">
                        <div class="arrow-slot-container d-flex">
                          <div
                            class="custom-arrow-slot arrow-slot--left child-center"
                            @click.prevent="servicePrev"
                          >
                            <img src="/img/svg/white-left-arrow.png" alt />
                          </div>

                          <div
                            class="custom-arrow-slot arrow-slot--right child-center"
                            @click.prevent="serviceNext"
                          >
                            <img src="/img/svg/white-right-arrow.png" alt />
                          </div>
                        </div>
                      </div>
                      <!-- End Nested Slide Arrows -->
                    </div>

                    <div class="service-slice-slide f-fill">
                      <hooper
                        ref="serviceHooper"
                        :wheelControl="false"
                        :touchDrag="false"
                        class="service-hooper h-100"
                      >
                        <slide>
                          <div
                            class="card-tab-navigation tab-navigation--credit"
                          >
                            <div class="card-tab-header tab-header">
                              <div class="d-flex">
                                <div
                                  class="tab-items p-relative pointer active"
                                  data-toggle="tab"
                                >
                                  <span>{{ $t('Мобильное приложение') }}</span>
                                </div>
                                <div
                                  class="tab-items p-relative pointer"
                                  data-toggle="tab"
                                  v-if="false"
                                >
                                  <span>Ипотека от 6,5%</span>
                                </div>
                              </div>
                            </div>

                            <div class="card-tab-content" data-tab="content">
                              <div role="tabpanel">
                                <div class="mobil-app-content p-absolute w-100">
                                  <div class="icon-1 child-center">
                                    <img src="/img/svg/24h.png" alt />
                                  </div>

                                  <h1>{{ $t('Мобильное приложение') }}</h1>

                                  <div class="d-flex align-center f-between">
                                    <div class="f-fill">
                                      <p>
                                        {{
                                          $t(
                                            'Управляйте своими финансами с мобильным приложением Банка QQB'
                                          )
                                        }}
                                      </p>
                                    </div>

                                    <div class="app-images d-flex">
                                      <a
                                        href="https://apps.apple.com/uz/app/qqb-mobile/id1368479325"
                                        class="d-block"
                                      >
                                        <img
                                          class="d-block"
                                          src="/img/svg/app-store.png"
                                          alt
                                        />
                                      </a>
                                      <a
                                        href="https://play.google.com/store/apps/details?id=uz.fido_biznes.mobile.client.qqb"
                                        class="d-block"
                                      >
                                        <img
                                          class="d-block"
                                          src="/img/svg/google-play.png"
                                          alt
                                        />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div role="tabpanel">1234aaa</div>
                            </div>
                          </div>
                        </slide>
                        <slide>slide 2</slide>
                        <slide>slide 3</slide>
                      </hooper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Parent Slide 5 -->

      <!-- Parent Slide 6 -->
      <div class="hooper-slide-items header-white hooper-slide-6">
        <div class="slide-no-space h-100">
          <TheFooter />
        </div>
      </div>
      <!-- End Parent Slide 6 -->
    </div>
  </div>
</template>

<script>
import { Hooper, Slide } from 'hooper'
import 'hooper/dist/hooper.css'

import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

import TheFooter from '~/components/layout/Footer'

import {
  setOffset,
  getLeftSideClientRect,
  tabNavigation,
} from '@/utils/frontend'

export default {
  props: {
    slider: {
      type: Object,
      default() {
        return { slides: [] }
      },
    },
    cards: {
      type: Array,
      default() {
        return []
      },
    },
    popular_products: {
      type: Object,
      default() {
        return { slides: [] }
      },
    },
    news_categories: {
      type: Array,
      default() {
        return []
      },
    },
    main_news: {
      type: Array,
      default() {
        return []
      },
    },
  },
  watch: {
    news_categories(new_val) {
      if (new_val.length > 0) {
        this.activetab = new_val[0].id
      }
    },
  },
  data() {
    return {
      value: 0,
      activetab: 1,
      hover_card: 0,
      mobile_view: false,
      optionsRangeSlider: {
        dotSize: [9, 17],
        tooltip: 'none',
        height: 1,
      },
      parentHooper: {
        transition: 1000,
        mouseDrag: false,
        touchDrag: false,
        vertical: true,
        itemsToShow: 1,
      },
      settings: {
        draggable: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
      newsHooper: {
        draggable: true,
        infiniteScroll: true,
        wheelControl: true,
        mouseDrag: true,
        breakpoints: {
          1370: {
            itemsToShow: 3.5,
          },
          1023: {
            itemsToShow: 2.5,
          },
          768: {
            itemsToShow: 2,
          },
        },
      },
      nestedSettings: {
        speed: 500,
        draggable: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1370,
            settings: {
              slidesToShow: 2.35,
              variableWidth: false,
            },
          },
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 1.5,
              variableWidth: false,
            },
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 1,
              variableWidth: false,
            },
          },
        ],
      },
    }
  },
  components: {
    Hooper,
    Slide,
    VueSlickCarousel,
    TheFooter,
  },
  mounted() {
    setOffset()
    getLeftSideClientRect()
    tabNavigation()

    setTimeout(() => {
      document.querySelector('.hooper-container').classList.add('scrolled')
    }, 2000)

    const $bodyWidth = document.querySelector('body').clientWidth

    if ($bodyWidth <= 1025) {
      this.mobile_view = true
    }
  },
  methods: {
    newsPrev() {
      this.$refs.serviceHooper.slidePrev()
    },
    newsNext() {
      this.$refs.serviceHooper.slideNext()
    },
    servicePrev() {
      this.$refs.serviceHooper.slidePrev()
    },
    serviceNext() {
      this.$refs.serviceHooper.slideNext()
    },
    nextSlide() {
      this.$refs.carousel.next()
    },
    prevSlide() {
      this.$refs.carousel.prev()
    },
    nestedFirstPrevSlide() {
      this.$refs.nestedCarouselFirst.prev()
    },
    nestedFirstNextSlide() {
      this.$refs.nestedCarouselFirst.next()
    },
    nestedSecondPrevSlide() {
      this.$refs.nestedCarouselSecond.prev()
    },
    nestedSecondNextSlide() {
      this.$refs.nestedCarouselSecond.next()
    },
    // slideWheel() {
    //   const $parent = this.$refs.hooperCarousel
    //   const $current = $parent.$children[$parent.currentSlide]
    //   const $body = document.querySelector('body')

    //   if ($current.$el.classList.contains('header-white')) {
    //     $body.classList.add('dark-side')
    //   } else {
    //     $body.classList.remove('dark-side')
    //   }
    // },
  },
}
</script>
