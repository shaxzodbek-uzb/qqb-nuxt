<template>
  <div class="tab-content-card">
    <div
      class="tab-content-offset d-flex align-center f-wrap detroy-offset"
      data-offset="setLeftOffset"
    >
      <div class="tab-card-meta f-fill">
        <p>Преимущества</p>

        <div class="card-meta-block d-flex f-wrap">
          <div class="meta-block-items">
            <div class="meta-item-icon rounded child-center">
              <img src="~/static/img/svg/call-info.png" alt />
            </div>
            <h1>Бесплатное обслуживание</h1>
            <p>0 ₽ в год</p>
          </div>
          <div class="meta-block-items">
            <div class="meta-item-icon rounded child-center">
              <img src="~/static/img/svg/card-group.png" alt />
            </div>
            <h1>Пополнение другой картой</h1>
            <p>Без комиссии от 2000 ₽</p>
          </div>
          <div class="meta-block-items">
            <div class="meta-item-icon rounded child-center">
              <img src="~/static/img/svg/card-with-phone.png" alt />
            </div>
            <h1>Платите смартфоном</h1>
            <p>Добавьте карту в Apple Pay</p>
          </div>
          <div class="meta-block-items">
            <div class="meta-item-icon rounded child-center">
              <img src="~/static/img/svg/pay.png" alt />
            </div>
            <h1>Снятие без комиссии</h1>
            <p>210 точек пополнения.</p>
          </div>
        </div>
      </div>
      <div class="tab-card-sidebar">
        <div class="card-sidebar-group text-white">
          <span>Необходимые документы:</span>
          <p>Бесплатно 30 $ 30 €</p>
        </div>

        <div class="card-sidebar-group text-white">
          <span>Внутренний банковский перевод со счета:</span>
          <p>Бесплатно</p>
        </div>

        <div class="card-sidebar-group text-white">
          <span>
            Снятие наличных с карты или вывод средств через партнеров банка:
          </span>
          <p>Бесплатно</p>
        </div>

        <div class="card-sidebar-group text-white">
          <span>Снятие наличных с карты через банкоматы:</span>
          <p>Бесплатно</p>
        </div>

        <div class="card-sidebar-group text-white">
          <span>
            Перевод с «QISHLOQ QURILISHBANK» на карту другого банка через
            сервисы банка:
          </span>
          <p>
            0,5% (но не меньше
            <br />5 000 сум)
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLeftSideClientRect } from '~/utils/frontend'

export default {
  mounted() {
    getLeftSideClientRect()
  },
}
</script>

<style></style>
