<template>
  <div class="document-contract-tab-content">
    <div
      class="tab-document-items rounded"
      v-for="document in documents"
      :key="document.id"
    >
      <div class="tab-document-header d-flex">
        <div class="item-badge">
          <div class="app-badge badge-danger">
            {{ document.extension.toUpperCase() }}
          </div>
        </div>
        <div class="item-text f-fill">
          <h1>{{ document.name }}</h1>
          <span>
            <!-- {{ document.mime }}, -->
            {{ (document.size / 1024).toFixed(2) }} KB</span
          >
        </div>
        <div class="item-more">
          <a
            :href="document.file"
            _target="_blank"
            class="main-bg d-flex align-center btn rounded pointer transition"
          >
            <span>{{ $t('Подробнее') }}</span>
          </a>
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
    this.$axios.$get(`/documents`).then((res) => {
      while (me.documents.pop());
      me.documents.push(...res.data.documents)
    })
  },
}
</script>

<style></style>
