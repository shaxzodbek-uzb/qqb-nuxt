<template>
  <div class="filial-list-content">
    <div class="news-search p-relative">
      <input type="text" class="d-block w-100 h-100" />
      <!-- <span class="input-placeholder p-absolute transition">Поиск</span> -->
      <img src="~/static/img/svg/search.png" class="p-absolute" alt />
    </div>

    <div class="card-medium" v-for="item in cash_machines" :key="item.id">
      <div class="card-medium-header d-flex align-center">
        <h1>{{ item.branche.name }}</h1>

        <!-- <button class="btn main-bg rounded pointer transition ml-auto">
          <span>Заполнить заявку</span>
        </button> -->

        <button
          class="card-location-button secondary-color rounded pointer ml-auto"
        >
          <img src="~/static/img/svg/location.png" alt />
        </button>
      </div>

      <div class="card-medium-content">
        <div class="tariff-table">
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Адрес') }}:</p>
            </div>
            <span>{{ item.address }}</span>
          </div>
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Расположение банкомата') }}:</p>
            </div>
            <span>{{ item.position }}</span>
          </div>
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Номера телефонов') }}:</p>
            </div>
            <span>{{ item.phone }}</span>
          </div>
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Электронная почта') }}:</p>
            </div>
            <span>{{ item.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cash_machines: {
      type: Array,
      default() {
        return []
      },
    },
  },
}
</script>

<style></style>
