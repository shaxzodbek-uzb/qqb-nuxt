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
          <div class="card-tab-header branches-header">
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
                  <option value="">Все Филиалы </option>
                  <option v-for="item in regions" :key="item" :value="item">
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
      currentLocation: {},
      locationsVisibleOnMap: '',
      locations: [
        {
          lat: 45.81444,
          lng: 15.97798,
          name: 'Zagreb',
        },
        {
          lat: 46.056946,
          lng: 14.505751,
          name: 'Ljubljana',
        },
        {
          lat: 47.497913,
          lng: 19.040236,
          name: 'Budapest',
        },
        {
          lat: 48.210033,
          lng: 16.363449,
          name: 'Vienna',
        },
        {
          lat: 52.520008,
          lng: 13.404954,
          name: 'Berlin',
        },
        {
          lat: 41.906204,
          lng: 12.507516,
          name: 'Rome',
        },
        {
          lat: 50.073658,
          lng: 14.41854,
          name: 'Prague',
        },
        {
          lat: 48.148598,
          lng: 17.107748,
          name: 'Bratislava',
        },
      ],
      pins: {
        selected:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHUSURBVHgB5VU7SwNBEJ7LmZBgMC+UdKKx0MZCG2srwcbCB2glpFDQ3to/IegvSAIWPrBJIySlipUKKqYLaHJ3iWIelzu/DTk8j71H7MQPltmZnflmZ3b3juivQ3BzCIfDI4FAYBvTRV3XR7tBglCCOIP9oFwuv/46QSwWWwfZIaaDNi7vGOlqtZqhfhPE4/EViAy5V6ljE8uVSuXYc4JkMjncarUeMR0ib5Db7fZEvV6vWBd8PG+Q73LIFYyj3lAsa1G/37/D4+JWgPbcQkybd9jpdGYVRXlmSiQSSYmieMWmhgMuwI0kSTPkpQJgzKJnDfJuKYryBJH7sVNBSPGI7BKoFl3n+GguMY4JHiz6GtoybiisRczmEtPFAM+Ifl6i5DmTKYqeX+Nssj19lUz9N2J4XNxDTiQSkwi4oz6ADU3hLdxb7dwW9RyL5B0FHrltAgZUsEce4eRrmwB3ugCRJ3fk4VvsOwEDHtcWxKeDy4emaWmHdRKdFpvNphQKhdhFmOet42D3sftTJw7X/wHgw/U8h1ywkJ/gYJeI/wi/g8kdmqqqG5Alk62Er+emG7nXBFSr1aroNSNknwOVzZnNS6xIHtFoNF6CweAbpheyLOfo3+ALfrSuzJ1F8EsAAAAASUVORK5CYII=',
        notSelected:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAABHElEQVR42uVVyw4BMRQdC98lsbPwG5YSH+BzWFtLZilh0oQgFh6J54IwBmGYtrfaBREdcTvDhpM0adrec3rb+7Csn8fRdrLg7VzBubhDzmHrudRuZ2KRs/miLd6AThfNaOTTGRFIsMm8bkSuXBeGoLVaGi0g39wLI4GTf1EjdE/+E1pAAGgEAenkb/tBo1vQFUDgBbSbny6al77uSQwB/6wJSNHoAo8xj30iaYMW4Lv9wfSTpc0eH6atXtE4TKWNUS4AY2hyddY4k/lwVEZncm9QilQuBGPwnp1B5GIXGi3P0eU0c7EqKrje5hU5d7fr2P2AEJIESkNqB1XJkvhI0/GrTuqZX619tLMF/VHlfnk5/0r7ZMvVWA3rr3AF6LIMZ7PmSlUAAAAASUVORK5CYII=',
      },
      clusterStyle: [
        {
          url:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png',
          width: 56,
          height: 56,
          textColor: '#fff',
        },
      ],
      mapStyle: [
        {
          featureType: 'all',
          elementType: 'labels.text.fill',
          stylers: [
            {
              color: '#ffffff',
            },
          ],
        },
        {
          featureType: 'all',
          elementType: 'labels.text.stroke',
          stylers: [
            {
              visibility: 'on',
            },
            {
              color: '#3e606f',
            },
            {
              weight: 2,
            },
            {
              gamma: 0.84,
            },
          ],
        },
        {
          featureType: 'all',
          elementType: 'labels.icon',
          stylers: [
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'administrative',
          elementType: 'geometry',
          stylers: [
            {
              weight: 0.6,
            },
            {
              color: '#313536',
            },
          ],
        },
        {
          featureType: 'landscape',
          elementType: 'geometry',
          stylers: [
            {
              color: '#44a688',
            },
          ],
        },
        {
          featureType: 'poi',
          elementType: 'geometry',
          stylers: [
            {
              color: '#13876c',
            },
          ],
        },
        {
          featureType: 'poi.attraction',
          elementType: 'geometry.stroke',
          stylers: [
            {
              color: '#f5e4e4',
            },
            {
              visibility: 'off',
            },
          ],
        },
        {
          featureType: 'poi.attraction',
          elementType: 'labels',
          stylers: [
            {
              visibility: 'on',
            },
            {
              lightness: '14',
            },
          ],
        },
        {
          featureType: 'poi.park',
          elementType: 'geometry',
          stylers: [
            {
              color: '#13876c',
            },
            {
              visibility: 'simplified',
            },
          ],
        },
        {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [
            {
              color: '#067372',
            },
            {
              lightness: '-20',
            },
          ],
        },
        {
          featureType: 'transit',
          elementType: 'geometry',
          stylers: [
            {
              color: '#357374',
            },
          ],
        },
        {
          featureType: 'water',
          elementType: 'geometry',
          stylers: [
            {
              color: '#004757',
            },
          ],
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

      this.locationsVisibleOnMap = this.locations
        .filter((l) => l.visible)
        .map((l) => l.name)
        .join(', ')
    },
  },
}
</script>
