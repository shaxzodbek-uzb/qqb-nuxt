<template>
  <div class="deposit-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="deposit-container pt-60 pb-60">
        <div class="row">
          <div class="col-xl-4">
            <div class="money-transfer-left">
              <h1>{{ name }}</h1>
              <div class="pluso" data-background="#ebebeb" data-options="medium,square,line,horizontal,counter,theme=04" data-services="vkontakte,odnoklassniki,facebook,twitter,google,moimir,email,print"></div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="money-transfer-right" v-html="content"></div>
            <div class="text-right mb-2">
                <strong>{{$t('Дата последнего обновления')}}:</strong> {{ updated_at }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, setPluso } from '~/utils/frontend'
export default {
  data() {
    return {
      name: '',
      content: '',
      updated_at: '-'
    }
  },
  mounted() {
    setPluso()
    setOffset()
    this.$axios.$get(`/pages/${this.$route.params.page}`).then((res) => {
      this.name = res.data.name
      this.content = res.data.content
      this.updated_at = res.data.updated_at
    })
  },
}
</script>

<style></style>
