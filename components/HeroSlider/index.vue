<template>
  <div class="swipe-container">
    <!-- :wheelControl="false" -->
    <hooper
      @slide="slideWheel"
      v-bind="parentHooper"
      ref="hooperCarousel"
      class="hooper-container vh-100"
    >
      <!-- Parent Slide 1 -->
      <slide class="hooper-slide-items hooper-slide-1">
        <div
          class="set-offset-slide d-flex f-column"
          data-set="offset"
          data-offset="top bottom"
        >
          <div class="hooper-nested-container f-fill">
            <!-- Begin Nested Slider -->
            <VueSlickCarousel v-bind="settings" ref="carousel">
              <!-- Nested Slide 1 -->
              <div class="nested-slide-items p-relative d-flex align-center">
                <img
                  class="slide-full-banner p-absolute img-cover"
                  src="/img/slide-images/slide-img-1.jpg"
                  alt
                />

                <div class="container">
                  <div class="nested-slide-text p-relative">
                    <h1 class="title-60">Кредиты для физических лиц</h1>

                    <p>Ипотечные кредиты по ИПСМ</p>

                    <nuxt-link
                      to="/"
                      class="btn btn-border rounded pointer transition"
                      >Подробнее</nuxt-link
                    >
                  </div>
                </div>
              </div>
              <!-- End Nested Slide 1 -->

              <!-- Nested Slide 2 -->
              <div>
                <h3>234</h3>
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
                  <span>Кредиты</span>
                  <h1>от 7.75%</h1>
                </div>
                <div class="app-exchange-cell">
                  <span>Ипотека</span>
                  <h1>от 4%</h1>
                </div>
                <div class="app-exchange-cell">
                  <span>Вклады</span>
                  <h1>от 10.25%</h1>
                </div>
                <div class="app-exchange-cell">
                  <span>Карты с CashBack</span>
                  <h1>от 10%</h1>
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
      </slide>
      <!-- End Parent Slide 1 -->

      <!-- Parent Slide 2 -->
      <slide class="hooper-slide-items hooper-slide-2">
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
                <h1 class="title-40"><span>Популярные</span> Продукты</h1>

                <p>
                  Покупайте товары и оплачивайте услуги в торговых точках по
                  всему миру. Снимайте наличные средства в банкоматах и кассах
                  филиалов банка.
                </p>

                <nuxt-link to="/" class="button-arrow">
                  <span>Смотреть все</span>
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
                >
                  <!-- Nested Slide 1 -->
                  <div class="var-width-items">
                    <nuxt-link
                      :to="{ to: 'CardsShow' }"
                      class="card-items rounded transition d-flex f-column align-center h-100"
                    >
                      <div class="card-items__header">
                        <h1>COVID-19: программы помощи QQB</h1>

                        <div class="orphan-space-1">
                          <p>
                            QQB - поддерживает партнеров и оказывает помощь
                            медицинским учреждениям, волонтерским и
                            некоммерческим организациям.
                          </p>
                        </div>
                      </div>
                      <div
                        class="fake-route-button-1 rounded pointer transition"
                      >
                        <span>Подробнее</span>
                      </div>
                      <img
                        class="card-bottom-img p-absolute"
                        src="/img/slide-images/covid-img.png"
                        alt
                      />
                    </nuxt-link>
                  </div>
                  <!-- End Nested Slide 1 -->

                  <!-- Nested Slide 2 -->
                  <div class="var-width-items">
                    <nuxt-link
                      :to="{ to: 'CardsShow' }"
                      class="card-items rounded transition d-flex f-column align-center h-100"
                    >
                      <img
                        class="card-background-1 img-cover p-absolute"
                        src="/img/slide-images/card-img.png"
                        alt
                      />

                      <h2>Филиалы и Банкоматы</h2>

                      <img class="mt-auto mb-auto" src="/img/logo-2.png" alt />

                      <div
                        class="fake-route-button-2 rounded pointer transition"
                      >
                        <span>Подробнее</span>
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- End Nested Slide 2 -->

                  <!-- Nested Slide 3 -->
                  <div class="var-width-items">
                    <div
                      class="card-items rounded transition d-flex f-column align-center h-100"
                    >
                      <div class="card-items__top">
                        <div class="card-items__header">
                          <h1>Рассчитайте доходность вклада</h1>

                          <div class="card-top-text">
                            <p>До 22% годовых с Мультикартой QQB</p>
                            <p>Проценты начисляются на ежедневный остаток</p>
                            <p>
                              Снятие и пополнение — без ограничений и без потери
                              %
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="card-items__body w-100">
                        <div class="form-group">
                          <span>Сумма вклада</span>

                          <div class="form-group-range">
                            <p>{{ value }} UZS</p>
                            <vue-slider
                              v-model="value"
                              v-bind="optionsRangeSlider"
                            ></vue-slider>
                          </div>

                          <div class="form-range-field d-flex f-between">
                            <span>200 000 сум.</span>
                            <span>100 000 000 сум.</span>
                          </div>
                        </div>

                        <div class="orphan-space-3">
                          <div
                            class="fake-route-button-3 rounded pointer transition"
                          >
                            <span>Открыть вклад</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Nested Slide 3 -->

                  <!-- Nested Slide 4 -->
                  <div class="var-width-items">
                    <nuxt-link
                      :to="{ to: 'CardsShow' }"
                      class="card-items rounded transition d-flex f-column h-100"
                      >dd</nuxt-link
                    >
                  </div>
                  <!-- End Nested Slide 4 -->

                  <!-- Nested Slide 5 -->
                  <div class="var-width-items">
                    <nuxt-link
                      :to="{ to: 'CardsShow' }"
                      class="card-items rounded transition d-flex f-column h-100"
                      >s12</nuxt-link
                    >
                  </div>
                  <!-- End Nested Slide 5 -->

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
      </slide>
      <!-- End Parent Slide 2 -->

      <!-- Parent Slide 3 -->
      <slide class="hooper-slide-items hooper-slide-3">
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
                <h1 class="title-40"><span>Лучшие</span> Карты</h1>

                <p>
                  Покупайте товары и оплачивайте услуги в торговых точках по
                  всему миру. Снимайте наличные средства в банкоматах и кассах
                  филиалов банка.
                </p>

                <nuxt-link to="/" class="button-arrow">
                  <span>Смотреть все</span>
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
                >
                  <!-- Nested Slide 1 -->
                  <div class="var-width-items">
                    <nuxt-link
                      :to="{ to: 'CardsShow' }"
                      class="card-items rounded transition d-flex f-column h-100"
                    >
                      <div class="card-items__header mb-auto">
                        <h1>
                          Kobeydjing
                          <br />(UnionPay)
                        </h1>
                      </div>

                      <div class="card-items-img d-flex p-relative f-center">
                        <img
                          src="/img/slide-images/card-back.png"
                          class="card-back d-block p-absolute"
                          alt
                        />
                        <img
                          src="/img/slide-images/card-front.png"
                          class="card-front d-block p-relative"
                          alt
                        />
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- End Nested Slide 1 -->

                  <!-- Nested Slide 2 -->
                  <div class="var-width-items">
                    <nuxt-link
                      :to="{ to: 'CardsShow' }"
                      class="card-items rounded transition d-flex f-column h-100"
                    >
                      <div class="card-items__header mb-auto">
                        <h1>
                          Kobeydjing
                          <br />(UnionPay)
                        </h1>
                      </div>

                      <div class="card-items-img d-flex p-relative f-center">
                        <img
                          src="/img/slide-images/card-back.png"
                          class="card-back d-block p-absolute"
                          alt
                        />
                        <img
                          src="/img/slide-images/card-front.png"
                          class="card-front d-block p-relative"
                          alt
                        />
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- End Nested Slide 2 -->

                  <!-- Nested Slide 3 -->
                  <div class="var-width-items">
                    <nuxt-link
                      :to="{ to: 'CardsShow' }"
                      class="card-items rounded transition d-flex f-column h-100"
                    >
                      <div class="card-items__header mb-auto">
                        <h1>
                          Kobeydjing
                          <br />(UnionPay)
                        </h1>
                      </div>

                      <div class="card-items-img d-flex p-relative f-center">
                        <img
                          src="/img/slide-images/card-back.png"
                          class="card-back d-block p-absolute"
                          alt
                        />
                        <img
                          src="/img/slide-images/card-front.png"
                          class="card-front d-block p-relative"
                          alt
                        />
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- End Nested Slide 3 -->

                  <!-- Nested Slide 4 -->
                  <div class="var-width-items">
                    <nuxt-link
                      :to="{ to: 'CardsShow' }"
                      class="card-items rounded transition d-flex f-column h-100"
                    >
                      <div class="card-items__header mb-auto">
                        <h1>
                          Kobeydjing
                          <br />(UnionPay)
                        </h1>
                      </div>

                      <div class="card-items-img d-flex p-relative f-center">
                        <img
                          src="/img/slide-images/card-back.png"
                          class="card-back d-block p-absolute"
                          alt
                        />
                        <img
                          src="/img/slide-images/card-front.png"
                          class="card-front d-block p-relative"
                          alt
                        />
                      </div>
                    </nuxt-link>
                  </div>
                  <!-- End Nested Slide 4 -->

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
      </slide>
      <!-- End Parent Slide 3 -->

      <!-- Parent Slide 4 -->
      <slide class="hooper-slide-items header-white hooper-slide-4">
        <div class="slide-no-space h-100">
          <div class="no-space-header" data-set="offset" data-offset="top">
            <img
              class="img-line-2 img-cover p-absolute"
              src="/img/svg/line-2.png"
              alt
            />
            <div class="content-overlay-1 p-absolute w-100"></div>
            <div class="content-overlay-2 p-absolute w-100 h-100"></div>
            <div class="content-overlay-3 p-absolute w-100 h-100"></div>

            <div class="container">
              <div class="row">
                <div class="col-xl-4">
                  <p>
                    Уважаемые клиенты! Обращаем ваше внимание на режим работы
                    дежурных офисов ВТБ с 12 по 14 июня. Подробнее
                  </p>
                </div>
                <div class="col-xl-4">
                  <p>
                    Общероссийское голосование по вопросу одобрения изменений в
                    Конституцию РФ Подробнее
                  </p>
                </div>
                <div class="col-xl-4">
                  <p>
                    Мобильное приложение для iOS и Android со всеми доступными
                    операциями банка
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
              <h1 class="title-50">Новости</h1>

              <div
                class="tabs card-tab-navigation tab-navigation--credit no-tab-border d-flex"
              >
                <a
                  @click="activetab = '1'"
                  class="tab-items p-relative pointer"
                  :class="[activetab === '1' ? 'active' : '']"
                  >Новости</a
                >
                <a
                  @click="activetab = '2'"
                  class="tab-items p-relative pointer"
                  :class="[activetab === '2' ? 'active' : '']"
                  >Мероприятия</a
                >
                <a
                  @click="activetab = '3'"
                  class="tab-items p-relative pointer"
                  :class="[activetab === '3' ? 'active' : '']"
                  >Тендеры</a
                >
                <a
                  @click="activetab = '4'"
                  class="tab-items p-relative pointer"
                  :class="[activetab === '4' ? 'active' : '']"
                  >Почему</a
                >
              </div>

              <div class="content">
                <div v-if="activetab === '1'" class="tabcontent">
                  <div class="slide-first-content p-relative">
                    <div class="nested-hooper-arrow">
                      <div class="container">
                        <div class="arrow-slot-container d-flex">
                          <div
                            class="custom-arrow-slot arrow-slot--left child-center"
                            @click.prevent="slidePrev"
                          >
                            <img src="/img/svg/arrow-left.png" alt />
                          </div>

                          <div
                            class="custom-arrow-slot arrow-slot--right child-center"
                            @click.prevent="slideNext"
                          >
                            <img src="/img/svg/arrow-right.png" alt />
                          </div>
                        </div>
                      </div>
                    </div>
                    <hooper
                      class="nested-hooper"
                      ref="hooperNested"
                      :settings="newsHooper"
                    >
                      <slide>
                        <nuxt-link
                          :to="{ to: 'NewsShow' }"
                          class="news-items-2 transition rounded d-block p-relative"
                        >
                          <div class="card-background p-absolute w-100 h-100">
                            <img
                              src="~/static/img/img-15.png"
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
                              <span>23.01.2020</span>
                            </div>

                            <h1>
                              Новая акция от Кишлок курилиш банк: "Оламшумул"
                            </h1>

                            <p>
                              Акционерный коммерческий банк «Qishloq Qurilish
                              Bank» объявляет акцию «Olamshumul»
                            </p>
                          </div>
                        </nuxt-link>
                      </slide>
                      <slide>
                        <nuxt-link
                          :to="{ to: 'NewsShow' }"
                          class="news-items-2 transition rounded d-block p-relative"
                        >
                          <div class="card-background p-absolute w-100 h-100">
                            <img
                              src="~/static/img/img-15.png"
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
                              <span>23.01.2020</span>
                            </div>

                            <h1>
                              Новая акция от Кишлок курилиш банк: "Оламшумул"
                            </h1>

                            <p>
                              Акционерный коммерческий банк «Qishloq Qurilish
                              Bank» объявляет акцию «Olamshumul»
                            </p>
                          </div>
                        </nuxt-link>
                      </slide>
                      <slide>
                        <nuxt-link
                          :to="{ to: 'NewsShow' }"
                          class="news-items-2 transition rounded d-block p-relative"
                        >
                          <div class="card-background p-absolute w-100 h-100">
                            <img
                              src="~/static/img/img-15.png"
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
                              <span>23.01.2020</span>
                            </div>

                            <h1>
                              Новая акция от Кишлок курилиш банк: "Оламшумул"
                            </h1>

                            <p>
                              Акционерный коммерческий банк «Qishloq Qurilish
                              Bank» объявляет акцию «Olamshumul»
                            </p>
                          </div>
                        </nuxt-link>
                      </slide>
                      <slide>
                        <nuxt-link
                          :to="{ to: 'NewsShow' }"
                          class="news-items-2 transition rounded d-block p-relative"
                        >
                          <div class="card-background p-absolute w-100 h-100">
                            <img
                              src="~/static/img/img-15.png"
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
                              <span>23.01.2020</span>
                            </div>

                            <h1>
                              Новая акция от Кишлок курилиш банк: "Оламшумул"
                            </h1>

                            <p>
                              Акционерный коммерческий банк «Qishloq Qurilish
                              Bank» объявляет акцию «Olamshumul»
                            </p>
                          </div>
                        </nuxt-link>
                      </slide>
                      <slide>
                        <nuxt-link
                          :to="{ to: 'NewsShow' }"
                          class="news-items-2 transition rounded d-block p-relative"
                        >
                          <div class="embed-news">
                            <div class="embed-news__date d-flex align-center">
                              <img src="/img/svg/calendar.png" alt />
                              <span>23.01.2020</span>
                            </div>

                            <h1>
                              Новая акция от Кишлок курилиш банк: "Оламшумул"
                            </h1>

                            <p>
                              Акционерный коммерческий банк «Qishloq Qurilish
                              Bank» объявляет акцию «Olamshumul»
                            </p>
                          </div>
                        </nuxt-link>
                      </slide>
                    </hooper>
                  </div>
                </div>
                <div v-if="activetab === '2'" class="tabcontent">2</div>
                <div v-if="activetab === '3'" class="tabcontent">3</div>
                <div v-if="activetab === '4'" class="tabcontent">4</div>
              </div>

              <!-- <div
                class="card-tab-navigation tab-navigation--credit no-tab-border"
              >
                <div class="card-tab-header">
                  <div class="d-flex">
                    <div
                      class="tab-items p-relative pointer active"
                      data-toggle="tab"
                    >
                      <span>Новости</span>
                    </div>
                    <div class="tab-items p-relative pointer" data-toggle="tab">
                      <span>Мероприятия</span>
                    </div>
                    <div class="tab-items p-relative pointer" data-toggle="tab">
                      <span>Тендеры</span>
                    </div>
                    <div class="tab-items p-relative pointer" data-toggle="tab">
                      <span>Объявления</span>
                    </div>
                    <div class="tab-items p-relative pointer" data-toggle="tab">
                      <span>Почему</span>
                    </div>
                  </div>
                </div>

                <div class="card-tab-content">
                  <div role="tabpanel">
                    <div class="slide-first-content p-relative">
                      <div class="nested-hooper-arrow">
                        <div class="container">
                          <div class="arrow-slot-container d-flex">
                            <div
                              class="custom-arrow-slot arrow-slot--left child-center"
                              @click.prevent="slidePrev"
                            >
                              <img src="/img/svg/arrow-left.png" alt />
                            </div>

                            <div
                              class="custom-arrow-slot arrow-slot--right child-center"
                              @click.prevent="slideNext"
                            >
                              <img src="/img/svg/arrow-right.png" alt />
                            </div>
                          </div>
                        </div>
                      </div>
                      <hooper
                        class="nested-hooper"
                        ref="hooperNested"
                        :settings="newsHooper"
                      >
                        <slide>
                          <nuxt-link
                            :to="{ to: 'NewsShow' }"
                            class="news-items-2 transition rounded d-block"
                          >
                            <div class="embed-news">
                              <div class="embed-news__date d-flex align-center">
                                <img src="/img/svg/calendar.png" alt />
                                <span>23.01.2020</span>
                              </div>

                              <h1>
                                Новая акция от Кишлок курилиш банк: "Оламшумул"
                              </h1>

                              <p>
                                Акционерный коммерческий банк «Qishloq Qurilish
                                Bank» объявляет акцию «Olamshumul»
                              </p>
                            </div>
                          </nuxt-link>
                        </slide>
                        <slide>
                          <nuxt-link
                            :to="{ to: 'NewsShow' }"
                            class="news-items-2 transition rounded d-block"
                          >
                            <div class="embed-news">
                              <div class="embed-news__date d-flex align-center">
                                <img src="/img/svg/calendar.png" alt />
                                <span>23.01.2020</span>
                              </div>

                              <h1>
                                Новая акция от Кишлок курилиш банк: "Оламшумул"
                              </h1>

                              <p>
                                Акционерный коммерческий банк «Qishloq Qurilish
                                Bank» объявляет акцию «Olamshumul»
                              </p>
                            </div>
                          </nuxt-link>
                        </slide>
                        <slide>
                          <nuxt-link
                            :to="{ to: 'NewsShow' }"
                            class="news-items-2 transition rounded d-block"
                          >
                            <div class="embed-news">
                              <div class="embed-news__date d-flex align-center">
                                <img src="/img/svg/calendar.png" alt />
                                <span>23.01.2020</span>
                              </div>

                              <h1>
                                Новая акция от Кишлок курилиш банк: "Оламшумул"
                              </h1>

                              <p>
                                Акционерный коммерческий банк «Qishloq Qurilish
                                Bank» объявляет акцию «Olamshumul»
                              </p>
                            </div>
                          </nuxt-link>
                        </slide>
                        <slide>
                          <nuxt-link
                            :to="{ to: 'NewsShow' }"
                            class="news-items-2 transition rounded d-block"
                          >
                            <div class="embed-news">
                              <div class="embed-news__date d-flex align-center">
                                <img src="/img/svg/calendar.png" alt />
                                <span>23.01.2020</span>
                              </div>

                              <h1>
                                Новая акция от Кишлок курилиш банк: "Оламшумул"
                              </h1>

                              <p>
                                Акционерный коммерческий банк «Qishloq Qurilish
                                Bank» объявляет акцию «Olamshumul»
                              </p>
                            </div>
                          </nuxt-link>
                        </slide>
                        <slide>
                          <nuxt-link
                            :to="{ to: 'NewsShow' }"
                            class="news-items-2 transition rounded d-block"
                          >
                            <div class="embed-news">
                              <div class="embed-news__date d-flex align-center">
                                <img src="/img/svg/calendar.png" alt />
                                <span>23.01.2020</span>
                              </div>

                              <h1>
                                Новая акция от Кишлок курилиш банк: "Оламшумул"
                              </h1>

                              <p>
                                Акционерный коммерческий банк «Qishloq Qurilish
                                Bank» объявляет акцию «Olamshumul»
                              </p>
                            </div>
                          </nuxt-link>
                        </slide>
                      </hooper>
                    </div>
                  </div>
                  <div role="tabpanel">
                    1234aaa
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </div>
      </slide>
      <!-- End Parent Slide 4 -->

      <!-- Parent Slide 5 -->
      <slide class="hooper-slide-items header-white hooper-slide-5">
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
                      <h1 class="title-50 w-100">Сервисы QQB Mobile</h1>

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
                                  <span>Мобильное приложение</span>
                                </div>
                                <div
                                  class="tab-items p-relative pointer"
                                  data-toggle="tab"
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

                                  <h1>Мобильные приложения</h1>

                                  <div class="d-flex align-center f-between">
                                    <div class="f-fill">
                                      <p>
                                        Управляйте своими финансами с
                                        <br />мобильным приложением Банка QQB
                                      </p>
                                    </div>

                                    <div class="app-images d-flex">
                                      <nuxt-link to="/" class="d-block">
                                        <img
                                          class="d-block"
                                          src="/img/svg/app-store.png"
                                          alt
                                        />
                                      </nuxt-link>
                                      <nuxt-link to="/" class="d-block">
                                        <img
                                          class="d-block"
                                          src="/img/svg/google-play.png"
                                          alt
                                        />
                                      </nuxt-link>
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
      </slide>
      <!-- End Parent Slide 5 -->

      <!-- Parent Slide 6 -->
      <slide class="hooper-slide-items header-white hooper-slide-6">
        <div class="slide-no-space h-100">
          <TheFooter />
        </div>
      </slide>
      <!-- End Parent Slide 6 -->
    </hooper>
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
  data() {
    return {
      value: 0,
      activetab: '1',
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
        draggable: false,
        infiniteScroll: true,
        wheelControl: false,
        mouseDrag: false,
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
              slidesToShow: 2.5,
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
  },
  methods: {
    slidePrev() {
      this.$refs.hooperNested.slidePrev()
    },
    slideNext() {
      this.$refs.hooperNested.slideNext()
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
    slideWheel() {
      const $parent = this.$refs.hooperCarousel
      const $current = $parent.$children[$parent.currentSlide]
      const $body = document.querySelector('body')

      if ($current.$el.classList.contains('header-white')) {
        $body.classList.add('dark-side')
      } else {
        $body.classList.remove('dark-side')
      }
    },
  },
}
</script>

<style></style>
