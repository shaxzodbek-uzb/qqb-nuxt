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
                <tr>
                  <td>
                    <div class="table-tbody-td">
                      <span class="table-mobile-text">Наименование валюты</span>
                      <img src="~/static/img/icon/uzbekistan.png" alt />
                      <span>1 USD, Доллар - США</span>
                    </div>
                  </td>
                  <td>
                    <span class="table-mobile-text">Курс ЦБ</span>
                    11 666.39
                  </td>
                  <td>
                    <span class="table-mobile-text">Покупка</span>
                    41 666,67
                  </td>
                  <td>
                    <span class="table-mobile-text">Продажа</span>
                    41 666,67
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
                  <span>Подробнее</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 cash-left-cell">
          <div class="exchange-converter rounded">
            <div class="converter-header">
              <div class="converter-header-content p-relative">
                <img src="~/static/img/svg/coins.png" alt />
                <h1>Конвертер валют</h1>

                <div class="converter-form">
                  <div class="converter-input">
                    <input type="text" />
                  </div>
                  <div class="converter-select">
                    <v-select :options="options"></v-select>
                  </div>
                </div>
              </div>
            </div>
            <div class="converter-footer d-flex f-between">
              <h1>10 210.39</h1>
              <h1>USD</h1>
            </div>
          </div>

          <div class="exchange-converter rounded">
            <div class="converter-header">
              <div class="converter-header-content p-relative">
                <img src="~/static/img/svg/coins.png" alt />
                <h1>Архив</h1>

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
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  data() {
    return {
      options: ['UZS', 'UZD', 'EURO'],
      year: ['2000', '2001', '2002', '2003', '2004'],
      time1: null,
    }
  },
  components: {
    DatePicker,
  },
}
</script>

<style></style>
