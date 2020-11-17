<template>
  <div
    class="financial-performance-page"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="credit-page-container pt-60">
        <h1 class="title-50">{{ $t('Финансовые показатели') }}</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>{{ $t('Финансовые показатели') }}</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>{{ $t('Годовые отчеты') }}</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <FinancialPerformance
                :financial_performances="financial_performances"
              />
            </div>
            <div role="tabpanel">
              <AnnualReports :anual_reports="anual_reports" />
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
  data() {
    return {
      financial_performances: [],
      anual_reports: [],
    }
  },
  components: {
    FinancialPerformance,
    AnnualReports,
  },
  mounted() {
    setOffset()
    tabNavigation()
    let me = this
    this.$axios.$get(`/financial-performances`).then((res) => {
      while (me.financial_performances.pop());
      me.financial_performances.push(...res.data.financial_performances)
    })
    this.$axios.$get(`/anual-reports`).then((res) => {
      while (me.anual_reports.pop());
      me.anual_reports.push(...res.data.anual_reports)
    })
  },
}
</script>

<style></style>
