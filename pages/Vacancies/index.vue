<template>
  <div class="vacancies-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="credit-page-container pt-60">
        <h1 class="title-50">Вакансии</h1>

        <div class="vacancies-container">
          <div class="tab-document-items rounded">
            <div class="tab-document-header d-flex">
              <div class="item-text f-fill">
                <h1>Клиентский менеджер (ипотечное направление)</h1>
                <span
                  >Вакансия опубликована: 07.05.2020 13:13:27 в Ташкенте</span
                >
              </div>

              <div class="vacancy-badge">
                <div class="app-badge">Будьте первыми</div>
              </div>

              <div class="item-more">
                <router-link
                  to="vacancies/show"
                  class="main-bg d-flex align-center btn rounded pointer transition"
                >
                  <span>Подробнее</span>
                </router-link>
              </div>
            </div>
          </div>

          <div class="tab-document-items rounded">
            <div class="tab-document-header d-flex">
              <div class="item-text f-fill">
                <h1>Web-дизайнер</h1>
                <span
                  >Вакансия опубликована: 07.05.2020 13:13:27 в Ташкенте</span
                >
              </div>

              <div class="item-more">
                <router-link
                  :to="{ name: 'VacanciesShow' }"
                  class="main-bg d-flex align-center btn rounded pointer transition"
                >
                  <span>Подробнее</span>
                </router-link>
              </div>
            </div>
          </div>

          <div class="tab-document-items rounded">
            <div class="tab-document-header d-flex">
              <div class="item-text f-fill">
                <h1>Начальник отдела кредитования юридических лиц</h1>
                <span
                  >Вакансия опубликована: 07.05.2020 13:13:27 в Ташкенте</span
                >
              </div>

              <div class="item-more">
                <router-link
                  :to="{ name: 'VacanciesShow' }"
                  class="main-bg d-flex align-center btn rounded pointer transition"
                >
                  <span>Подробнее</span>
                </router-link>
              </div>
            </div>
          </div>

          <div class="tab-document-items rounded">
            <div class="tab-document-header d-flex">
              <div class="item-text f-fill">
                <h1>Бухгалтер по расчету заработной платы</h1>
                <span
                  >Вакансия опубликована: 07.05.2020 13:13:27 в Ташкенте</span
                >
              </div>

              <div class="item-more">
                <router-link
                  :to="{ name: 'VacanciesShow' }"
                  class="main-bg d-flex align-center btn rounded pointer transition"
                >
                  <span>Подробнее</span>
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
  mounted() {
    setOffset()
  },
}
</script>

<style></style>
