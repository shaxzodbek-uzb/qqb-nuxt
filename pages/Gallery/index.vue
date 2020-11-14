<template>
  <div class="gallery-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="gallery-page-container d-flex f-between pt-60">
        <h1 class="title-50">{{ $t('Галерея') }}</h1>

        <div class="gallery-search news-search p-relative">
          <input type="text" class="d-block w-100 h-100" />
          <span class="input-placeholder p-absolute transition">
            {{ $t('Поиск') }}
          </span>
          <img src="~/static/img/svg/search.png" class="p-absolute" alt />
        </div>
      </div>

      <div class="gallery-container">
        <div class="row gallery-items" v-for="item in galleries" :key="item.id">
          <div class="col-xl-3 gallery-left">
            <h1>{{ item.name }}</h1>

            <div class="news-badge">
              <img src="~/static/img/svg/calendar.png" alt />
              <span>23.01.2020</span>
            </div>
          </div>
          <div class="col-xl-9 gallery-right">
            <lightbox :items="item.images.map((image) => image.url)">
            </lightbox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// CBPGridGallery
import { setOffset } from '~/utils/frontend'

export default {
  data() {
    return {
      galleries: [],
    }
  },
  mounted() {
    setOffset()
    let me = this

    this.$axios.$get(`/galleries`).then((res) => {
      while (me.galleries.pop());
      me.galleries.push(...res.data.galleries)
    })
  },
}
</script>

<style></style>
