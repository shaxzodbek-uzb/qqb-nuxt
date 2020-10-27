<template>
  <div class="tab-content-card">
    <div
      class="tab-content-offset d-flex align-center f-wrap detroy-offset"
      data-offset="setLeftOffset"
    >
      <div class="tab-card-meta f-fill">
        <p>Преимущества</p>

        <div class="card-meta-block d-flex f-wrap">
          <div
            class="meta-block-items"
            v-for="item in card.advantages"
            :key="item.id"
          >
            <div class="meta-item-icon rounded child-center">
              <img :src="item.icon" alt />
            </div>
            <h1>{{ item.name }}</h1>
            <p>{{ item.value }}</p>
          </div>
        </div>
      </div>
      <div class="tab-card-sidebar">
        <div
          class="card-sidebar-group text-white"
          v-for="item in card.resource_details"
          :key="item.id"
        >
          <span>{{ item.name }}:</span>
          <p v-html="item.text"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLeftSideClientRect } from '~/utils/frontend'

export default {
  props: {
    card: {
      default() {
        return {}
      },
      type: Object,
    },
  },
  mounted() {
    getLeftSideClientRect()
  },
}
</script>

<style></style>
