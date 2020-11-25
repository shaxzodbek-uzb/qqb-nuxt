<template>
  <div class="tab-content-financial" ref="initAccordion">
    <div
      class="tab-document-items rounded"
      v-for="performance in financial_performances"
      :key="performance.id"
    >
      <div class="accordion-header d-flex align-center">
        <div class="item-text f-fill">
          <h1>{{ performance.year }} {{ $t('год') }}</h1>
          <span>{{ performance.definition }}</span>
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
          <div class="accordion-performance">
            <div
              class="performance-text d-flex f-between"
              v-for="item in performance.attributes"
              :key="item.id"
            >
              <p v-html="item.name" style="margin-bottom: 0;"></p>
              <span v-html="item.text"></span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="content-load">
      <button type="button" class="d-block w-100 rounded pointer transition">
        {{ $t('Загрузить еще') }}
      </button>
    </div>
  </div>
</template>

<script>
import { accardion } from '~/utils/frontend'

export default {
  props: {
    financial_performances: {
      type: Array,
      default() {
        return []
      },
    },
  },
  watch: {
    financial_performances() {
      const { initAccordion } = this.$refs
      accardion(initAccordion)
    },
  },
}
</script>

<style></style>
