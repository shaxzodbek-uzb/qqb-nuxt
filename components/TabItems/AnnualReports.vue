<template>
  <div class="annual-reports-page">
    <div class="reports-container">
      <div class="row">
        <div class="col-xl-3" v-for="item in anual_reports" :key="item.id">
          <a :href="item.file" class="report-items d-block transition rounded">
            <h1>{{ item.name }}</h1>
            <p>
              {{ item.description }}
            </p>

            <div class="report-book p-relative">
              <div class="card-content-img-badges p-absolute d-flex">
                <div class="app-badge badge-warning">{{ item.formar }}</div>
              </div>
              <img :src="item.image" alt />
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    anual_reports: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style></style>
