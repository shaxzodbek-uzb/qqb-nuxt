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
            tag="div"
            v-for="item in cards"
            :key="item.id"
            :to="localePath('/cards/' + item.id)"
            class="card-items rounded transition d-flex f-column h-100"
            :class="{
              'card-active': item.id == hover_card || mobile_view,
            }"
          >
            <div class="card-items__header card-header-animate mb-auto">
              <h1>
                {{ item.name }}
                <br />({{ item.type }})
              </h1>
            </div>

            <div class="card-hidden-content">
              <div class="hidden-content-items d-flex">
                <div class="hidden-content-left">
                  <img src="~static/img/slide-images/card-icon-1.png" alt="" />
                </div>
                <div>
                  <span>Банковские услуги по открытию карты:</span>
                  <b>{{ item.cost }}</b>
                </div>
              </div>
              <div class="hidden-content-items d-flex">
                <div class="hidden-content-left">
                  <img src="~static/img/slide-images/card-icon-2.png" alt="" />
                </div>
                <div>
                  <span>Срок действия:</span>
                  <b>{{ item.validity }}</b>
                </div>
              </div>
              <div class="hidden-content-items d-flex">
                <div class="hidden-content-left">
                  <img src="~static/img/slide-images/card-icon-3.png" alt="" />
                </div>
                <div>
                  <span>Необходимые документы:</span>
                  <b>{{ item.required_documents }}</b>
                </div>
              </div>
            </div>

            <div
              class="card-items-img d-flex p-relative f-center"
              @mouseover="hover_card = item.id"
              @mouseleave="hover_card = 0"
            >
              <img :src="item.image" class="card-back d-block p-absolute" alt />
              <img
                :src="item.cover_image"
                class="card-front d-block p-relative"
                alt
              />
            </div>
          </nuxt-link>

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

    const $bodyWidth = document.querySelector('body').clientWidth

    if ($bodyWidth <= 1025) {
      this.mobile_view = true
    }
    this.$axios.$get('/cards').then((res) => {
      this.cards = res.data.cards
    })
  },
  data() {
    return {
      hover_card: 0,
      mobile_view: false,
      cards: [],
    }
  },
}
</script>

<style></style>
