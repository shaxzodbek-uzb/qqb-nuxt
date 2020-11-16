<template>
  <div class="vacancies-page-show" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="vacancies-show-container pt-60">
        <div class="row">
          <div class="col-xl-6">
            <div class="news-aside d-flex f-column h-100">
              <div class="vacancies-show-left">
                <button
                  type="button"
                  class="router-back d-flex align-center pointer"
                  @click="$router.go(-1)"
                >
                  <img src="~/static/img/svg/arrow-back.png" alt />
                  <span>{{ $t('Новости') }}</span>
                </button>

                <h1>
                  {{ news.name }}
                </h1>

                <div class="news-badge">
                  <img src="~/static/img/svg/calendar.png" alt />
                  <span>{{ news.created_at }}</span>
                </div>
              </div>

              <div class="news-social">
                <span>{{ $t('Поделиться новостью в соцсетях') }}:</span>

                <div class="d-flex">
                  <router-link to="/" class="social-items child-center">
                    <img src="~/static/img/svg/fb.png" alt />
                  </router-link>
                  <router-link to="/" class="social-items child-center">
                    <img src="~/static/img/svg/go.png" alt />
                  </router-link>
                  <router-link to="/" class="social-items child-center">
                    <img src="~/static/img/svg/tw.png" alt />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-6">
            <div class="vacancies-show-right">
              <img :src="news.image" alt="" class="rounded w-100" />
              <div class="news-show-meta" v-html="news.description"></div>
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
      news: {},
    }
  },
  mounted() {
    setOffset()
    let me = this
    this.$axios.$get(`/news/` + this.$route.params.id).then((res) => {
      me.news = res.data.news
    })
  },
}
</script>

<style></style>
