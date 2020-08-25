<template>
  <div
    class="financial-performance-page"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="credit-page-container pt-60">
        <h1 class="title-50">Финансовые показатели</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>Финансовые показатели</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Годовые отчеты</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <FinancialPerformance />
            </div>
            <div role="tabpanel">
              <AnnualReports />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '@/utils/frontend'
import FinancialPerformance from '~/components/TabItems/FinancialPerformance'
import AnnualReports from '~/components/TabItems/AnnualReports'

export default {
  components: {
    FinancialPerformance,
    AnnualReports,
  },
  mounted() {
    setOffset()
    tabNavigation()
  },
}
</script>

<style></style>
