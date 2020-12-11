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
          <span class="d-block">{{ credit.updated_at }}</span>
        </div>
      </div>
      <div class="calculator-area">
        <div class="row">
          <div class="col-xl-5">
            <div class="form-group">
              <span>{{ $t('Сумма вклада') }}</span>

              <div class="form-group-range">
                <p>{{ formatMoney(selected_amount) }} UZS</p>
                <vue-slider
                  v-model="value_percent"
                  v-bind="optionsRangeSlider"
                ></vue-slider>
              </div>

              <div class="form-range-field d-flex f-between">
                <span>{{ formatMoney(credit.calculator_min_amount) }} сум.</span>
                <span>{{ formatMoney(credit.calculator_max_amount) }} сум.</span>
              </div>
            </div>
          </div>
          <div class="col-xl-2">
            <div class="form-group">
              <span>{{ $t('Срок депозита') }}</span>

              <div class="form-group-field">
                <v-select :options="date_options" v-model="selected_period"></v-select>
              </div>
            </div>
          </div>
          <div class="col-xl-2">
            <div class="form-group">
              <span>{{ $t('Льготный период') }}</span>

              <div class="form-group-field">
                <v-select :options="grace_options" v-model="selected_grace_period"></v-select>
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="form-group">
              <span>{{ $t('Первоначальный взнос') }}</span>

              <div class="form-group-field">
                <v-select :options="initial_options" v-model="initial_amount"></v-select>
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
          <h1>{{ first_percent }}%</h1>
        </div>
        <div class="calculator-result__right f-fill d-flex">
          <div>
            <span>{{ $t('Ежемесячная сумма платежа') }}</span>
            <h1>{{ formatMoney(first_amount) }} UZS</h1>
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
            <th>Фоиз ставкаси</th>
            <th style="width: 150px;">Ойлар сони</th>
            <th>Қолдиқ</th>
            <th>Асосий қарз</th>
            <th>Фоиз тўлови</th>
            <th>Жами кредит учун</th>
          </tr>
        </thead>
        <tbody class="table-tbody">
          <tr v-for="(item,index) in generatedTable" :key="index">
            <td>{{ item.percent }}%</td>
            <td>{{ item.month_number }}</td>
            <td>{{ formatMoney(item.reminder) }}</td>
            <td>{{ formatMoney(item.main_debit) }}</td>
            <td>{{ formatMoney(item.percent_payment) }}</td>
            <td>{{ formatMoney(item.overall) }}</td>
          </tr>
        </tbody>
        <tfoot class="table-tfoot">
          <tr>
            <td colspan="3">Жами</td>
            <td>{{ formatMoney(sum_main_debit) }}</td>
            <td>{{ formatMoney(sum_percent_payment) }}</td>
            <td>{{ formatMoney(sum_overall) }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        credit:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        first_percent(){
            if (this.generatedTable.length > 0){
                return this.generatedTable[0].percent
            }else{
                return 0
            }
        },
        first_amount(){
            if (this.generatedTable.length > 0){
                return this.generatedTable[0].percent_payment
            }else{
                return 0
            }
        },
        sum_main_debit(){
            let sum = 0;
            for (let index = 0; index < this.generatedTable.length; index++) {
                const element = this.generatedTable[index];
                sum += element.main_debit
            }
            return sum
        },
        sum_percent_payment(){
            let sum = 0;
            for (let index = 0; index < this.generatedTable.length; index++) {
                const element = this.generatedTable[index];
                sum += element.percent_payment
            }
            return sum
        },
        sum_overall(){
            let sum = 0;
            for (let index = 0; index < this.generatedTable.length; index++) {
                const element = this.generatedTable[index];
                sum += element.overall
            }
            return sum
        },
        selected_amount(){
            return this.value_percent * (this.credit.calculator_max_amount - this.credit.calculator_min_amount) / 100 + this.credit.calculator_min_amount;
        },
        initial_amount(){
            return this.selected_amount * this.credit.calculator_initial_amount / 100;
        },
        initial_options(){
            return [this.initial_amount]
        },
        generatedTable(){
            let result = [];
            let percent = this.percent / 2;
            let main_debit = this.selected_amount / (this.selected_period - this.selected_grace_period);
            let main_debit_index = 0;
            let reminder = this.selected_amount;
            let percent_payment = 0;
            for (let index = 1; index <= this.selected_period; index++) {
                if(index>1 && index % 12 == 1 && percent < this.percent){
                    percent += this.percent / 10;
                }
                main_debit_index = (index > this.selected_grace_period)?main_debit:0;
                percent_payment = percent * reminder / 1200
                result.push({
                    percent: this.formatMoney(percent,1),
                    month_number: index,
                    reminder: reminder,
                    main_debit: main_debit_index,
                    percent_payment: percent_payment,
                    overall: main_debit_index+percent_payment
                });
                reminder = reminder - main_debit_index;
            }
            return result;
        }
    },
    watch:{
        credit(){
            this.date_options.push(this.credit.calculator_period)
            this.selected_period = this.credit.calculator_period

            this.grace_options.push(this.credit.calculator_grace_period)
            this.selected_grace_period = this.credit.calculator_grace_period
        
            this.initial_options.push(this.credit.calculator_initial_amount * this)
            this.selected_grace_period = this.credit.calculator_grace_period
        
        }
    },
    data() {
        return {
            percent: 14,
            value_percent: 0,
            optionsRangeSlider: {
                dotSize: [9, 17],
                tooltip: 'none',
                height: 1,
            },
            options: ['foo', 'bar', 'baz'],
            date_options: [],
            grace_options: [],
            selected_period: 0,
            selected_grace_period: 0,
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
    methods: {
        formatMoney(amount, decimalCount = 0, decimal = ".", thousands = " ") {
            try {
                decimalCount = Math.abs(decimalCount);
                decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

                const negativeSign = amount < 0 ? "-" : "";

                let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
                let j = (i.length > 3) ? i.length % 3 : 0;

                return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>

<style></style>
