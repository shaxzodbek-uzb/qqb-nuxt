<template>
  <div class="exchange-rates-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="news-page-container pt-60">
        <h1 class="title-50">Курсы валют</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>Курс</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Архив</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <CashRate />
            </div>
            <div role="tabpanel">
              <Archive />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '@/utils/frontend'
import CashRate from '~/components/TabItems/CashRate'
import Archive from '~/components/TabItems/Archive'

export default {
  components: {
    CashRate,
    Archive,
  },
  mounted() {
    setOffset()
    tabNavigation()
  },
}
</script>

<style></style>
