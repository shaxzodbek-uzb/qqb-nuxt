<template>
  <div class="tab-document">
    <div class="container">
      <p class="tab-document-title">
        <!-- {{ $t('Все что вы хотели знать о картах QQB') }} -->
      </p>

      <div
        class="tab-document-items rounded"
        v-for="document in documents"
        :key="document.id"
      >
        <div class="tab-document-header d-flex">
          <div class="item-badge">
            <div class="app-badge badge-danger" style="width: auto !important;">
              {{ document.extension.toUpperCase() }}
            </div>
          </div>
          <div class="item-text f-fill">
            <h1>{{ document.name }}</h1>
            <span
              >{{ document.mime }},
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
  </div>
</template>

<script>
export default {
  props: {
    documents: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style></style>
