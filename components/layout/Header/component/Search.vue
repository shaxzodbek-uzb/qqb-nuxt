<template>
  <div class="search-wrap" :class="{ 'search-enabled': show }">
    <button
      class="d-block pointer p-relative"
      style="outline: none;"
      ref="searchButton"
    >
      <img
        src="/img/svg/search-icon.png"
        class="search-icon"
        alt="Search Icon"
        @click="showSearch"
      />
      <img
        src="/img/svg/search-white.png"
        class="search-icon p-absolute white-icon"
        alt="Search Icon"
        @click="showSearch"
      />
      <!-- <img
        src="/img/svg/times-icon.png"
        class="times-icon"
        alt="Times Icon"
        @click="hideSearch"
      /> -->
    </button>

    <div
      class="search-wrap__field p-fixed w-100"
      ref="searchContent"
      :class="{ active: show }"
    >
      <div class="container">
        <header class="header p-fixed w-100">
          <div class="header-top header-top__search d-flex align-center">
            <div class="container">
              <div class="row align-center header-row">
                <div
                  class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-10 header-cell-1"
                >
                  <nuxt-link
                    :to="localePath('/')"
                    class="header-logo d-block p-relative"
                  >
                    <img
                      src="~/static/img/logo.png"
                      alt="Logo"
                      class="d-block"
                    />
                    <img
                      src="~/static/img/logo-white.png"
                      alt="Logo"
                      class="logo-white d-block p-absolute transition"
                    />
                  </nuxt-link>
                </div>
                <div
                  class="col-xl-9 col-lg-8 col-md-6 col-sm-6 col-2 header-cell-3"
                >
                  <div
                    class="header-toolbar header-toolbar__search d-flex align-center"
                  >
                    <img
                      src="/img/svg/times-icon.png"
                      class="times-icon pointer"
                      alt="Times Icon"
                      @click="hideSearch"
                    />
                    <Language />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="mobile-user-tools align-center">
          <!-- <div class="mobile-qqb-online">
            <button
              class="d-flex align-center btn btn-border rounded pointer transition"
            >
              <span style="margin-right: 1rem;">QQB-Онлайн</span>
            </button>
          </div>-->
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
                  >InternetBank физ.</a
                >
                <a
                  href="http://qishloqqurilishbank.uz/uz/internet-banking/index.php"
                  target="_blank"
                  class="dropdown--content-items"
                  >InternetBank юр.</a
                >
                <a
                  href="https://client.qqb.uz:9994/PersonalCabinet/"
                  target="_blank"
                  class="dropdown--content-items"
                  >Персоналный кабинет</a
                >
              </div>
            </div>
          </div>
          <div class="mobile-lang">
            <Language />
          </div>
        </div>

        <div class="search-form d-flex align-center rounded mb-5">
          <img src="/img/svg/search.png" alt="Search Icon" class="d-block" />
          <input
            type="text"
            :placeholder="$t('Искать') + '...'"
            class="f-fill"
          />
          <p class="search-form-text">{{ $t('Что вы хотите найти?') }}</p>
          <button type="submit" class="btn main-bg rounded transition pointer">
            {{ $t('Искать') }}
          </button>
        </div>

        <div class="menu-items-wrap">
          <div class="desktop-menu-container">
            <div
              class="desktop-menu--items"
              v-for="item in menu.menuItems"
              :key="item.id"
            >
              <div class="row">
                <div class="col-xl-3 col-lg-12">
                  <div class="search-block-aside">
                    <h1>{{ item.name }}</h1>
                  </div>
                </div>
                <div class="col-xl-9 col-lg-12">
                  <div class="row">
                    <div
                      class="col-xl-3 col-lg-4"
                      v-for="child in item.children"
                      :key="child.id"
                      v-show="seachText(child.name)"
                    >
                      <nuxt-link
                        :to="localePath(`/${child.value}`)"
                        class="menu--item"
                        >{{ child.name }}</nuxt-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mobile-menu-container">
            <div
              class="mobile-menu--items mb-4"
              v-for="item in menu.menuItems"
              :key="item.id"
            >
              <b-button
                v-b-toggle="'collapse-' + item.id"
                variant="light"
                class="w-100"
              >
                <div
                  class="search-block-aside d-flex align-center justify-content-between"
                >
                  <h1 class="mb-0">{{ item.name }}</h1>

                  <div class="arrow-down"></div>
                </div>
              </b-button>
              <b-collapse :id="'collapse-' + item.id" class="mt-2">
                <div class="row my-4">
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link
                      :to="localePath(`/${child.value}`)"
                      class="menu--item"
                      v-for="child in item.children"
                      :key="child.id"
                    >
                      {{ child.name }}
                    </nuxt-link>
                  </div>
                </div>
              </b-collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Language from './Language'

export default {
  data() {
    return {
      menu: [],
      search_text: '',
      show: false,
    }
  },
  components: {
    Language,
  },
  mounted() {
    this.$axios.$get('/menus/top-menu').then((res) => {
      this.menu = res.data
    })
  },
  watch: {
    $route() {
      this.show = false
    },
  },
  methods: {
    seachText(str) {
      return str.includes(this.search_text)
    },
    showSearch() {
      this.show = true
      document.querySelector('body').classList.add('search-active')
    },
    hideSearch() {
      this.show = false
      document.querySelector('body').classList.remove('search-active')
    },
  },
}
</script>

<style>
.search-wrap {
  margin-right: calc(16px + 0.677vw);
}
</style>
