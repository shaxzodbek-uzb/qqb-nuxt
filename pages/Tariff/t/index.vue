<template>
  <div class="tariff-page-content" ref="initAccordion">
    <div
      class="tab-document-items rounded"
      v-for="(tariff, index) in tariffs"
      :key="tariff.id"
    >
      <div class="accordion-header d-flex align-center">
        <div class="item-text f-fill">
          <h1>
            {{ tariff.name }}
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
        <div class="tariff-table">
          <div
            class="tariff-table-items d-flex"
            v-for="(tariffChild, indexChild) in tariff.children"
            :key="tariffChild.id"
          >
            <b>{{ index + 1 }}.{{ indexChild + 1 }}</b>
            <div class="f-fill">
              <p>
                {{ tariffChild.name }}
              </p>
            </div>
            <span> {{ tariffChild.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { accardion } from '~/utils/frontend'

export default {
  data() {
    return {
      tariffs: [],
    }
  },
  mounted() {
    const { initAccordion } = this.$refs
    let me = this
    this.$axios.$get(`/tariffs`).then((res) => {
      while (me.tariffs.pop());
      me.tariffs.push(...res.data.tariffs)
      accardion(initAccordion)
    })
  },
}
</script>

<style></style>
