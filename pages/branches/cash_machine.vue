<template>
  <div class="filials-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="filials-page-container pt-60">
        <div class="page-title-route d-flex align-center">
          <router-link
            class="title-route-items d-flex align-center"
            :to="localePath('/branches')"
          >
            <span>{{ $t('Филиалы') }}</span>
          </router-link>
          <router-link
            class="title-route-items d-flex align-center"
            :to="localePath('/branches/cash_machine')"
          >
            <div class="route-swich">
              <div
                class="route-switch__circle child-center p-relative"
                style="margin-left: auto;"
              >
                <img src="~/static/img/svg/switch-icon.png" alt />
              </div>
            </div>
            <span>{{ $t('Банкоматы') }}</span>
          </router-link>
        </div>

        <div class="filials-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>{{ $t('Списком') }}</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>{{ $t('На карте') }}</span>
              </div>
              <div class="conent-select">
                <span>{{ $t('Списком') }}</span>
                <select v-model="region_name">
                  <option value="">-</option>
                  ><option v-for="item in regions" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <BranchesList :branches="filtered_branches" />
            </div>
            <div role="tabpanel">
              <div style="height: 500px;">
                <!-- <GMap
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
                </GMap> -->
              </div>
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
      region_name: '',
    }
  },
  components: {
    BranchesList,
  },
  computed: {
    regions() {
      return this.branches
        .map((branch) => branch.region)
        .filter((v, i, a) => a.indexOf(v) === i)
    },
    filtered_branches() {
      return this.branches.filter(
        (v) => this.region_name === '' || v.region === this.region_name
      )
    },
  },

  mounted() {
    setOffset()
    tabNavigation()

    this.$axios.$get('/branches?cash_machine=1').then((res) => {
      this.branches = res.data.branches
    })
  },

  //   methods: {
  //     checkForMarkers() {
  //       this.locations.forEach((location, i) => {
  //         location.visible = this.$refs.gMap.map
  //           .getBounds()
  //           .contains(this.$refs.gMap.markers[i].getPosition())
  //       })

  //       this.locationsVisibleOnMap = this.locations
  //         .filter((l) => l.visible)
  //         .map((l) => l.name)
  //         .join(', ')
  //     },
  //   },
}
</script>
