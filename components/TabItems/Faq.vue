<template>
  <div class="tab-faq" ref="initAccordion">
    <div class="container">
      <p class="tab-document-title">
        <!-- {{ $t('Все что вы хотели знать о картах QQB') }} -->
      </p>

      <div
        class="tab-document-items rounded"
        v-for="item in faqs"
        :key="item.id"
      >
        <div class="accordion-header d-flex align-center">
          <div class="item-text f-fill">
            <h1>
              {{ item.question }}
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
            {{ item.answer }}
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
  props: {
    faqs: {
      type: Array,
      default() {
        return []
      },
    },
  },
  mounted() {
    const { initAccordion } = this.$refs
    accardion(initAccordion)
  },
}
</script>

<style></style>
