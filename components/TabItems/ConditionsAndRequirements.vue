<template>
  <div class="tab-content-requirement" ref="initAccordion">
    <p class="tab-document-title">
      {{ $t(title) }}
    </p>

    <div class="tab-document-items rounded" v-for="faq in faqs" :key="faq.id">
      <div class="accordion-header d-flex align-center">
        <div class="item-text f-fill">
          <h1>{{ faq.question }}</h1>
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
          {{ faq.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accardion } from '~/utils/frontend'

export default {
  props: {
    faqs: {
      default() {
        return []
      },
      type: Array,
    },
    title: {
        default: 'Все что вы хотели знать о условиях и требованиях',
        type: String
    }
  },
  mounted() {
    const { initAccordion } = this.$refs

    accardion(initAccordion)
  },
}
</script>

<style></style>
