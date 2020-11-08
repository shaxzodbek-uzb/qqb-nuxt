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
                <!-- <GmapMap
                  :center="{ lat: 10, lng: 10 }"
                  :zoom="7"
                  map-type-id="terrain"
                  style="width: 500px; h~eight: 300px"
                >
                  <GmapMarker :clickable="true" :draggable="true" />
                </GmapMap> -->
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
