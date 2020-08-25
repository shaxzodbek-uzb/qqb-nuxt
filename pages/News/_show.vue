<template>
  <div class="vacancies-page-show" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="vacancies-show-container pt-60">
        <div class="row">
          <div class="col-xl-6">
            <div class="news-aside d-flex f-column h-100">
              <div class="vacancies-show-left">
                <button
                  type="button"
                  class="router-back d-flex align-center pointer"
                  @click="$router.go(-1)"
                >
                  <img src="~/static/img/svg/arrow-back.png" alt />
                  <span>Новости</span>
                </button>

                <h1>
                  О стратегии реформирования
                  <br />банковской системы Республики <br />Узбекистан на
                  2020-2025 годы
                </h1>

                <div class="news-badge">
                  <img src="~/static/img/svg/calendar.png" alt />
                  <span>23.01.2020</span>
                </div>
              </div>

              <div class="news-social">
                <span>Поделиться новостью в соцсетях:</span>

                <div class="d-flex">
                  <router-link to="/" class="social-items child-center">
                    <img src="~/static/img/svg/fb.png" alt />
                  </router-link>
                  <router-link to="/" class="social-items child-center">
                    <img src="~/static/img/svg/go.png" alt />
                  </router-link>
                  <router-link to="/" class="social-items child-center">
                    <img src="~/static/img/svg/tw.png" alt />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="vacancies-show-right">
              <div class="news-show-meta">
                <p>
                  12 мая 2020 года принят Указ Президента Республики Узбекистан
                  <b
                    >«О стратегии реформирования банковской системы Республики
                    Узбекистан на 2020-2025 годы»</b
                  >.
                </p>
                <p>
                  Указом утверждены Стратегия реформирования банковской системы
                  <a href="#">Республики Узбекистан на 2020-2025 годы</a>,
                  «Дорожная карта» по реформированию банковской системы
                  Республики Узбекистан, а также целевые показатели реализации
                  стратегии.
                </p>
                <p>
                  12 мая 2020 года принят Указ Президента Республики Узбекистан
                  <b
                    >«О стратегии реформирования банковской системы Республики
                    Узбекистан на 2020-2025 годы»</b
                  >.
                </p>

                <div class="news-gallery-wrap d-flex f-wrap">
                  <div class="news-gallery-item p-relative rounded">
                    <img
                      src="~/static/img/img-16.png"
                      class="p-absolute img-cover"
                      alt
                    />
                  </div>
                  <div class="news-gallery-item p-relative rounded">
                    <img
                      src="~/static/img/img-17.png"
                      class="p-absolute img-cover"
                      alt
                    />
                  </div>
                  <div class="news-gallery-item p-relative rounded">
                    <img
                      src="~/static/img/img-16.png"
                      class="p-absolute img-cover"
                      alt
                    />
                  </div>
                  <div class="news-gallery-item p-relative rounded">
                    <img
                      src="~/static/img/img-17.png"
                      class="p-absolute img-cover"
                      alt
                    />
                  </div>
                </div>

                <p>
                  12 мая 2020 года принят Указ Президента Республики Узбекистан
                  <b
                    >«О стратегии реформирования банковской системы Республики
                    Узбекистан на 2020-2025 годы»</b
                  >.
                </p>

                <p>
                  12 мая 2020 года принят Указ Президента Республики Узбекистан
                  <b
                    >«О стратегии реформирования банковской системы Республики
                    Узбекистан на 2020-2025 годы»</b
                  >.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset } from '~/utils/frontend'

export default {
  mounted() {
    setOffset()
  },
}
</script>

<style></style>
