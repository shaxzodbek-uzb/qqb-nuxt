<template>
  <div class="deposit-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="deposit-container pt-60 pb-60">
        <div class="row">
          <div class="col-xl-4">
            <div class="money-transfer-left">
              <h1>{{ name }}</h1>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="money-transfer-right" v-html="content"></div>
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
      name: '',
      content: '',
    }
  },
  mounted() {
    setOffset()
    this.$axios.$get(`/pages/${this.$route.params.page}`).then((res) => {
      this.name = res.data.name
      this.content = res.data.content
    })
  },
}
</script>

<style></style>
