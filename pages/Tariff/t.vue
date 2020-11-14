<template>
  <div
    class="tariff-page-wrap d-flex"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="tariff-page-container pt-60 pb-60">
        <h1 class="title-50" v-if="type == 'null'">{{ $t('Тарифы') }}</h1>
        <h1 class="title-50" v-else>{{ type.name }}</h1>
        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-content">
            <div role="tabpanel">
              <NuxtChild :key="$route.params.slug" />
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
  data() {
    return {
      type: [],
    }
  },
  mounted() {
    let me = this
    setOffset()
    this.$axios.$get(`/tariff-types/${this.$route.params.slug}`).then((res) => {
      me.type = res.data.tariff_type
    })
  },
}
</script>

<style></style>
