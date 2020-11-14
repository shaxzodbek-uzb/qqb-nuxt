<template>
  <div
    class="tariff-page-wrap d-flex"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="tariff-page-container pt-60 pb-60">
        <h1 class="title-50">{{ $t('Тарифы') }}</h1>
        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <NuxtLink
                v-for="type in types"
                :key="type.id"
                :to="'/tariff/' + type.slug"
                tag="div"
                class="tab-items p-relative pointer"
                :class="{ active: type.slug == $route.params.slug }"
                data-toggle="tab"
              >
                <span> {{ type.name }}</span>
              </NuxtLink>
            </div>
          </div>

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
      types: [],
    }
  },
  mounted() {
    let me = this
    setOffset()
    this.$axios.$get(`/pages/tariffs`).then((res) => {
      while (me.types.pop());
      me.types.push(...res.data.tariff_types)
    })
  },
}
</script>

<style></style>
