<template>
  <div class="filials-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="filials-page-container pt-60">
        <div class="page-title-route d-flex align-center">
          <router-link
            class="title-route-items d-flex align-center"
            :to="{ name: 'Filials' }"
          >
            <span>Филиалы</span>
          </router-link>
          <router-link
            class="title-route-items d-flex align-center"
            :to="{ name: 'CashMachine' }"
          >
            <div class="route-swich">
              <div class="route-switch__circle child-center p-relative">
                <img src="~/static/img/svg/switch-icon.png" alt />
              </div>
            </div>
            <span>Банкоматы</span>
          </router-link>
        </div>

        <div class="filials-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>На карте</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Списком</span>
              </div>

              <div class="conent-select">
                <span>Списком</span>
                <select>
                  <option value="1">Ташкент</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <div style="height: 500px;">
                <GMap
                  ref="gMap"
                  :cluster="{ options: { styles: clusterStyle } }"
                  :center="{ lat: locations[0].lat, lng: locations[0].lng }"
                  :options="{
                    fullscreenControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    zoomControl: true,
                    gestureHandling: 'cooperative',
                    styles: mapStyle,
                  }"
                  :zoom="6"
                  @bounds_changed="checkForMarkers"
                >
                  <GMapMarker
                    v-for="location in locations"
                    :key="location.id"
                    :position="{ lat: location.lat, lng: location.lng }"
                    :options="{
                      icon:
                        location === currentLocation
                          ? pins.selected
                          : pins.notSelected,
                    }"
                    @click="currentLocation = location"
                  >
                    <GMapInfoWindow :options="{ maxWidth: 200 }">
                      <b>{{ location.name }}</b>
                      <br />
                      <br />
                      <code>
                        Lat: {{ location.lat }},
                        <br />
                        Lng: {{ location.lng }}
                      </code>
                    </GMapInfoWindow>
                  </GMapMarker>
                </GMap>
              </div>
            </div>
            <div role="tabpanel">
              <BranchesList :branches="branches" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '~/utils/frontend'
import BranchesList from '~/components/TabItems/BranchesList'

export default {
  data() {
    return {
      branches: [],
    }
  },
  components: {
    BranchesList,
  },

  mounted() {
    setOffset()
    tabNavigation()

    this.$axios.$get('/branches').then((res) => {
      this.branches = res.data.branches
    })
  },
}
</script>
