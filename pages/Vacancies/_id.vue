<template>
  <div class="vacancies-page-show" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="vacancies-show-container pt-60">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="vacancies-show-left">
              <button
                type="button"
                class="router-back d-flex align-center pointer"
                @click="$router.go(-1)"
              >
                <img src="~/static/img/svg/arrow-back.png" alt />
                <span>{{ $t('Вакансии') }}</span>
              </button>

              <h1>
                {{ vacancy.name }}
              </h1>

              <p>
                {{ $t('Вакансия опубликована') }}:
                <br />
                {{ vacancy.created_at }} {{ vacancy.region }}
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="vacancies-show-right">
              <h1>{{ $t('Обязанности') }}:</h1>

              <div
                class="about-credit-need"
                v-html="vacancy.requirements"
              ></div>

              <h1>{{ $t('Требования') }}:</h1>

              <div class="about-credit-need" v-html="vacancy.duties"></div>

              <h1>{{ $t('Контакты') }}:</h1>

              <div class="contact-dates">
                <div class="contact-date-items d-flex">
                  <div class="contact-date-icon">
                    <img src="~/static/img/svg/phone-3.png" alt />
                  </div>
                  <div class="contact-date-text">
                    {{ vacancy.phones }}
                  </div>
                </div>

                <div class="contact-date-items d-flex">
                  <div class="contact-date-icon">
                    <img src="~/static/img/svg/email-3.png" alt />
                  </div>
                  <div class="contact-date-text">
                    <span>{{ $t('Email') }}: {{ vacancy.email }}</span>
                  </div>
                </div>

                <div class="contact-date-items d-flex">
                  <div class="contact-date-icon">
                    <img src="~/static/img/svg/loc-3.png" alt />
                  </div>
                  <div class="contact-date-text">
                    <span>{{ $t('Адрес') }}: {{ vacancy.address }}</span>
                  </div>
                </div>
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
      vacancy: {},
    }
  },
  mounted() {
    setOffset()
    this.$axios.$get('/vacancies/' + this.$route.params.id).then((res) => {
      this.vacancy = res.data.vacancy
    })
  },
}
</script>

<style></style>
