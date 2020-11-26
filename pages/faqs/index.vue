<template>
  <div
    class="tariff-page-wrap d-flex"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="tariff-page-container pt-60 pb-60">
        <h1 class="title-50">{{ $t('Вопросы и ответы') }}</h1>
        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <!-- <div class="d-flex">
              <NuxtLink
                v-for="type in types"
                :key="type.id"
                :to="localePath('/tariff/' + type.slug)"
                tag="div"
                class="tab-items p-relative pointer"
                :class="{ active: type.slug == $route.params.slug }"
                data-toggle="tab"
              >
                <span> {{ type.name }}</span>
              </NuxtLink>
            </div> -->
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
                <ConditionsAndRequirements :faqs="faqs" :title="''"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset } from '~/utils/frontend'

import ConditionsAndRequirements from '~/components/TabItems/ConditionsAndRequirements'
export default {
  data() {
    return {
      faqs: [],
    }
  },
  components: {ConditionsAndRequirements},
  mounted() {
    let me = this
    setOffset()
    this.$axios.$get(`/faqs`).then((res) => {
      while (me.faqs.pop());
      me.faqs.push(...res.faqs)
    })
  },
}
</script>

<style></style>
