<template>
  <div class="credit-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="credit-page-container pt-60">
        <h1 class="title-50">Кредиты</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>Кредиты</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>В иностранной валюте</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <CreditCards />
            </div>
            <div role="tabpanel">
              <ForeignCurrency />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '@/utils/frontend'
import CreditCards from '~/components/TabItems/CreditCards'
import ForeignCurrency from '~/components/TabItems/ForeignCurrency'

export default {
  components: {
    CreditCards,
    ForeignCurrency,
  },
  mounted() {
    setOffset()
    tabNavigation()
  },
}
</script>

<style></style>
