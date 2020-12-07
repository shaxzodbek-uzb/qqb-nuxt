<template>
  <div class="tab-content-calculator">
    <div class="mobile-credit-button">
      <div class="d-flex align-center">
        <p>{{ $t('Рассчитайте свой кредит') }}</p>
        <img src="~/static/img/svg/arrow-right.png" alt />
      </div>
    </div>
    <div class="tab-document-items calculator-box rounded">
      <div class="calculator-header d-flex f-between">
        <div class="calculator-header-left p-relative">
          <img src="~/static/img/svg/calc.png" class="p-absolute" alt />
          <h1>{{ $t('Рассчитайте свой кредит') }}</h1>
          <span>{{ $t('Калькулятор - Депозит') }}</span>
        </div>

        <div class="mobile-close-icon">
          <img src="~/static/img/svg/times-icon.png" alt />
        </div>

        <div class="calculator-header-right">
          <p>{{ $t('Последнее обновление') }}:</p>
          <span class="d-block">07.05.2020 13:13:27</span>
        </div>
      </div>
      <div class="calculator-area">
        <div class="row">
          <div class="col-xl-5">
            <div class="form-group">
              <span>{{ $t('Сумма вклада') }}</span>

              <div class="form-group-range">
                <p>{{ max_value * value_percent /100 }} UZS</p>
                <vue-slider
                  v-model="value_percent"
                  v-bind="optionsRangeSlider"
                ></vue-slider>
              </div>

              <div class="form-range-field d-flex f-between">
                <span>0 сум.</span>
                <span>{{ max_value }} сум.</span>
              </div>
            </div>
          </div>
          <div class="col-xl-2">
            <div class="form-group">
              <span>{{ $t('Срок депозита') }}</span>

              <div class="form-group-field">
                <v-select :options="options"></v-select>
              </div>

              <div class="form-range-field d-flex f-between">
                <span>3 {{ $t('года') }}</span>
                <span>3 {{ $t('мес.') }}</span>
              </div>
            </div>
          </div>
          <div class="col-xl-2">
            <div class="form-group">
              <span>{{ $t('Льготный период') }}</span>

              <div class="form-group-field">
                <v-select :options="options"></v-select>
              </div>

              <div class="form-range-field d-flex f-between">
                <span>3 {{ $t('года') }}</span>
                <span>3 {{ $t('мес.') }}</span>
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="form-group">
              <span>{{ $t('Первоначальный взнос') }}</span>

              <div class="form-group-field">
                <v-select :options="options"></v-select>
              </div>

              <div class="form-range-field d-flex f-between">
                <span>3 {{ $t('года') }}</span>
                <span>3 {{ $t('мес.') }}</span>
              </div>
            </div>
          </div>

          <!-- Кнопка отобразиться на мобильном устройстве -->
          <div class="col-xl-12 mobile-credit-button">
            <div class="form-group">
              <div class="pick-up-deposit">
                <button class="pointer rounded transition d-block w-100">
                  {{ $t('Рассчитать кредит') }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="calculator-result d-flex f-wrap text-white">
        <div class="calculator-result__left">
          <span>{{ $t('Процентная ставка') }}</span>
          <h1>24%</h1>
        </div>
        <div class="calculator-result__right f-fill d-flex">
          <div>
            <span>{{ $t('Процентная ставка') }}</span>
            <h1>39 935 370,41 UZS</h1>
          </div>
          <div>
            <span>{{ $t('Ежемесячная сумма платежа') }}</span>
            <h1>544 798,36 UZS</h1>
          </div>
        </div>

        <div class="calculator-result__bottom w-100">
          <span>
            {{
              $t(
                'Результаты расчета предназначены для приблизительных и справочных целей.'
              )
            }}
          </span>
        </div>
      </div>
    </div>

    <div class="about-credit-need">
      <ul>
        <li>
          <p>
            {{
              $t(
                'Последние расчеты производятся специалистами в филиалах Банка на основании вашей информации.'
              )
            }}
          </p>
        </li>
        <li>
          <p>
            {{ $t('Эти расчеты не включены в кредитные обязательства Банка.') }}
          </p>
        </li>
      </ul>
    </div>

    <div class="calculator-result-table">
      <table class="table w-100">
        <thead class="table-thead">
          <tr>
            <th>{{ $t('Голосов') }}</th>
            <th style="width: 150px;">{{ $t('Вы') }}</th>
            <th>{{ $t('Начисленный доход') }}</th>
            <th>{{ $t('Оплачиваемый доход') }}</th>
            <th>{{ $t('Увеличение депозитов') }}</th>
            <th>{{ $t('Сумма депозита находится в конце платежа') }}</th>
          </tr>
        </thead>
        <tbody class="table-tbody">
          <tr>
            <td>1,00</td>
            <td>2020-08-24</td>
            <td>41 666,67</td>
            <td>41 666,67</td>
            <td>0,00</td>
            <td>5 000 000,00</td>
          </tr>
          <tr>
            <td>2,00</td>
            <td>2020-08-24</td>
            <td>41 666,67</td>
            <td>41 666,67</td>
            <td>0,00</td>
            <td>5 000 000,00</td>
          </tr>
          <tr>
            <td>3,00</td>
            <td>2020-08-24</td>
            <td>41 666,67</td>
            <td>41 666,67</td>
            <td>0,00</td>
            <td>5 000 000,00</td>
          </tr>
          <tr>
            <td>4,00</td>
            <td>2020-08-24</td>
            <td>41 666,67</td>
            <td>41 666,67</td>
            <td>0,00</td>
            <td>5 000 000,00</td>
          </tr>
        </tbody>
        <tfoot class="table-tfoot">
          <tr>
            <td colspan="2">{{ $t('На общий депозит') }}</td>
            <td>41 666,67</td>
            <td>41 666,67</td>
            <td>0,00</td>
            <td>5 000 000,00</td>
          </tr>
          <tr>
            <td colspan="2">{{ $t('Сумма вклада') }}</td>
            <td></td>
            <td></td>
            <td>5 000 000,00</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">{{ $t('Депозитный доход') }}</td>
            <td></td>
            <td></td>
            <td>500 000,04</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2">{{ $t('Сумма вклада в процентах') }}</td>
            <td></td>
            <td></td>
            <td>5 500 000,04</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        max_value: {
            type: Number,
            default: 0,
        }
    },
  data() {
    return {
      value_percent: 0,
      optionsRangeSlider: {
        dotSize: [9, 17],
        tooltip: 'none',
        height: 1,
      },
      options: ['foo', 'bar', 'baz'],
    }
  },
  mounted() {
    const $button = document.querySelector('.mobile-credit-button')
    const $calcContent = document.querySelector('.calculator-box')
    const $closeIcon = document.querySelector('.mobile-close-icon')

    $button.addEventListener('click', function () {
      $calcContent.classList.add('active')
    })

    $closeIcon.addEventListener('click', function () {
      $calcContent.classList.remove('active')
    })
  },
}
</script>

<style></style>
