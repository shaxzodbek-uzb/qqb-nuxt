<template>
  <div class="credit-card-show-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="credit-card-show-header pt-60">
        <div class="show-header-top">
          <button
            type="button"
            class="router-back d-flex align-center pointer"
            @click="$router.go(-1)"
          >
            <img src="~/static/img/svg/arrow-back.png" alt />
            <span>{{ $t('Кредиты') }}</span>
          </button>
        </div>
      </div>

      <div class="credit-card-show-content">
        <h1 class="title-50">{{ credit.name }}</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>{{ $t('О кредите') }}</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>{{ $t('Условия и требования') }}</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>{{ $t('Документы') }}</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>{{ $t('Калькулятор') }}</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div class="tab-content-static pt-40">
              <div class="card-item-large rounded card-with-border d-flex">
                <div class="item-text orphan-text-2">
                  <span>{{ $t('Срок кредита') }}</span>
                  <h1>{{ credit.term }}</h1>
                </div>
                <div class="item-text orphan-text-2">
                  <span>{{ $t('Ставка кредита') }}</span>
                  <h1>{{ credit.grace_period }}</h1>
                </div>
                <div class="item-text-line"></div>
                <div class="item-text item-text--long orphan-text-2">
                  <span>{{ $t('Сумма кредита') }}</span>
                  <h1>{{ credit.amount }}</h1>
                </div>
                <!-- <div class="item-img">
                  <img :src="credit.image" alt />
                </div> -->
              </div>
            </div>
            <div class="card-tab-box">
              <div role="tabpanel">
                <AboutCredit :content="credit.content" />
              </div>
              <div role="tabpanel">
                <ConditionsAndRequirements :faqs="credit.faqs" />
              </div>
              <div role="tabpanel">
                <CreditDocument :documents="credit.documents" />
              </div>
              <div role="tabpanel">
                <Calculator />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '~/utils/frontend'
import AboutCredit from '~/components/TabItems/AboutCredit'
import ConditionsAndRequirements from '~/components/TabItems/ConditionsAndRequirements'
import CreditDocument from '~/components/TabItems/CreditDocument'
import Calculator from '~/components/TabItems/Calculator'

export default {
  data() {
    return {
      credit: {},
    }
  },
  components: {
    AboutCredit,
    CreditDocument,
    ConditionsAndRequirements,
    Calculator,
  },
  mounted() {
    setOffset()
    tabNavigation()
    this.$axios.$get('/credits/' + this.$route.params.id).then((res) => {
      this.credit = res.data.credit
    })
  },
}
</script>

<style></style>
