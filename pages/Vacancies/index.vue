<template>
  <div class="vacancies-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="credit-page-container pt-60">
        <h1 class="title-50">{{ $t('Вакансии') }}</h1>

        <div class="vacancies-container">
          <div
            class="tab-document-items rounded"
            v-for="item in vacancies"
            :key="item.id"
          >
            <div class="tab-document-header d-flex">
              <div class="item-text f-fill">
                <h1>{{ item.name }}</h1>
                <span>
                  {{ $t('Вакансия опубликована') }}: {{ item.created_at }}
                  {{ item.region }}</span
                >
              </div>

              <!-- <div class="vacancy-badge">
                <div class="app-badge">Будьте первыми</div>
              </div> -->

              <div class="item-more">
                <router-link
                  :to="localePath('/vacancies/' + item.id)"
                  class="main-bg d-flex align-center btn rounded pointer transition"
                >
                  <span>{{ $t('Подробнее') }}</span>
                </router-link>
              </div>
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
      vacancies: [],
    }
  },
  mounted() {
    setOffset()
    this.$axios.$get('/vacancies').then((res) => {
      this.vacancies = res.data.vacancies
    })
  },
}
</script>

<style></style>
