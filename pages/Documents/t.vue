<template>
  <div class="documents-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="documents-page-container pt-60">
        <h1 class="title-50" v-if="type === null">Документы</h1>
        <h1 class="title-50" v-else>{{ type.name }}</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-content">
            <div role="tabpanel">
              <NuxtChild :key="$route.params.slug" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset } from '@/utils/frontend'

export default {
  data() {
    return {
      type: null,
    }
  },
  mounted() {
    let me = this
    setOffset()
    this.$axios
      .$get(`/document-types/${this.$route.params.slug}`)
      .then((res) => {
        me.type = res.data.document_type
      })
  },
}
</script>

<style></style>
