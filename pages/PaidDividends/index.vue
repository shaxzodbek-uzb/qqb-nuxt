<template>
  <div class="documents-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="documents-page-container pt-60">
        <h1 class="title-50">
          Сведения о начисленных и выплаченных дивидендах
        </h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>Сведения о начисленных и выплаченных дивидендах</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <div class="document-contract-tab-content">
                <div class="tab-document-items rounded">
                  <div class="tab-document-header d-flex">
                    <div class="item-badge">
                      <div class="app-badge badge-danger">PDF</div>
                    </div>
                    <div class="item-text f-fill">
                      <h1>Пользование банкоматами</h1>
                      <span>PDF, 204.5 KB</span>
                    </div>
                    <div class="item-more">
                      <router-link
                        to="/"
                        class="main-bg d-flex align-center btn rounded pointer transition"
                      >
                        <span>{{ $t('Подробнее') }}</span>
                      </router-link>
                    </div>
                  </div>
                </div>

                <div class="tab-document-items rounded">
                  <div class="tab-document-header d-flex">
                    <div class="item-badge">
                      <div class="app-badge badge-success">ZIP</div>
                    </div>
                    <div class="item-text f-fill">
                      <h1>Пользование банкоматами</h1>
                      <span>PDF, 204.5 KB</span>
                    </div>
                    <div class="item-more">
                      <router-link
                        to="/"
                        class="main-bg d-flex align-center btn rounded pointer transition"
                      >
                        <span>Скачать</span>

                        <img
                          class="d-block"
                          style="margin-left: 20px;"
                          src="~/static/img/svg/download-icon.png"
                          alt
                        />
                      </router-link>
                    </div>
                  </div>
                </div>

                <div class="tab-document-items rounded">
                  <div class="tab-document-header d-flex">
                    <div class="item-badge">
                      <div class="app-badge badge-danger">PDF</div>
                    </div>
                    <div class="item-text f-fill">
                      <h1>Онлайн заявление на получение кредита</h1>
                      <span>PDF, 204.5 KB</span>
                    </div>
                    <div class="item-more">
                      <router-link
                        to="/"
                        class="main-bg d-flex align-center btn rounded pointer transition"
                      >
                        <span>{{ $t('Подробнее') }}</span>
                      </router-link>
                    </div>
                  </div>
                </div>

                <div class="tab-document-items rounded">
                  <div class="tab-document-header d-flex">
                    <div class="item-badge">
                      <div class="app-badge badge-danger">PDF</div>
                    </div>
                    <div class="item-text f-fill">
                      <h1>
                        Продажа иностранной валюты физическим лицам-резидентам
                      </h1>
                      <span>PDF, 204.5 KB</span>
                    </div>
                    <div class="item-more">
                      <router-link
                        to="/"
                        class="main-bg d-flex align-center btn rounded pointer transition"
                      >
                        <span>{{ $t('Подробнее') }}</span>
                      </router-link>
                    </div>
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

export default {
  mounted() {
    setOffset()
    tabNavigation()
  },
}
</script>

<style></style>
