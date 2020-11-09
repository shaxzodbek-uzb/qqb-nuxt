<template>
  <div class="news-right">
    <div
      class="news-left-embed p-relative rounded pointer"
      @click="show = !show"
    >
      <img :src="top_news.image" class="p-absolute img-cover d-block" alt />

      <div class="embed-news p-absolute text-white">
        <div class="embed-news__date d-flex align-center">
          <img src="~/static/img/svg/calendar-2.png" alt />
          <span>{{ top_news.created_at }}</span>
        </div>

        <h1>
          {{ top_news.name }}
        </h1>

        <p>
          {{ top_news.description }}
        </p>
      </div>

      <div class="embed-overlay p-absolute w-100 h-100 child-center">
        <!-- <div class="embed-play p-relative child-center transition"></div> -->
      </div>
    </div>

    <div class="row">
      <div class="col-xl-6" v-for="item in news" :key="item.id">
        <router-link
          :to="'/news/' + item.id"
          class="news-items-2 transition rounded d-block"
        >
          <div class="embed-news">
            <div class="embed-news__date d-flex align-center">
              <img src="~/static/img/svg/calendar.png" alt />
              <span>{{ item.created_at }}</span>
            </div>

            <h1>
              {{ item.name }}
            </h1>

            <p>
              {{ item.description }}
            </p>
          </div>
        </router-link>
      </div>

      <!-- <div class="col-xl-12">
        <div class="content-load" style="margin: 30px 0;">
          <button
            type="button"
            class="d-block w-100 rounded pointer transition"
          >
            Загрузить еще
          </button>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    }
  },
  computed: {
    top_news() {
      if (this.news.length == 0) {
        return {}
      } else {
        return this.news[0]
      }
    },
  },
  props: {
    category_id: {
      type: Number,
      default: 0,
    },
  },
  watch: {
    category_id(newVal) {
      if (newVal == 0) return 1
      let me = this
      this.$axios.$get(`/news-categories/${this.category_id}`).then((res) => {
        while (me.news.pop());
        me.news.push(...res.data.news_category.news)
      })
    },
  },
}
</script>

<style></style>
