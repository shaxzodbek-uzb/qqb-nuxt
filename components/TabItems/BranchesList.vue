<template>
  <div class="filial-list-content">
    <div class="news-search p-relative">
      <input type="text" class="d-block w-100 h-100" />
      <!-- <span class="input-placeholder p-absolute transition">Поиск</span> -->
      <img src="~/static/img/svg/search.png" class="p-absolute" alt />
    </div>

    <div class="card-medium" v-for="(item,index) in branches" :key="item.id">
      <div class="card-medium-header d-flex">
        <div class="branches-text">
          <h1>{{ item.name }}</h1>
        </div>

        <!-- <button class="btn main-bg rounded pointer transition ml-auto">
          <span>Заполнить заявку</span>
        </button> -->

        <button
          @click="openMapModal(index)"
          class="card-location-button secondary-color rounded pointer ml-auto"
        >
          <img
            src="~/static/img/svg/location.png"
            alt
            class="d-block mx-auto"
          />
        </button>
      </div>

      <div class="card-medium-content">
        <div class="tariff-table">
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Руководитель') }}:</p>
            </div>
            <span>{{ item.director }}</span>
          </div>
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Адрес') }}:</p>
            </div>
            <span>{{ item.address }}</span>
          </div>
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Номера телефонов') }}:</p>
            </div>
            <span>{{ item.phone }}</span>
          </div>
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Обслуживание клиентов') }}:</p>
            </div>
            <span>{{ item.additional_phone }}</span>
          </div>
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('Дни работы') }}:</p>
            </div>
            <span>{{ item.work_days }}</span>
          </div>
          <div class="tariff-table-items d-flex">
            <div class="f-fill">
              <p>{{ $t('МФО') }}:</p>
            </div>
            <span>{{ item.mfo }}</span>
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

    <div class="app-modal">
      <div class="app-modal__overlay" @click="closeMapModal"></div>
      <div class="app-modal__content">
        <div class="modal-aspect-ratio">
          <div class="modal-ratio__map">

            <GMap v-if="this.lat"
              ref="gMap"
              :center="{ lat: this.lat, lng: this.lng }"
              :options="{
                fullscreenControl: false,
                streetViewControl: false,
                mapTypeControl: false,
                zoomControl: true,
                gestureHandling: 'cooperative',
              }"
              :zoom="15"
            >
              <GMapMarker
                :position="{ lat: this.lat, lng: this.lng }"
                :options="{
                  icon:
                    'https://developers.google.com/maps/documentation/javascript/images/default-marker.png',
                }"
              >
              </GMapMarker>
            </GMap>
          </div>

          <div class="modal-close" @click="closeMapModal">
            <i class="fas far fa-times"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    branches: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
        lat: 0,
        lng: 0
    }
  },
  methods: {
    openMapModal(index) {
      const $modal = document.querySelector('.app-modal')

      $modal.classList.add('active')
      this.lat = this.branches[index].lat * 1.
      this.lng = this.branches[index].long * 1.
    },
    closeMapModal() {
      const $modal = document.querySelector('.app-modal')

      $modal.classList.remove('active')
      this.lat = 0
    },
  },
}
</script>

<style></style>
