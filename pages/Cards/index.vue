<template>
  <div class="cards-wrapper" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="cards-container pt-60">
        <h1 class="title-50">Карты</h1>

        <div class="cards-entry-text">
          <p>
            Покупайте товары и оплачивайте услуги в торговых точках по всему
            миру.
            <br />Снимайте наличные средства в банкоматах и кассах филиалов
            банка.
          </p>
        </div>

        <div class="card-items-container d-flex f-wrap">
          <nuxt-link
            :to="{ to: 'CardsShow' }"
            class="card-items rounded transition d-flex f-column h-100"
          >
            <div class="card-items__header card-header-animate mb-auto">
              <h1>
                Kobeydjing
                <br />(UnionPay)
              </h1>
            </div>

            <div class="card-hidden-content">
              <div class="hidden-content-items d-flex">
                <div class="hidden-content-left">
                  <img src="~static/img/slide-images/card-icon-1.png" alt="" />
                </div>
                <div>
                  <span>Банковские услуги по открытию карты:</span>
                  <b>Бесплатно</b>
                </div>
              </div>
              <div class="hidden-content-items d-flex">
                <div class="hidden-content-left">
                  <img src="~static/img/slide-images/card-icon-2.png" alt="" />
                </div>
                <div>
                  <span>Срок действия:</span>
                  <b>3 года</b>
                </div>
              </div>
              <div class="hidden-content-items d-flex">
                <div class="hidden-content-left">
                  <img src="~static/img/slide-images/card-icon-3.png" alt="" />
                </div>
                <div>
                  <span>Необходимые документы:</span>
                  <b>Оригинал паспорта; ИНН; Применение; контракт</b>
                </div>
              </div>
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
          <!-- <nuxt-link
            :to="{ name: 'CardsShow' }"
            class="card-items rounded transition"
          >
            <div class="card-items__header mb-auto">
              <h1>Uzcard</h1>
            </div>

            <div class="card-items-img d-flex p-relative f-center">
              <img
                src="~/static/img/slide-images/card-back.png"
                class="card-back d-block p-absolute"
                alt
              />
              <img
                src="~/static/img/slide-images/card-front.png"
                class="card-front d-block p-relative"
                alt
              />
            </div>
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'CardsShow' }"
            class="card-items rounded transition"
          >
            <div class="card-items__header mb-auto">
              <h1>
                HUMO
                <br />(VISA)
              </h1>
            </div>

            <div class="card-items-img d-flex p-relative f-center">
              <img
                src="~/static/img/slide-images/card-back.png"
                class="card-back d-block p-absolute"
                alt
              />
              <img
                src="~/static/img/slide-images/card-front.png"
                class="card-front d-block p-relative"
                alt
              />
            </div>
          </nuxt-link>
          <nuxt-link
            :to="{ name: 'CardsShow' }"
            class="card-items rounded transition"
          >
            <div class="card-items__header">
              <h1>
                Kobeydjing
                <br />(UnionPay)
              </h1>
            </div>

            <div class="card-items-img d-flex p-relative f-center">
              <img
                src="~/static/img/slide-images/card-back.png"
                class="card-back d-block p-absolute"
                alt
              />
              <img
                src="~/static/img/slide-images/card-front.png"
                class="card-front d-block p-relative"
                alt
              />
            </div>
          </nuxt-link> -->

          <div class="card-load">
            <button
              type="button"
              class="d-block w-100 rounded pointer transition"
            >
              Загрузить еще
            </button>
          </div>
        </div>

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
              <span
                >О стратегии реформирования банковской системы Республики
                Узбекистан на 2020-2025 годы</span
              >
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
import { setOffset } from '~/utils/frontend'

export default {
  mounted() {
    setOffset()

    const $cardItems = document.querySelectorAll('.card-items')
    const $bodyWidth = document.querySelector('body').clientWidth

    if ($bodyWidth <= 1025) {
      $cardItems.forEach((el) => {
        el.classList.add('card-active')
      })
    }

    $cardItems.forEach((el) => {
      el.addEventListener('mouseenter', function () {
        el.classList.add('card-active')
      })
      el.addEventListener('mouseleave', function () {
        el.classList.remove('card-active')
      })
    })
  },
}
</script>

<style></style>
