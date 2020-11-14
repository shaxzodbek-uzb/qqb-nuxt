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
                    {{ $t('Наименование валюты') }}
                  </th>
                  <th>{{ $t('Курс ЦБ') }}</th>
                  <th>{{ $t('Покупка') }}</th>
                  <th>{{ $t('Продажа') }}</th>
                </tr>
              </thead>
              <tbody class="table-tbody">
                <tr v-for="item in currency_rate.currencies" :key="item.id">
                  <td>
                    <div class="table-tbody-td">
                      <span class="table-mobile-text">{{
                        $t('Наименование валюты')
                      }}</span>
                      <img :src="item.logo" alt />
                      <span>{{ item.name }}</span>
                    </div>
                  </td>
                  <td>
                    <span class="table-mobile-text">{{ $t('Курс ЦБ') }}</span>
                    {{ item.cb_rate }}
                  </td>
                  <td>
                    <span class="table-mobile-text">{{ $t('Покупка') }}</span>
                    {{ item.buy_rate }}
                  </td>
                  <td>
                    <span class="table-mobile-text">{{ $t('Продажа') }}</span>
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
                    {{
                      $t(
                        'Курс конвертации является информативным. При расчете может возникнуть погрешность по причине дополнительного округления курса.'
                      )
                    }}
                  </p>
                </li>
                <li>
                  <p>
                    {{
                      $t(
                        'В расчете не учтена конвертация на стороне платежной системы, которая происходит при проведении операций в банкоматах сторонних банков.'
                      )
                    }}
                  </p>
                </li>
                <li>
                  <p>
                    {{
                      $t(
                        'Обращаем ваше внимание, что курс на дату совершения операции может отличаться от курса на дату списания денежных средств со счета.'
                      )
                    }}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div class="tab-document-items rounded">
            <div class="tab-document-header d-flex">
              <div class="item-text f-fill">
                <h1>{{ $t('Курсы валют в JSON формате') }}</h1>
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

          <div class="exchange-converter rounded">
            <div class="converter-header">
              <div class="converter-header-content p-relative">
                <img src="~/static/img/svg/coins.png" alt />
                <h1>{{ $t('Архив') }}</h1>

                <div class="converter-form">
                  <div class="converter-input">
                    <v-select :options="year"></v-select>
                  </div>
                  <div class="converter-select">
                    <v-select :options="options"></v-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="converter-datepicker">
              <date-picker
                v-model="time1"
                valueType="format"
                :inline="true"
              ></date-picker>
            </div>
          </div>
          <span class="converter-date">07.05.2020 13:13:27</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CurrencyConverter from '~/components/CurrencyConverter'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  components: {
    CurrencyConverter,
    DatePicker,
  },
  data() {
    return {
      currency_rate: {
        currencies: [],
      },
      active_currency_id: 0,
      time1: null,
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
