<template>
  <div class="search-wrap">
    <button
      class="d-block pointer p-relative"
      style="outline: none;"
      ref="searchButton"
    >
      <img
        src="/img/svg/search-icon.png"
        class="search-icon"
        alt="Search Icon"
      />
      <img
        src="/img/svg/search-white.png"
        class="search-icon p-absolute white-icon"
        alt="Search Icon"
      />
      <img src="/img/svg/times-icon.png" class="times-icon" alt="Times Icon" />
    </button>

    <div class="search-wrap__field p-fixed w-100" ref="searchContent">
      <div class="container">
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

        <div class="search-form d-flex align-center rounded">
          <img src="/img/svg/search.png" alt="Search Icon" class="d-block" />
          <input type="text" placeholder="Искать..." class="f-fill" />
          <p class="search-form-text">Что вы хотите найти?</p>
          <button type="submit" class="btn main-bg rounded transition pointer">
            Искать
          </button>
        </div>

        <div class="search-form-result">
          <nuxt-link to="/" class="form-result-items d-block transition">
            <span>Ре</span>квизиты банка
          </nuxt-link>
          <nuxt-link to="/" class="form-result-items d-block transition">
            <span>Ре</span>визионная комиссия
          </nuxt-link>
        </div>

        <div class="menu-items-wrap">
          <div class="desktop-menu-container">
            <div class="desktop-menu--items">
              <div class="row">
                <div class="col-xl-3 col-lg-12">
                  <div class="search-block-aside">
                    <h1>О БАНКЕ</h1>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                  <nuxt-link to="/" class="menu--item">История банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item">Функции банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item"
                    >Структура банка</nuxt-link
                  >
                </div>
                <div class="col-xl-3 col-lg-4">
                  <nuxt-link to="/" class="menu--item">История банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item">Функции банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item"
                    >Структура банка</nuxt-link
                  >
                </div>
                <div class="col-xl-3 col-lg-4">
                  <nuxt-link to="/" class="menu--item">История банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item">Функции банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item"
                    >Структура банка</nuxt-link
                  >
                </div>
              </div>
            </div>

            <div class="desktop-menu--items">
              <div class="row">
                <div class="col-xl-3 col-lg-12">
                  <div class="search-block-aside">
                    <h1>ЧАСТНЫМ ЛИЦАМ</h1>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4">
                  <nuxt-link to="/" class="menu--item">История банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item">Функции банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item"
                    >Структура банка</nuxt-link
                  >
                </div>
                <div class="col-xl-3 col-lg-4">
                  <nuxt-link to="/" class="menu--item">История банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item">Функции банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item"
                    >Структура банка</nuxt-link
                  >
                </div>
                <div class="col-xl-3 col-lg-4">
                  <nuxt-link to="/" class="menu--item">История банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item">Функции банка</nuxt-link>
                  <nuxt-link to="/" class="menu--item"
                    >Структура банка</nuxt-link
                  >
                </div>
              </div>
            </div>
          </div>

          <div class="mobile-menu-container">
            <div class="mobile-menu--items mb-4">
              <b-button v-b-toggle.collapse-1 variant="light" class="w-100">
                <div
                  class="search-block-aside d-flex align-center justify-content-between"
                >
                  <h1 class="mb-0">О БАНКЕ</h1>

                  <div class="arrow-down"></div>
                </div>
              </b-button>
              <b-collapse id="collapse-1" class="mt-2">
                <div class="row my-4">
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link to="/" class="menu--item"
                      >История банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Функции банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Структура банка</nuxt-link
                    >
                  </div>
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link to="/" class="menu--item"
                      >История банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Функции банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Структура банка</nuxt-link
                    >
                  </div>
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link to="/" class="menu--item"
                      >История банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Функции банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Структура банка</nuxt-link
                    >
                  </div>
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link to="/" class="menu--item"
                      >История банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Функции банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Структура банка</nuxt-link
                    >
                  </div>
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link to="/" class="menu--item"
                      >История банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Функции банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Структура банка</nuxt-link
                    >
                  </div>
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link to="/" class="menu--item"
                      >История банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Функции банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Структура банка</nuxt-link
                    >
                  </div>
                </div>
              </b-collapse>
            </div>

            <div class="mobile-menu--items mb-4">
              <b-button v-b-toggle.collapse-2 variant="light" class="w-100">
                <div
                  class="search-block-aside d-flex align-center justify-content-between"
                >
                  <h1 class="mb-0">ЧАСТНЫМ ЛИЦАМ</h1>

                  <div class="arrow-down"></div>
                </div>
              </b-button>
              <b-collapse id="collapse-2" class="mt-2">
                <div class="row my-4">
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link to="/" class="menu--item"
                      >История банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Функции банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Структура банка</nuxt-link
                    >
                  </div>
                  <div class="col-xl-3 col-md-6 mb-3">
                    <nuxt-link to="/" class="menu--item"
                      >История банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Функции банка</nuxt-link
                    >
                    <nuxt-link to="/" class="menu--item"
                      >Структура банка</nuxt-link
                    >
                  </div>
                </div>
              </b-collapse>
            </div>
          </div>
        </div>

        <div class="search-block-footer">
          <!-- <nuxt-link to="/" class="d-block">ГАЛЕРЕЯ</nuxt-link>
          <nuxt-link to="/" class="d-block">О банке</nuxt-link>
          <nuxt-link to="/" class="d-block">Новости</nuxt-link>
          <nuxt-link to="/" class="d-block">Работа</nuxt-link>
          <nuxt-link to="/" class="d-block">Контакты</nuxt-link>
          <nuxt-link to="/" class="d-block">Помощь</nuxt-link>
          <nuxt-link to="/" class="d-block">ПРЕСС-ЦЕНТР</nuxt-link>
          <nuxt-link to="/" class="d-block">АНОНИМНОЕ ОБРАЩЕНИЕ</nuxt-link>
          <nuxt-link to="/" class="d-block">ИНТЕРНЕТ БАНКИНГ</nuxt-link>
          <nuxt-link to="/" class="d-block">Форум</nuxt-link>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { search } from '@/utils/frontend'
import Language from './Language'

export default {
  components: {
    Language,
  },
  mounted() {
    const { searchButton, searchContent } = this.$refs
    // Initialize header search function
    search(searchButton, searchContent)
  },
}
</script>

<style>
.search-wrap {
  margin-right: calc(16px + 0.677vw);
}
</style>
