<template>
  <div class="tab-content-cash-rate">
    <div class="cash-rate-wrap">
      <div class="row">
        <div class="col-xl-9 col-lg-8 cash-right-cell">
          <div class="cash-rate-table calculator-result-table mobil-table">
            <table class="table w-100">
              <thead class="table-thead">
                <tr>
                  <th style="text-align: left; width: 400px;">
                    Наименование валюты
                  </th>
                  <th>Курс ЦБ</th>
                  <th>Покупка</th>
                  <th>Продажа</th>
                </tr>
              </thead>
              <tbody class="table-tbody">
                <tr v-for="item in currency_rate.currencies" :key="item.id">
                  <td>
                    <div class="table-tbody-td">
                      <span class="table-mobile-text">Наименование валюты</span>
                      <img :src="item.logo" alt />
                      <span>{{ item.name }}</span>
                    </div>
                  </td>
                  <td>
                    <span class="table-mobile-text">Курс ЦБ</span>
                    {{ item.cb_rate }}
                  </td>
                  <td>
                    <span class="table-mobile-text">Покупка</span>
                    {{ item.buy_rate }}
                  </td>
                  <td>
                    <span class="table-mobile-text">Продажа</span>
                    {{ item.sell_rate }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="cash-rate-text">
            <div class="about-credit-need">
              <ul>
                <li>
                  <p>
                    Курс конвертации является информативным. При расчете может
                    возникнуть погрешность по причине дополнительного округления
                    курса.
                  </p>
                </li>
                <li>
                  <p>
                    В расчете не учтена конвертация на стороне платежной
                    системы, которая происходит при проведении операций в
                    банкоматах сторонних банков.
                  </p>
                </li>
                <li>
                  <p>
                    Обращаем ваше внимание, что курс на дату совершения операции
                    может отличаться от курса на дату списания денежных средств
                    со счета.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="tab-document-items rounded">
            <div class="tab-document-header d-flex">
              <div class="item-text f-fill">
                <h1>Курсы валют в JSON формате</h1>
                <span>07.05.2020 13:13:27</span>
              </div>
              <div class="item-more">
                <router-link
                  to="/"
                  class="main-bg d-flex align-center btn rounded pointer transition"
                >
                  <span>{{ $t('Подробнее') }}</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 cash-left-cell">
          <CurrencyConverter />

          <span class="converter-date">07.05.2020 13:13:27</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrencyConverter from '~/components/CurrencyConverter'

export default {
  components: { CurrencyConverter },
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
