<template>
  <div class="exchange-converter rounded">
    <div class="converter-header">
      <div class="converter-header-content p-relative">
        <img src="~/static/img/svg/coins.png" alt />
        <h1>Конвертер валют</h1>

        <div class="converter-form">
          <div class="converter-input">
            <input type="text" v-model="amount" />
          </div>
          <div class="converter-select">
            <v-select
              :options="options"
              v-model="active_currency_id"
            ></v-select>
          </div>
        </div>
      </div>
    </div>
    <div class="converter-footer d-flex f-between">
      <h1>
        {{ (1 * activeCurrency.sell_rate * amount).format(2, 3, ' ', ',') }}
      </h1>
      <h1>UZS</h1>
    </div>
  </div>
</template>
<script>
Number.prototype.format = function (n, x) {
  var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
  return this.toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,')
}

export default {
  data() {
    return {
      currency_rate: {
        currencies: [],
      },
      active_currency_id: {
        label: '-',
        value: 0,
      },
      amount: 1,
    }
  },
  mounted() {
    let me = this
    this.$axios.$get('/currency-rates/last').then((res) => {
      me.currency_rate = res.data.currency_rate
      me.active_currency_id = {
        label: me.currency_rate.currencies[0].name,
        value: me.currency_rate.currencies[0].id,
      }
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
        if (element.id == this.active_currency_id.value) {
          return element
        }
      }
      return {
        name: '-',
        slug: '-',
        sell_rate: 0,
        buy_rate: 0,
        cb_rate: 0,
      }
    },
    options() {
      return this.currency_rate.currencies.map((item) => {
        return { label: item.name, value: item.id }
      })
    },
  },
}
</script>

<style></style>
