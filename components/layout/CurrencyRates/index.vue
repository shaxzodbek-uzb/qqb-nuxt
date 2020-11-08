<template>
  <div class="currency-wrap p-fixed w-100 main-bg">
    <div class="container">
      <div class="row align-center">
        <div class="col-xl-7 col-lg-5 col-md-4 col-sm-6 col-5 currency-cell-1">
          <div class="currency-container d-flex align-center">
            <nuxt-link
              :to="{ path: 'ExchangeRates' }"
              class="btn btn-sm rounded"
            >
              <span>Курсы валют</span>
            </nuxt-link>

            <div class="currency-dropdown dropdown dropdown-init">
              <button class="btn btn-sm rounded pointer d-flex align-center">
                <span style="margin-right: 0.35rem;">
                  {{ activeCurrency.slug }}
                </span>
                <img src="/img/svg/arrow-down-white.png" alt />
              </button>

              <div class="dropdown--content" data-position="top right">
                <a
                  class="dropdown-items d-flex align-center f-between pointer"
                  v-for="item in currency_rate.currencies"
                  :key="item.id"
                  @click="active_currency_id = item.id"
                >
                  <span>{{ item.name }}</span>
                  <img :src="item.logo" :alt="item.name" />
                </a>
              </div>
            </div>

            <div class="currency-item">
              <span>Покупка</span>
              <div class="currency-item__text d-flex align-center">
                <img src="/img/svg/grow-up.png" alt="Icon" />
                <span>{{ activeCurrency.buy_rate }}</span>
              </div>
            </div>

            <div class="currency-item">
              <span>Продажа</span>
              <div class="currency-item__text d-flex align-center">
                <img src="/img/svg/grow-down.png" alt="Icon" />
                <span>{{ activeCurrency.sell_rate }}</span>
              </div>
            </div>

            <div class="currency-item">
              <span>Курс ЦБ</span>
              <div class="currency-item__text d-flex align-center">
                <img src="/img/svg/grow-down.png" alt="Icon" />
                <span>{{ activeCurrency.cb_rate }}</span>
              </div>
            </div>
          </div>
        </div>
        <SpecialFunctions />
        <div class="currency-cell-3">
          <div class="currency-wrap-right d-flex align-center">
            <div class="call-center-phones p-relative dropdown-init pointer">
              <div class="btn btn-border rounded transition text-white pointer">
                +998 (78) 150 10 01
              </div>

              <div class="dropdown--content" data-position="top right">
                <div class="center-phones d-flex align-center">
                  <a
                    href="tel:+998781501001"
                    class="center-phones__items text-white"
                  >
                    <span>Телефоны доверия</span>
                    <h1>+998 78 150-10-01</h1>
                    <p>ПН-ПТ - 9:00 до 18:00</p>
                  </a>
                  <a
                    href="tel:+998781509339"
                    class="center-phones__items text-white"
                  >
                    <span>Колл-центр</span>
                    <h1>+998 78 150-93-39</h1>
                    <p>ПН-ПТ - 9:00 до 18:00</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpecialFunctions from '~/components/layout/SpecialFunctions'
export default {
  components: { SpecialFunctions },
  data() {
    return {
      currency_rate: {
        currencies: [],
      },
      active_currency_id: 0,
    }
  },
  mounted() {
    let me = this
    this.$axios.$get('/currency-rates/last').then((res) => {
      me.currency_rate = res.data.currency_rate
      me.active_currency_id = me.currency_rate.currencies[0].id
    })
  },
  computed: {
    activeCurrency() {
      for (
        let index = 0;
        index < this.currency_rate.currencies.length;
        index++
      ) {
        const element = this.currency_rate.currencies[index]
        if (element.id == this.active_currency_id) {
          return element
        }
      }
      return {
        name: '-',
        slug: '-',
        sell_rate: '-',
        buy_rate: '-',
        cb_rate: '-',
      }
    },
  },
}
</script>
