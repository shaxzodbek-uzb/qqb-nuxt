<template>
  <div class="tab-content-national-currency">
    <div class="mobile-credit-button">
      <div class="d-flex align-center">
        <p>Вклад</p>
        <img src="~/static/img/svg/arrow-right.png" alt />
      </div>
    </div>

    <div class="tab-document-items calculator-box rounded">
      <!-- <div class="calculator-header d-flex f-between">
        <div class="calculator-header-left p-relative">
          <img src="~/static/img/svg/calc.png" class="p-absolute" alt />
          <h1>Вклад</h1>
          <span>Наше предложение</span>
        </div>

        <div class="mobile-close-icon">
          <img src="~/static/img/svg/times-icon.png" alt />
        </div>

        <div class="calculator-header-right">
          <p>Последнее обновление:</p>
          <span class="d-block">07.05.2020 13:13:27</span>
        </div>
      </div>
      <div class="calculator-area">
        <div class="row">
          <div class="col-xl-5">
            <div class="form-group">
              <span>Сумма вклада</span>

              <div class="form-group-range">
                <p>{{ value }} UZS</p>
                <vue-slider
                  v-model="value"
                  v-bind="optionsRangeSlider"
                ></vue-slider>
              </div>

              <div class="form-range-field d-flex f-between">
                <span>200 000 сум.</span>
                <span>100 000 000 сум.</span>
              </div>
            </div>
          </div>
          <div class="col-xl-2">
            <div class="form-group">
              <span>Валюта</span>

              <div class="form-group-field">
                <v-select :options="options"></v-select>
              </div>

              <div class="form-range-field d-flex f-between">
                <span>3 года</span>
                <span>3 мес.</span>
              </div>
            </div>
          </div>
          <div class="col-xl-2">
            <div class="form-group">
              <span>Срок вклада</span>

              <div class="form-group-field">
                <v-select :options="options"></v-select>
              </div>

              <div class="form-range-field d-flex f-between">
                <span>3 года</span>
                <span>3 мес.</span>
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="form-group">
              <span style="opacity: 0;">Срок вклада</span>
              <div class="pick-up-deposit">
                <button class="pointer rounded transition d-block w-100">
                  Подобрать вклад
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div class="calculator-result d-flex f-wrap text-white">
        <div class="calculator-result__left">
          <span>Всего вкладов</span>
          <h1>346</h1>
        </div>

        <div class="calculator-percents f-fill d-flex f-wrap">
          <div class="checkbox-group">
            <input type="checkbox" id="check-1" />
            <label for="check-1" class="checkbox-wrap">
              <div class="checkbox-curtain transition">
                <img src="~/static/img/svg/check.png" alt />
              </div>
              <span>Капитализация %</span>
            </label>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="check-2" />
            <label for="check-2" class="checkbox-wrap">
              <div class="checkbox-curtain transition">
                <img src="~/static/img/svg/check.png" alt />
              </div>
              <span>Периодическая выплата %</span>
            </label>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="check-3" />
            <label for="check-3" class="checkbox-wrap">
              <div class="checkbox-curtain transition">
                <img src="~/static/img/svg/check.png" alt />
              </div>
              <span>Пополнение</span>
            </label>
          </div>

          <div class="checkbox-group">
            <input type="checkbox" id="check-4" />
            <label for="check-4" class="checkbox-wrap">
              <div class="checkbox-curtain transition">
                <img src="~/static/img/svg/check.png" alt />
              </div>
              <span>Частичное снятие</span>
            </label>
          </div>
        </div>

        <div class="calculator-result__bottom w-100">
          <span>Посмотреть все вклады</span>
        </div>
      </div> -->
    </div>

    <div class="card-items-container d-flex f-wrap">
      <router-link
        to="/"
        class="card-items deposit-card rounded transition"
        v-for="deposit in deposits"
        :key="deposit.id"
      >
        <div class="card-items__header">
          <h1>
            {{ deposit.name }}
            <br />{{ deposit.type }}
          </h1>
        </div>

        <div class="card-items__content">
          <div class="card-content-meta d-flex f-wrap f-between">
            <div class="card-meta-item p-relative">
              <img src="~/static/img/slide-images/card-icon-1.png" alt />

              <div>
                <span>Срок вклада</span>
                <h1>{{ deposit.term }}</h1>
              </div>
            </div>

            <div class="card-meta-item p-relative">
              <img src="~/static/img/slide-images/card-icon-2.png" alt />

              <div>
                <span>Ставка</span>
                <h1>{{ deposit.rate }}</h1>
              </div>
            </div>

            <div class="card-meta-item p-relative">
              <img src="~/static/img/slide-images/card-icon-3.png" alt />

              <div>
                <span>Сумма вклада:</span>
                <h1>{{ deposit.summ }}</h1>
              </div>
            </div>
          </div>

          <div class="card-content-img p-relative rounded">
            <div class="card-content-img-badges p-absolute d-flex">
              <div class="app-badge badge-warning">UZS</div>
              <div class="app-badge badge-warning">UZD</div>
            </div>
            <img
              :src="deposit.image"
              class="d-block w-100 h-100 p-absolute"
              alt
            />
          </div>
        </div>
      </router-link>

      <div class="card-load">
        <button type="button" class="d-block w-100 rounded pointer transition">
          Загрузить еще
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
      optionsRangeSlider: {
        dotSize: [9, 17],
        tooltip: 'none',
        height: 1,
      },
      options: ['foo', 'bar', 'baz'],
      deposits: [],
    }
  },
  mounted() {
    let me = this
    const $button = document.querySelector('.mobile-credit-button')
    const $calcContent = document.querySelector('.calculator-box')
    // const $closeIcon = document.querySelector('.mobile-close-icon')

    $button.addEventListener('click', function () {
      $calcContent.classList.add('active')
    })

    // $closeIcon.addEventListener('click', function () {
    //   $calcContent.classList.remove('active')
    // })
    this.$axios.$get(`/deposits`).then((res) => {
      while (me.deposits.pop());
      me.deposits.push(...res.data.deposits)
    })
  },
}
</script>

<style></style>
