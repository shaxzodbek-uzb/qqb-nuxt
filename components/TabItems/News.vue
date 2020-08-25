<template>
  <div class="news-tab-content">
    <div class="row">
      <div class="col-xl-4">
        <div class="news-left">
          <div class="news-search p-relative">
            <input type="text" class="d-block w-100 h-100" />
            <span class="input-placeholder p-absolute transition">Поиск</span>
            <img src="~/static/img/svg/search.png" class="p-absolute" alt />
          </div>

          <div class="news-items-wrap">
            <router-link to="news/show" class="news-items d-block">
              <div class="news-items__date d-flex align-center">
                <img src="~/static/img/svg/calendar.png" alt />
                <span>23.01.2020</span>
              </div>

              <h1>
                Новая акция от Кишлок курилиш банк: "Оламшумул"
              </h1>

              <p>
                Акционерный коммерческий банк «Qishloq Qurilish Bank» объявляет
                акцию «Olamshumul»
              </p>
            </router-link>

            <div class="line-horizontal"></div>
          </div>

          <div class="news-items-wrap">
            <router-link :to="{ name: 'NewsShow' }" class="news-items d-block">
              <div class="news-items__date d-flex align-center">
                <img src="~/static/img/svg/calendar.png" alt />
                <span>23.01.2020</span>
              </div>

              <h1>
                Новая акция от Кишлок курилиш банк: "Оламшумул"
              </h1>

              <p>
                Акционерный коммерческий банк «Qishloq Qurilish Bank» объявляет
                акцию «Olamshumul»
              </p>
            </router-link>

            <div class="line-horizontal"></div>
          </div>

          <div class="news-items-wrap">
            <router-link :to="{ name: 'NewsShow' }" class="news-items d-block">
              <div class="news-items__date d-flex align-center">
                <img src="~/static/img/svg/calendar.png" alt />
                <span>23.01.2020</span>
              </div>

              <h1>
                Новая акция от Кишлок курилиш банк: "Оламшумул"
              </h1>

              <p>
                Акционерный коммерческий банк «Qishloq Qurilish Bank» объявляет
                акцию «Olamshumul»
              </p>
            </router-link>

            <div class="line-horizontal"></div>
          </div>

          <div class="news-items-wrap">
            <router-link :to="{ name: 'NewsShow' }" class="news-items d-block">
              <div class="news-items__date d-flex align-center">
                <img src="~/static/img/svg/calendar.png" alt />
                <span>23.01.2020</span>
              </div>

              <h1>
                Новая акция от Кишлок курилиш банк: "Оламшумул"
              </h1>

              <p>
                Акционерный коммерческий банк «Qishloq Qurilish Bank» объявляет
                акцию «Olamshumul»
              </p>
            </router-link>

            <div class="line-horizontal"></div>
          </div>

          <div class="content-load" style="margin-bottom: 30px;">
            <button
              type="button"
              class="d-block w-100 rounded pointer transition"
            >
              Загрузить еще
            </button>
          </div>
        </div>
      </div>
      <div class="col-xl-8">
        <div class="news-right">
          <div
            class="news-left-embed p-relative rounded pointer"
            @click="show = !show"
          >
            <img
              src="~/static/img/img-15.png"
              class="p-absolute img-cover d-block"
              alt
            />

            <div class="embed-news p-absolute text-white">
              <div class="embed-news__date d-flex align-center">
                <img src="~/static/img/svg/calendar-2.png" alt />
                <span>23.01.2020</span>
              </div>

              <h1>
                Новая акция от Кишлок курилиш банк: "Оламшумул"
              </h1>

              <p>
                Акционерный коммерческий банк «Qishloq Qurilish Bank» объявляет
                акцию «Olamshumul»
              </p>
            </div>

            <div class="embed-overlay p-absolute w-100 h-100 child-center">
              <div class="embed-play p-relative child-center transition"></div>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6">
              <router-link
                :to="{ name: 'NewsShow' }"
                class="news-items-2 transition rounded d-block"
              >
                <div class="embed-news">
                  <div class="embed-news__date d-flex align-center">
                    <img src="~/static/img/svg/calendar.png" alt />
                    <span>23.01.2020</span>
                  </div>

                  <h1>
                    Новая акция от Кишлок курилиш банк: "Оламшумул"
                  </h1>

                  <p>
                    Акционерный коммерческий банк «Qishloq Qurilish Bank»
                    объявляет акцию «Olamshumul»
                  </p>
                </div>
              </router-link>
            </div>
            <div class="col-xl-6">
              <router-link
                :to="{ name: 'NewsShow' }"
                class="news-items-2 transition rounded d-block"
              >
                <div class="embed-news">
                  <div class="embed-news__date d-flex align-center">
                    <img src="~/static/img/svg/calendar.png" alt />
                    <span>23.01.2020</span>
                  </div>

                  <h1>
                    Новая акция от Кишлок курилиш банк: "Оламшумул"
                  </h1>

                  <p>
                    Акционерный коммерческий банк «Qishloq Qurilish Bank»
                    объявляет акцию «Olamshumul»
                  </p>
                </div>
              </router-link>
            </div>
            <div class="col-xl-6">
              <router-link
                :to="{ name: 'NewsShow' }"
                class="news-items-2 transition rounded d-block"
              >
                <div class="embed-news">
                  <div class="embed-news__date d-flex align-center">
                    <img src="~/static/img/svg/calendar.png" alt />
                    <span>23.01.2020</span>
                  </div>

                  <h1>
                    Новая акция от Кишлок курилиш банк: "Оламшумул"
                  </h1>

                  <p>
                    Акционерный коммерческий банк «Qishloq Qurilish Bank»
                    объявляет акцию «Olamshumul»
                  </p>
                </div>
              </router-link>
            </div>
            <div class="col-xl-6">
              <router-link
                :to="{ name: 'NewsShow' }"
                class="news-items-2 transition rounded d-block"
              >
                <div class="embed-news">
                  <div class="embed-news__date d-flex align-center">
                    <img src="~/static/img/svg/calendar.png" alt />
                    <span>23.01.2020</span>
                  </div>

                  <h1>
                    Новая акция от Кишлок курилиш банк: "Оламшумул"
                  </h1>

                  <p>
                    Акционерный коммерческий банк «Qishloq Qurilish Bank»
                    объявляет акцию «Olamshumul»
                  </p>
                </div>
              </router-link>
            </div>

            <div class="col-xl-6">
              <router-link
                :to="{ name: 'NewsShow' }"
                class="news-items-2 transition rounded d-block"
              >
                <div class="embed-news">
                  <div class="embed-news__date d-flex align-center">
                    <img src="~/static/img/svg/calendar.png" alt />
                    <span>23.01.2020</span>
                  </div>

                  <h1>
                    Новая акция от Кишлок курилиш банк: "Оламшумул"
                  </h1>

                  <p>
                    Акционерный коммерческий банк «Qishloq Qurilish Bank»
                    объявляет акцию «Olamshumul»
                  </p>
                </div>
              </router-link>
            </div>

            <div class="col-xl-6">
              <router-link
                to="/"
                class="news-banner-wrap transition rounded d-block"
              >
                <div class="news-banner h-100">
                  <img
                    class="d-block img-cover"
                    src="~/static/img/banner/banner-2.png"
                    alt
                  />
                </div>
              </router-link>
            </div>

            <div class="col-xl-12">
              <div class="content-load" style="margin: 30px 0;">
                <button
                  type="button"
                  class="d-block w-100 rounded pointer transition"
                >
                  Загрузить еще
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="modal-wrap p-fixed w-100 h-100 child-center" v-if="show">
        <div
          class="modal-overlay p-fixed w-100 h-100"
          @click="show = false"
        ></div>
        <div class="modal-container rounded w-100 p-relative">
          <div class="modal-container-ratio">
            <iframe
              src="https://www.youtube.com/embed/EoViluTzLKA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              class="w-100 h-100"
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style></style>
