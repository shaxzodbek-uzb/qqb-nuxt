<template>
  <div class="tab-content-about-credit">
    <div class="about-credit-content">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-credit-text">
            <h1>
              {{ $t('На что можно взять кредит') }}
            </h1><br>
            <div class="pluso" data-background="#ebebeb" data-options="medium,square,line,horizontal,counter,theme=04" data-services="vkontakte,odnoklassniki,facebook,twitter,google,moimir,email,print"></div>

          </div>
        </div>
        <div class="col-xl-6">
          <div class="about-credit-need" v-html="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setPluso } from '~/utils/frontend'

export default {
  props: {
    content: {
      default: '',
      type: String,
    },
  },
  mounted(){
      setPluso()
  }
}
</script>

<style></style>
