<template>
  <div class="tab-content-credit-card">
    <div class="tab-document-items rounded">
      <div class="tab-document-header d-flex">
        <div class="item-text f-fill">
          <h1>{{ $t('Потребительский кредит') }}</h1>
          <span>{{ $t('Без первоначального взноса') }}</span>
        </div>
        <div class="card-card-img p-absolute">
          <img src="~/static/img/img-1.png" alt />
        </div>
        <div class="item-more">
          <nuxt-link
            :to="localePath('/credits/show')"
            class="main-bg d-flex align-center btn rounded pointer transition"
          >
            <span>{{ $t('Подробнее') }}</span>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="tab-document-items rounded">
      <div class="tab-document-header d-flex">
        <div class="item-text f-fill">
          <h1>{{ $t('Микрозайм') }}</h1>
          <span>{{
            $t('Микрозаем предоставляется в национальной валюте')
          }}</span>
        </div>
        <div class="card-card-img p-absolute">
          <img src="~/static/img/img-2.png" alt />
        </div>
        <div class="item-more">
          <router-link
            :to="{ name: 'CreditsShow' }"
            class="main-bg d-flex align-center btn rounded pointer transition"
          >
            <span>{{ $t('Подробнее') }}</span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="tab-document-items rounded">
      <div class="tab-document-header d-flex">
        <div class="item-text f-fill">
          <h1>{{ $t('Ипотечные кредиты по ИПСМ') }}</h1>
          <span>
            {{
              $t('Порядок получения доступных жилых домов в сельской местности')
            }}</span
          >
        </div>
        <div class="card-card-img p-absolute">
          <img src="~/static/img/img-1.png" alt />
        </div>
        <div class="item-more">
          <router-link
            :to="{ name: 'CreditsShow' }"
            class="main-bg d-flex align-center btn rounded pointer transition"
          >
            <span>{{ $t('Подробнее') }}</span>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
