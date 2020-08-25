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
          <div class="carousel-tab-items" data-items="tabContent">
            <div class="row">
              <div class="col-xl-6">
                <div class="bank-year-text">
                  <p>1994</p>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="bank-year-meta">
                  <div class="bank-year-descr">
                    <p>
                      <b>1994 год</b> - Согласно постановления Кабинета
                      Министров Узбекистана от 20.06.94 г. за № 311 был основан
                      Республиканский специализированный акционерно -
                      коммерческий «Галлабанк» с уставным капиталом 8,0 млн.
                      сум, 2 августа этого же года Центральным банком РУз была
                      выдана лицензия № 45.
                    </p>
                  </div>

                  <div class="line-horizontal"></div>

                  <div class="bank-year-sub">
                    <p>
                      В ноябре была получена от ЦБ лицензия № 20, дающая право
                      на проведение операций в иностранной валюте. Было открыто
                      12 филиалов, численность сотрудников составила 160
                      человек.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-tab-items" data-items="tabContent">
            <div class="row">
              <div class="col-xl-6">
                <div class="bank-year-text">
                  <p>1995</p>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="bank-year-meta">
                  <div class="bank-year-descr">
                    <p>
                      <b>1995 год</b> - Согласно постановления Кабинета
                      Министров Узбекистана от 20.06.94 г. за № 311 был основан
                      Республиканский специализированный акционерно -
                      коммерческий «Галлабанк» с уставным капиталом 8,0 млн.
                      сум, 2 августа этого же года Центральным банком РУз была
                      выдана лицензия № 45.
                    </p>
                  </div>

                  <div class="line-horizontal"></div>

                  <div class="bank-year-sub">
                    <p>
                      В ноябре была получена от ЦБ лицензия № 20, дающая право
                      на проведение операций в иностранной валюте. Было открыто
                      12 филиалов, численность сотрудников составила 160
                      человек.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-tab-items" data-items="tabContent">
            <div class="row">
              <div class="col-xl-6">
                <div class="bank-year-text">
                  <p>1996</p>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="bank-year-meta">
                  <div class="bank-year-descr">
                    <p>
                      <b>1996 год</b> - Согласно постановления Кабинета
                      Министров Узбекистана от 20.06.94 г. за № 311 был основан
                      Республиканский специализированный акционерно -
                      коммерческий «Галлабанк» с уставным капиталом 8,0 млн.
                      сум, 2 августа этого же года Центральным банком РУз была
                      выдана лицензия № 45.
                    </p>
                  </div>

                  <div class="line-horizontal"></div>

                  <div class="bank-year-sub">
                    <p>
                      В ноябре была получена от ЦБ лицензия № 20, дающая право
                      на проведение операций в иностранной валюте. Было открыто
                      12 филиалов, численность сотрудников составила 160
                      человек.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-tab-items" data-items="tabContent">1997</div>
          <div class="carousel-tab-items" data-items="tabContent">1998</div>
          <div class="carousel-tab-items" data-items="tabContent">1999</div>
          <div class="carousel-tab-items" data-items="tabContent">2000</div>
          <div class="carousel-tab-items" data-items="tabContent">2001</div>
          <div class="carousel-tab-items" data-items="tabContent">2002</div>
          <div class="carousel-tab-items" data-items="tabContent">2003</div>
          <div class="carousel-tab-items" data-items="tabContent">2004</div>
          <div class="carousel-tab-items" data-items="tabContent">2005</div>
          <div class="carousel-tab-items" data-items="tabContent">2006</div>
          <div class="carousel-tab-items" data-items="tabContent">2007</div>
          <div class="carousel-tab-items" data-items="tabContent">2008</div>
          <div class="carousel-tab-items" data-items="tabContent">2009</div>
          <div class="carousel-tab-items" data-items="tabContent">2010</div>
          <div class="carousel-tab-items" data-items="tabContent">2011</div>
          <div class="carousel-tab-items" data-items="tabContent">2012</div>
          <div class="carousel-tab-items" data-items="tabContent">2013</div>
        </div>
      </div>
    </div>

    <div class="slick--wrapper p-fixed w-100">
      <div class="container p-relative">
        <VueSlickCarousel
          v-bind="settings"
          ref="carousel"
          :slidesToShow="17"
          :focusOnSelect="true"
          :draggable="false"
          :speed="700"
        >
          <div class="slick--items" data-id="0" data-items="slick">
            <h3>1994</h3>
          </div>
          <div class="slick--items" data-id="1" data-items="slick">
            <h3>1995</h3>
          </div>
          <div class="slick--items" data-id="2" data-items="slick">
            <h3>1996</h3>
          </div>
          <div class="slick--items" data-id="3" data-items="slick">
            <h3>1997</h3>
          </div>
          <div class="slick--items" data-id="4" data-items="slick">
            <h3>1998</h3>
          </div>
          <div class="slick--items" data-id="5" data-items="slick">
            <h3>1999</h3>
          </div>
          <div class="slick--items" data-id="6" data-items="slick">
            <h3>2000</h3>
          </div>
          <div class="slick--items" data-id="7" data-items="slick">
            <h3>2001</h3>
          </div>
          <div class="slick--items" data-id="8" data-items="slick">
            <h3>2002</h3>
          </div>
          <div class="slick--items" data-id="9" data-items="slick">
            <h3>2003</h3>
          </div>
          <div class="slick--items" data-id="10" data-items="slick">
            <h3>2004</h3>
          </div>
          <div class="slick--items" data-id="11" data-items="slick">
            <h3>2005</h3>
          </div>
          <div class="slick--items" data-id="12" data-items="slick">
            <h3>2006</h3>
          </div>
          <div class="slick--items" data-id="13" data-items="slick">
            <h3>2007</h3>
          </div>
          <div class="slick--items" data-id="14" data-items="slick">
            <h3>2008</h3>
          </div>
          <div class="slick--items" data-id="15" data-items="slick">
            <h3>2009</h3>
          </div>
          <div class="slick--items" data-id="16" data-items="slick">
            <h3>2010</h3>
          </div>
          <div class="slick--items" data-id="17" data-items="slick">
            <h3>2011</h3>
          </div>
          <div class="slick--items" data-id="18" data-items="slick">
            <h3>2012</h3>
          </div>
          <div class="slick--items" data-id="19" data-items="slick">
            <h3>2013</h3>
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
import { setOffset, tabCarousel } from '~/utils/frontend'
import VueSlickCarousel from 'vue-slick-carousel'
// optional style for arrows & dots
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
    }
  },
  components: { VueSlickCarousel },
  mounted() {
    setOffset()
    tabCarousel()
  },
  methods: {
    showPrevItem() {
      this.$refs.carousel.prev()
      this.setCurrentSlide()
    },

    showNextItem() {
      this.$refs.carousel.next()
      this.setCurrentSlide()
    },

    setCurrentSlide() {
      const $contentItems = document.querySelectorAll(
        '[data-items="tabContent"]'
      )

      setTimeout(() => {
        const $currentItem = document.querySelector(
          '.slick-current .slick--items'
        )
        const id = $currentItem.dataset.id

        $contentItems.forEach((el) => {
          el.classList.remove('active')
        })

        $contentItems[+id].classList.add('active')
      }, 0)
    },
  },
}
</script>

<style></style>
