<template>
  <div class="news-tab-content">
    <div class="row">
      <div class="col-xl-4">
        <LastNews :category_id="category_id" />
      </div>
      <div class="col-xl-8">
        <Content :category_id="category_id" />
      </div>
    </div>

    <transition name="fade">
      <div class="modal-wrap p-fixed w-100 h-100 child-center" v-if="show">
        <div
          class="modal-overlay p-fixed w-100 h-100"
          @click="show = false"
        ></div>
        <div class="modal-container rounded w-100 p-relative">
          <div class="modal-container-ratio">
            <iframe
              src="https://www.youtube.com/embed/EoViluTzLKA"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="allowfullscreen"
              class="w-100 h-100"
            ></iframe>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Content from './Content'
import LastNews from './LastNews'

export default {
  components: {
    Content,
    LastNews,
  },
  props: {
    category_id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style></style>
