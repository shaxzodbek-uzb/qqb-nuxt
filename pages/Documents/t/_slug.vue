<template>
  <div class="document-contract-tab-content">
    <div
      class="tab-document-items rounded"
      v-for="document in documents"
      :key="document.id"
    >
      <div class="tab-document-header d-flex">
        <div class="item-badge">
          <div class="app-badge badge-danger">PDF</div>
        </div>
        <div class="item-text f-fill">
          <h1>{{ document.name }}</h1>
          <span>PDF, 204.5 KB</span>
        </div>
        <div class="item-more">
          <router-link
            to="/"
            class="main-bg d-flex align-center btn rounded pointer transition"
          >
            <span>Подробнее</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      documents: [],
    }
  },
  mounted() {
    let me = this
    this.$axios
      .$get(`/documents?slug=${this.$route.params.slug}`)
      .then((res) => {
        while (me.documents.pop());
        me.documents.push(...res.data.documents)
      })
  },
}
</script>

<style></style>
