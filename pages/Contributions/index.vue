<template>
  <div
    class="contribution-page-wrap"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="credit-page-container pt-60">
        <h1 class="title-50">Вклады</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <nuxt-link
                :to="localePath('/contributions/' + type.slug)"
                class="tab-items p-relative pointer"
                data-toggle="tab"
                v-for="type in types"
                :key="type.id"
                :class="{ active: $route.params.slug == type.slug }"
              >
                <span>{{ type.name }}</span>
              </nuxt-link>
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
import { setOffset, tabNavigation } from '@/utils/frontend'

export default {
  mounted() {
    setOffset()
    tabNavigation()
    let me = this
    this.$axios.$get(`/pages/deposits`).then((res) => {
      while (me.types.pop());
      me.types.push(...res.data.types)
    })
  },
  data() {
    return {
      types: [],
    }
  },
}
</script>

<style></style>
