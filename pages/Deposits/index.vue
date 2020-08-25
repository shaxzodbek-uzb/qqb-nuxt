<template>
  <div class="deposit-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="deposit-container pt-60 pb-60">
        <div class="row">
          <div class="col-xl-6">
            <div class="money-transfer-left">
              <h1>Депозиты</h1>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="money-transfer-right">
              <p>
                АКБ «Кишлок курилиш банк» предлагает юридическим лицам размещать
                свободные денежные средства на срочные депозиты.
              </p>

              <div class="deposit-table">
                <table class="table w-100">
                  <thead class="table-thead">
                    <tr>
                      <th style="width: 175px;">Срок депозита</th>
                      <th>Валюта депозита</th>
                      <th>Годовая процентная ставка</th>
                    </tr>
                  </thead>
                  <tbody class="table-tbody">
                    <tr>
                      <td>от 180 до 365 дня</td>
                      <td>Сум</td>
                      <td>СР*</td>
                    </tr>
                    <tr>
                      <td>
                        от 366 дней до 730 дней
                      </td>
                      <td>Сум</td>
                      <td>До СР*+1</td>
                    </tr>
                    <tr>
                      <td>от 731 дней и более</td>
                      <td>Сум</td>
                      <td>До СР*+2</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                *СР- действующая ставка рефинансирования Центрального банка
                Республики Узбекистан.
              </p>

              <p>
                Условия депозита определяются исходя из текущей позиции банка в
                области привлечения и размещения ресурсов. Правление АКБ «Кишлок
                курилиш банк» гарантирует своевременное исполнение взятых на
                себя обязательств по выплате процентов и основного долга.
              </p>

              <p>
                Подробную информацию вы можете получить в департаменте
                Казначейства по телефону:
              </p>

              <b>+99878 150 78 83, +99871 241 41 46</b>
            </div>
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
  },
}
</script>

<style></style>
