<template>
  <div class="vacancies-page-show" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="vacancies-show-container pt-60">
        <div class="row">
          <div class="col-xl-5">
            <div class="news-aside d-flex f-column h-100">
              <div class="vacancies-show-left">
                <button
                  type="button"
                  class="router-back d-flex align-center pointer"
                  @click="$router.go(-1)"
                >
                  <img src="~/static/img/svg/arrow-back.png" alt />
                  <span>{{ $t('Вклады') }}</span>
                </button>

                <h1>
                  {{ deposit.name }}
                </h1>

                <div class="news-badge">
                  <img src="~/static/img/svg/calendar.png" alt />
                  <span>{{ deposit.created_at }}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-7">
            <div class="vacancies-show-right">
                <img :src="deposit.image" alt="" class="rounded w-100" />
                <div class="news-show-meta" v-html="deposit.content"></div>
                <div class="text-right mb-2">
                    <strong>{{$t('Дата последнего обновления')}}:</strong> {{ deposit.updated_at }}
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
      deposit: {},
    }
  },
  mounted() {
    setOffset()
    let me = this
    this.$axios.$get(`/deposits/` + this.$route.params.id).then((res) => {
      me.deposit = res.data.deposit
    })
  },
}
</script>

<style></style>
