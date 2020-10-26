<template>
  <div class="card-show-wrap" data-set="offset" data-offset="top bottom">
    <div class="card-show-header pt-60">
      <div class="container">
        <div class="show-header-top d-flex f-between">
          <button
            type="button"
            class="router-back pointer"
            @click="$router.go(-1)"
          >
            <img src="~/static/img/svg/arrow-back.png" alt />
            <span>Карты</span>
          </button>

          <div class="card-header-tools d-flex align-center">
            <button
              class="card-print-btn d-flex align-center f-between w-100 rounded pointer"
            >
              <span>Печать</span>
              <img src="~/static/img/svg/print.png" alt />
            </button>

            <a
              href="#"
              class="card-download-btn d-flex align-center f-between w-100 rounded secondary-color"
            >
              <span>Скачать PDF</span>
              <img src="~/static/img/svg/doc.png" alt />
            </a>
          </div>
        </div>
      </div>

      <div class="header-outline-text text-white p-absolute text-truncate">
        <p>visa1 gold</p>
      </div>
    </div>

    <div class="card-show-group p-relative">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 card-cell-1">
            <div class="card-group-left">
              <h1>Visa Gold</h1>
              <p>
                "Кишлок курилиш банк" предоставляет вам уникальную возможность —
                открыть карты премиум-класса VISA Gold в международной платёжной
                системе VISA.
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 card-cell-2">
            <div class="card-group-img p-absolute">
              <img
                src="~/static/img/slide-images/card-group.png"
                class="d-block"
                alt
              />
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 card-cell-3">
            <div class="card-group-right">
              <div class="about-card-text d-flex f-wrap f-between">
                <div class="about-card-cell p-relative">
                  <img
                    class="p-absolute"
                    src="~/static/img/slide-images/card-icon-1.png"
                    alt
                  />
                  <div>
                    <span>Банковские услуги по открытию карты:</span>
                    <p>Бесплатно</p>
                  </div>
                </div>
                <div class="about-card-cell p-relative">
                  <img
                    class="p-absolute"
                    src="~/static/img/slide-images/card-icon-2.png"
                    alt
                  />
                  <div>
                    <span>Срок действия:</span>
                    <p>3 года</p>
                  </div>
                </div>
                <div class="about-card-line"></div>
                <div class="about-card-cell p-relative">
                  <img
                    class="p-absolute"
                    src="~/static/img/slide-images/card-icon-3.png"
                    alt
                  />
                  <div>
                    <span>Необходимые документы:</span>
                    <p>Оригинал паспорта; ИНН; Применение; контракт</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-tab-navigation">
      <div class="card-tab-header">
        <div class="container">
          <div class="d-flex f-center">
            <div class="tab-items p-relative pointer active" data-toggle="tab">
              <span>Карты</span>
            </div>
            <div class="tab-items p-relative pointer" data-toggle="tab">
              <span>Документы</span>
            </div>
            <div class="tab-items p-relative pointer" data-toggle="tab">
              <span>Вопросы и ответы</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-tab-content">
        <div role="tabpanel">
          <Card />
        </div>
        <div role="tabpanel">
          <Document />
        </div>
        <div role="tabpanel">
          <Faq />
        </div>
      </div>

      <div class="container">
        <div class="app-meta d-flex">
          <div
            class="app-breadcrumb-wrap d-flex align-center f-fill text-truncate"
          >
            <router-link to="/" class="d-flex align-center p-relative">
              <img src="~/static/img/svg/home.png" class="d-block" alt />
            </router-link>
            <router-link to="/" class="d-flex align-center p-relative">
              <span>Новости</span>
            </router-link>
            <router-link to="/" class="d-flex align-center p-relative">
              <span>
                О стратегии реформирования банковской системы Республики
                Узбекистан на 2020-2025 годы
              </span>
            </router-link>
          </div>

          <div class="app-meta__download d-flex align-center">
            <p>
              Скачать
              <span>PDF,</span>
              <span>205.77 KB</span>
            </p>
            <div class="app-badge badge-danger">PDF</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VueSlickCarousel from "vue-slick-carousel";
// import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { setOffset, tabNavigation } from '~/utils/frontend'
import Card from '~/components/TabItems/Cards'
import Document from '~/components/TabItems/Document'
import Faq from '~/components/TabItems/Faq'

export default {
  components: {
    Card,
    Document,
    Faq,
  },
  mounted() {
    setOffset()
    tabNavigation()
  },
}
</script>

<style></style>
