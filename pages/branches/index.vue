<template>
  <div class="filials-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="">
      <div class="filials-page-container pt-60">
        <div class="container page-title-route d-flex align-center">
          <router-link
            class="title-route-items d-flex align-center"
            :to="localePath('/branches')"
          >
            <span>{{ $t('Филиалы') }}</span>
          </router-link>
          <router-link
            class="title-route-items d-flex align-center"
            :to="localePath('/cash-machines')"
          >
            <div class="route-swich">
              <div
                class="route-switch__circle child-center p-relative"
                style="margin-left: 0;"
              >
                <img src="~/static/img/svg/switch-icon.png" alt />
              </div>
            </div>
            <span>{{ $t('Банкоматы') }}</span>
          </router-link>
        </div>

        <div class="filials-tab-navigation tab-navigation--credit">
          <div class="container card-tab-header branches-header">
            <div class="d-flex flex-wrap">
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
                  <option value="">{{ $t('Все Филиалы') }}</option>
                  <option v-for="item in regions" :key="item" :value="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div class="container" role="tabpanel">
              <BranchesList :branches="filtered_branches" />
            </div>
            <div class="map-pane" role="tabpanel">
              <div class="aspect-ratio">
                <div class="ratio-container">
                  <GMap
                    ref="gMap"
                    :center="{ lat: locations[0].lat, lng: locations[0].lng }"
                    :options="{
                      fullscreenControl: false,
                      streetViewControl: false,
                      mapTypeControl: false,
                      zoomControl: true,
                      gestureHandling: 'cooperative',
                    }"
                    :zoom="15"
                    @bounds_changed="checkForMarkers"
                  >
                    <GMapMarker
                      v-for="(location, index) in locations"
                      :key="index"
                      :position="{ lat: location.lat, lng: location.lng }"
                      :options="{
                        icon:
                          'https://developers.google.com/maps/documentation/javascript/images/default-marker.png',
                      }"
                      @click="markerEvent(index)"
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

                <!-- <div class="map-info"> -->
                <div class="container">
                  <div class="info-sidebar">
                    <div class="sidebar-inner">
                      <div class="sidebar-searchbar">
                        <input type="text" placeholder="Поиск" />
                        <img
                          src="~/static/img/svg/search.png"
                          alt="Search icon"
                          style="width: 15px;"
                        />
                      </div>

                      <div class="info-sidebar-content">
                        <div
                          v-for="(item, index) in locations"
                          :key="index"
                          @click="moveToMarker(index)"
                          class="info-content-items"
                        >
                          <span>{{ item.name }}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15.488"
                            height="18"
                            viewBox="0 0 15.488 18"
                          >
                            <path
                              id="Контур_2376"
                              data-name="Контур 2376"
                              d="M14.2,2.268A7.744,7.744,0,0,0,.977,7.744a7.471,7.471,0,0,0,1.2,3.8A16.912,16.912,0,0,0,4.74,14.732a26.944,26.944,0,0,0,3.69,3.074L8.721,18l.291-.194a26.952,26.952,0,0,0,3.69-3.074,16.911,16.911,0,0,0,2.561-3.184,7.471,7.471,0,0,0,1.2-3.8A7.693,7.693,0,0,0,14.2,2.268ZM8.721,13.251a5.507,5.507,0,1,1,5.507-5.507A5.513,5.513,0,0,1,8.721,13.251Z"
                              transform="translate(-0.977 0)"
                              fill="#6a7e9c"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- </div> -->
              </div>

              <div class="container">
                <div class="app-meta d-flex">
                  <div
                    class="app-breadcrumb-wrap d-flex align-center f-fill text-truncate"
                  >
                    <router-link to="/" class="d-flex align-center p-relative">
                      <img
                        src="~/static/img/svg/home.png"
                        class="d-block"
                        alt
                      />
                    </router-link>
                    <router-link to="/" class="d-flex align-center p-relative">
                      <span>Филиалы</span>
                    </router-link>
                    <router-link to="/" class="d-flex align-center p-relative">
                      <span>
                        На карте
                      </span>
                    </router-link>
                  </div>

                  <div class="app-meta__download d-flex align-center">
                    <p>
                      {{ $t('Скачать') }}
                      <span>PDF,</span>
                      <span>205.77 KB</span>
                    </p>
                    <div class="app-badge badge-danger">PDF</div>
                  </div>
                </div>
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
      locations: [
        {
          lat: 41.311081,
          lng: 69.240562,
          name: 'Tashkent',
          title: 'Головной офис'
        },
        {
          lat: 37.20237,
          lng: 67.31035,
          name: 'Surkhandaryo',
          title: 'Головной офис 2'
        },
        {
          lat: 37.22417,
          lng: 43.76833,
          name: 'Qashqadaryo',
          title: 'Головной офис 3'
        },
      ],
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

    this.$axios.$get('/branches').then((res) => {
      this.branches = res.data.branches
    })
  },

  methods: {
    checkForMarkers() {
      this.locations.forEach((location, i) => {
        location.visible = this.$refs.gMap.map
          .getBounds()
          .contains(this.$refs.gMap.markers[i].getPosition())
      })
    },
    moveToMarker(index) {
        console.log(index)
    },
    markerEvent(index) {
    }
  },
}
</script>
