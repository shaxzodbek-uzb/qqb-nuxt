<template>
  <header class="header p-fixed w-100">
    <div class="header-top">
      <div class="container" data-resize="resize">
        <div class="row align-center header-row">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-10 header-cell-1">
            <nuxt-link
              :to="localePath('/')"
              class="header-logo d-block p-relative"
            >
              <img src="~/static/img/logo.png" alt="Logo" class="d-block" />
              <img
                src="~/static/img/logo-white.png"
                alt="Logo"
                class="logo-white d-block p-absolute transition"
              />
            </nuxt-link>
          </div>
          <div class="col-xl-7 header-cell-2">
            <Navigation :menu.sync="top_menu" />
          </div>
          <div class="col-xl-2 col-lg-3 col-md-3 col-sm-6 col-2 header-cell-3">
            <div class="header-toolbar d-flex align-center">
              <Search class="ml-auto" />
              <Language />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-bottom">
      <div class="container">
        <div class="row align-center">
          <div class="col-lg-10 header-bototm-cell-1">
            <Navigation :menu.sync="menu" />
          </div>
          <div class="col-lg-2 header-bototm-cell-2">
            <div class="user-bank">
              <div class="my-bank-button dropdown-init pointer p-relative">
                <button
                  class="d-flex align-center btn btn-border rounded pointer transition"
                >
                  <span style="margin-right: 1rem;">Мой банк</span>
                  <img
                    src="~/static/img/svg/user-icon.png"
                    class="default-icon-1"
                    alt="User Icon"
                  />
                  <img
                    src="~/static/img/svg/user-white.png"
                    class="white-icon-4 p-absolute"
                    alt="User Icon"
                  />
                </button>

                <div class="dropdown--content">
                  <a
                    href="http://qishloqqurilishbank.uz/uz/internet-banking/index.php"
                    target="_blank"
                    class="dropdown--content-items"
                  >
                    <span>InternetBank физ.</span>
                    <img src="~static/img/svg/arrow-r2.png" alt="" />
                  </a>
                  <a
                    href="http://qishloqqurilishbank.uz/uz/internet-banking/index.php"
                    target="_blank"
                    class="dropdown--content-items"
                  >
                    <span>InternetBank юр.</span>
                    <img src="~static/img/svg/arrow-r2.png" alt="" />
                  </a>
                  <a
                    href="https://client.qqb.uz:9994/PersonalCabinet/"
                    target="_blank"
                    class="dropdown--content-items"
                  >
                    <span>Персоналный кабинет</span>
                    <img src="~static/img/svg/arrow-r2.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Language from './component/Language'
import Search from './component/Search'
import Navigation from './component/Navigation'

export default {
  components: {
    Language,
    Search,
    Navigation,
  },
  watch: {
    '$i18n.locale': {
      immediate: true,
      handler() {
        this.loadMenu()
        console.log('loading menu')
      },
    },
  },
  mounted() {
    this.loadMenu()
  },
  data() {
    return {
      menu: {
        menuItems: [],
      },
      top_menu: {
        menuItems: [],
      },
    }
  },
  methods: {
    loadMenu() {
      this.$axios.$get('/menus/main-menu').then((res) => {
        this.menu = res.data
      })

      this.$axios.$get('/menus/top-menu').then((res) => {
        this.top_menu = res.data
      })
    },
  },
}
</script>
