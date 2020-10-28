<template>
  <div class="tab-content-about-credit">
    <div class="about-credit-content">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-credit-text">
            <h1>
              На что можно
              <br />взять кредит
            </h1>
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
export default {
  props: {
    content: {
      default: '',
      type: String,
    },
  },
}
</script>

<style></style>
