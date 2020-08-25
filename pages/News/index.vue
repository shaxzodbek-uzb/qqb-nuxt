<template>
  <div class="news-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="news-page-container pt-60">
        <h1 class="title-50">Новости</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>Новости</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Мероприятия и Тендеры</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Объявления</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Аудио и видео</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <News />
            </div>
            <div role="tabpanel">3445</div>
            <div role="tabpanel">3445bb</div>
            <div role="tabpanel">3445aa</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '~/utils/frontend'
import News from '~/components/TabItems/News'

export default {
  components: {
    News,
  },
  mounted() {
    setOffset()
    tabNavigation()
  },
}
</script>

<style></style>
