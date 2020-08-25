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
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>В национальной валюте</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>В иностранной валюте</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <NationalCurrency />
            </div>
            <div role="tabpanel">
              <!-- <ForeignCurrency /> -->
              1234aaa
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '@/utils/frontend'
import NationalCurrency from '~/components/TabItems/NationalCurrency'

export default {
  components: {
    NationalCurrency,
  },
  mounted() {
    setOffset()
    tabNavigation()
  },
}
</script>

<style></style>
