<template>
  <div class="tab-content-credit-card">
    <div
      class="tab-document-items rounded"
      v-for="credit in credits"
      :key="credit.id"
    >
      <div class="tab-document-header d-flex">
        <div class="item-text f-fill">
          <h1>{{ credit.name }}</h1>
          <span>{{ credit.description }}</span>
        </div>
        <div class="card-card-img p-absolute">
          <img :src="credit.image" alt />
        </div>
        <div class="item-more">
          <nuxt-link
            :to="'/credits/show/' + credit.id"
            class="main-bg d-flex align-center btn rounded pointer transition"
          >
            <span>Подробнее</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credits: [],
    }
  },
  mounted() {
    let me = this
    this.$axios.$get(`/credits`).then((res) => {
      while (me.credits.pop());
      me.credits.push(...res.data.credits)
    })
  },
}
</script>

<style></style>
