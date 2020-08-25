<template>
  <div class="tab-faq" ref="initAccordion">
    <div class="container">
      <p class="tab-document-title">Все что вы хотели знать о картах QQB</p>

      <div class="tab-document-items rounded">
        <div class="accordion-header d-flex align-center">
          <div class="item-text f-fill">
            <h1>
              Могу ли я получить кредит, если у меня нет официальных доходов?
            </h1>
          </div>
          <div class="tab-arrow">
            <button class="w-100 h-100 rounded child-center transition pointer">
              <img
                src="~/static/img/svg/arrow-down-2.png"
                class="transition"
                alt
              />
            </button>
          </div>
        </div>

        <div class="accordion-content">
          <div class="accordion-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            numquam maiores autem labore non eum officia aperiam, totam nostrum
            quo minus ducimus et ipsam perferendis? Quam eligendi corrupti quasi
            excepturi!
          </div>
        </div>
      </div>

      <div class="tab-document-items rounded">
        <div class="accordion-header d-flex align-center">
          <div class="item-text f-fill">
            <h1>
              Необходимо ли предоставить банку справки или выписки со счета о
              моих доходах?
            </h1>
          </div>
          <div class="tab-arrow">
            <button class="w-100 h-100 rounded child-center transition pointer">
              <img
                src="~/static/img/svg/arrow-down-2.png"
                class="transition"
                alt
              />
            </button>
          </div>
        </div>

        <div class="accordion-content">
          <div class="accordion-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            numquam maiores autem labore non eum officia aperiam, totam nostrum
            quo minus ducimus et ipsam perferendis? Quam eligendi corrupti quasi
            excepturi!
          </div>
        </div>
      </div>

      <div class="tab-document-items rounded">
        <div class="accordion-header d-flex align-center">
          <div class="item-text f-fill">
            <h1>
              Как быстро банк рассматривает онлайн заявку на предоставление
              кредита?
            </h1>
            <span>В течение 3 дней.</span>
          </div>
          <div class="tab-arrow">
            <button class="w-100 h-100 rounded child-center transition pointer">
              <img
                src="~/static/img/svg/arrow-down-2.png"
                class="transition"
                alt
              />
            </button>
          </div>
        </div>

        <div class="accordion-content">
          <div class="accordion-box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            numquam maiores autem labore non eum officia aperiam, totam nostrum
            quo minus ducimus et ipsam perferendis? Quam eligendi corrupti quasi
            excepturi!
          </div>
        </div>
      </div>

      <div class="faq-date">
        <span>07.05.2020 13:13:27</span>
      </div>
    </div>
  </div>
</template>

<script>
import { accardion } from '~/utils/frontend'

export default {
  mounted() {
    const { initAccordion } = this.$refs

    accardion(initAccordion)
  },
}
</script>

<style></style>
