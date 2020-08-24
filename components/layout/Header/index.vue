<template>
  <header class="header p-fixed w-100">
    <div class="header-top">
      <div class="container" data-resize="resize">
        <div class="row align-center header-row">
          <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-10 header-cell-1">
            <nuxt-link to="/" class="header-logo d-block p-relative">
              <img src="~/static/img/logo.png" alt="Logo" class="d-block" />
              <img
                src="~/static/img/logo-white.png"
                alt="Logo"
                class="logo-white d-block p-absolute transition"
              />
            </nuxt-link>
          </div>
          <div class="col-xl-7 header-cell-2">
            <nav class="header-navigation">
              <ul class="d-flex">
                <li>
                  <div
                    class="header-navigation-dropdown dropdown-init pointer p-relative"
                  >
                    <span>Физическим лицам</span>
                    <img src="~/static/img/svg/arrow-down.png" alt />
                    <img
                      src="~/static/img/svg/arrow-white.png"
                      class="white-icon-5 p-absolute"
                      alt
                    />

                    <div class="dropdown--content">
                      <nuxt-link
                        :to="{ path: 'Contributions' }"
                        class="dropdown--content-items"
                        >Вклады</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'InternationalMoneyTransfers' }"
                        class="dropdown--content-items"
                        >Международные денежные переводы</nuxt-link
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="header-navigation-dropdown dropdown-init pointer p-relative"
                  >
                    <span>Корпорациям</span>
                    <img src="~/static/img/svg/arrow-down.png" alt />
                    <img
                      src="~/static/img/svg/arrow-white.png"
                      class="white-icon-5 p-absolute"
                      alt
                    />

                    <div class="dropdown--content">
                      <nuxt-link
                        :to="{ path: 'Tariff' }"
                        class="dropdown--content-items"
                        >Тарифы</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'Deposits' }"
                        class="dropdown--content-items"
                        >Депозиты</nuxt-link
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="header-navigation-dropdown dropdown-init pointer p-relative"
                  >
                    <span>Акционерам и инвесторам</span>
                    <img src="~/static/img/svg/arrow-down.png" alt />
                    <img
                      src="~/static/img/svg/arrow-white.png"
                      class="white-icon-5 p-absolute"
                      alt
                    />

                    <div class="dropdown--content">
                      <nuxt-link
                        :to="{ path: 'FinancialStatementsIFRS' }"
                        class="dropdown--content-items"
                        >Финансовая отчетность МСФО</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'EssentialFacts' }"
                        class="dropdown--content-items"
                        >Существенные факты</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'BusinessPlan' }"
                        class="dropdown--content-items"
                        >Бизнес-план</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'PaidDividends' }"
                        class="dropdown--content-items"
                        >Сведения о начисленных и выплаченных
                        дивидендах</nuxt-link
                      >
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    class="header-navigation-dropdown dropdown-init pointer p-relative"
                  >
                    <span>Интерактивные услуги</span>
                    <img src="~/static/img/svg/arrow-down.png" alt />
                    <img
                      src="~/static/img/svg/arrow-white.png"
                      class="white-icon-5 p-absolute"
                      alt
                    />

                    <div class="dropdown--content">
                      <nuxt-link
                        :to="{ path: 'News' }"
                        class="dropdown--content-items"
                        >Новости</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'PollsArchive' }"
                        class="dropdown--content-items"
                        >Архив опросов</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'CreditApplication' }"
                        class="dropdown--content-items"
                        >Заявка на кредитный отпуск для юридических
                        лиц</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'AnonymousAppeal' }"
                        class="dropdown--content-items"
                        >Анонимное Обращние</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'ExchangeRates' }"
                        class="dropdown--content-items"
                        >Курсы валют</nuxt-link
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
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
            <nav class="header-navigation">
              <ul class="d-flex">
                <li>
                  <nuxt-link
                    :to="{ path: 'Cards' }"
                    class="header-navigation--active d-block p-relative"
                    >Карты</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    :to="{ path: 'Credits' }"
                    class="d-block p-relative"
                    >Кредиты</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    :to="{ path: 'Contributions' }"
                    class="d-block p-relative"
                    >Вклады</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    :to="{ path: 'Documents' }"
                    class="d-block p-relative"
                    >Документы</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link :to="{ path: 'Tariff' }" class="d-block p-relative"
                    >Тарифы</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    :to="{ path: 'Gallery' }"
                    class="d-block p-relative"
                    >Галерея</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    :to="{ path: 'Deposits' }"
                    class="d-block p-relative"
                    >Депозиты</nuxt-link
                  >
                </li>
                <li>
                  <div
                    class="header-navigation-dropdown dropdown-init pointer p-relative"
                  >
                    <span>О банке</span>
                    <img src="~/static/img/svg/arrow-down.png" alt />
                    <img
                      src="~/static/img/svg/arrow-white.png"
                      class="white-icon-5 p-absolute"
                      alt
                    />

                    <div class="dropdown--content">
                      <nuxt-link
                        :to="{ path: 'FinancialPerformance' }"
                        class="dropdown--content-items"
                        >Финансовые показатели</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'Vacancies' }"
                        class="dropdown--content-items"
                        >Вакансии</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'BankCouncil' }"
                        class="dropdown--content-items"
                        >Совет банка</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'Filials' }"
                        class="dropdown--content-items"
                        >Филиалы</nuxt-link
                      >
                      <nuxt-link
                        :to="{ path: 'BankHistory' }"
                        class="dropdown--content-items"
                        >История банка</nuxt-link
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
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
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Language from './component/Language'
import Search from './component/Search'

export default {
  components: {
    Language,
    Search,
  },
  mounted() {},
}
</script>

<style></style>
