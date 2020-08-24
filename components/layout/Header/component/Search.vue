<template>
  <div class="search-wrap">
    <button class="d-block pointer p-relative" ref="searchButton">
      <img
        src="/img/svg/search-icon.png"
        class="search-icon d-block"
        alt="Search Icon"
      />
      <img
        src="/img/svg/search-white.png"
        class="search-icon d-block p-absolute white-icon"
        alt="Search Icon"
      />
      <img src="/img/svg/times-icon.png" class="times-icon" alt="Times Icon" />
    </button>

    <div class="search-wrap__field p-fixed w-100" ref="searchContent">
      <div class="container">
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

        <div class="row search-block-row">
          <div class="col-xl-3">
            <div class="search-block-aside">
              <h1>О БАНКЕ</h1>
            </div>
          </div>
          <div class="col-xl-9">
            <div class="search-items-wrap">
              <nuxt-link to="/" class="anchor-items d-block"
                >История банка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Функции банка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Структура банка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Совет банка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Правление банка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Филиалы банка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Функции управления</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Внутренный аудит</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Ревизионная комиссия</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Реквизиты банка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Вакансии</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Финансовые показатели</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Обращение Председателя Правления</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Лицензии</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Существенные факты</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Устав банка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Банки-корреспонденты</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Политика системы менеджмента качества</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Совет лидеров Союз молодёжа банка</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="row search-block-row">
          <div class="col-xl-3">
            <div class="search-block-aside">
              <h1>Частным лицам</h1>
            </div>
          </div>
          <div class="col-xl-9">
            <div class="search-items-wrap">
              <nuxt-link to="/" class="anchor-items d-block"
                >Денежные переводы</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >MoneyGram</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Western Union</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block">Контакт</nuxt-link>
              <nuxt-link to="/" class="anchor-items d-block"
                >Золотая корона</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Пластиковые карточки</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Международные пластиковые карты “VISA CLASSIC”</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Кобейджинговая карта</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Банкоматы</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Инфокиоски</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block">Вклады</nuxt-link>
              <nuxt-link to="/" class="anchor-items d-block"
                >Кредитование</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Ипотечные кредиты по ТПСМ</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Ипотечные кредиты в рамках нового порядка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Валютно-обменные пункты</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="row search-block-row">
          <div class="col-xl-3">
            <div class="search-block-aside">
              <h1>КОРПОРАТИВНЫМ КЛИЕНТАМ</h1>
            </div>
          </div>
          <div class="col-xl-9">
            <div class="search-items-wrap">
              <nuxt-link to="/" class="anchor-items d-block"
                >Денежные переводы</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >MoneyGram</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Western Union</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block">Контакт</nuxt-link>
              <nuxt-link to="/" class="anchor-items d-block"
                >Золотая корона</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Пластиковые карточки</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Международные пластиковые карты “VISA CLASSIC”</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Кобейджинговая карта</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Банкоматы</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Инфокиоски</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block">Вклады</nuxt-link>
              <nuxt-link to="/" class="anchor-items d-block"
                >Кредитование</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Ипотечные кредиты по ТПСМ</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Ипотечные кредиты в рамках нового порядка</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Валютно-обменные пункты</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="row search-block-row">
          <div class="col-xl-3">
            <div class="search-block-aside">
              <h1>ИНТЕРАКТИВНЫЕ УСЛУГИ</h1>
            </div>
          </div>
          <div class="col-xl-9">
            <div class="search-items-wrap">
              <nuxt-link to="/" class="anchor-items d-block"
                >Расчетно-кассовое обслуживание</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Интернет банкинг/ Банк-клиент</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Кредитование</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Международные операции</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Документарные операции</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Международные договоры</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Корпоративные пластиковые карты</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Депозиты</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Депозитные сертификаты</nuxt-link
              >
              <nuxt-link to="/" class="anchor-items d-block"
                >Invitation Page</nuxt-link
              >
            </div>
          </div>
        </div>

        <div class="search-block-footer">
          <nuxt-link to="/" class="d-block">ГАЛЕРЕЯ</nuxt-link>
          <nuxt-link to="/" class="d-block">О банке</nuxt-link>
          <nuxt-link to="/" class="d-block">Новости</nuxt-link>
          <nuxt-link to="/" class="d-block">Работа</nuxt-link>
          <nuxt-link to="/" class="d-block">Контакты</nuxt-link>
          <nuxt-link to="/" class="d-block">Помощь</nuxt-link>
          <nuxt-link to="/" class="d-block">ПРЕСС-ЦЕНТР</nuxt-link>
          <nuxt-link to="/" class="d-block">АНОНИМНОЕ ОБРАЩЕНИЕ</nuxt-link>
          <nuxt-link to="/" class="d-block">ИНТЕРНЕТ БАНКИНГ</nuxt-link>
          <nuxt-link to="/" class="d-block">Форум</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { search } from '@/utils/frontend'

export default {
  mounted() {
    // const { searchButton, searchContent } = this.$refs
    // Initialize header search function
    // search(searchButton, searchContent)
  },
}
</script>

<style>
.search-wrap {
  margin-right: calc(16px + 0.677vw);
}
</style>
