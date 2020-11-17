<template>
  <div class="news-left">
    <div class="news-search p-relative">
      <input type="text" class="d-block w-100 h-100" />
      <span class="input-placeholder p-absolute transition">{{
        $t('Поиск')
      }}</span>
      <img src="~/static/img/svg/search.png" class="p-absolute" alt />
    </div>

    <div class="news-items-wrap" v-for="item in news" :key="item.id">
      <router-link
        :to="localePath('news/' + item.id)"
        class="news-items d-block"
      >
        <div class="news-items__date d-flex align-center">
          <img src="~/static/img/svg/calendar.png" alt />
          <span>{{ item.created_at }}</span>
        </div>

        <h1>
          {{ item.name }}
        </h1>

        <p>
          {{ item.description }}
        </p>
      </router-link>

      <div class="line-horizontal"></div>
    </div>

    <!-- <div class="content-load" style="margin-bottom: 30px;">
      <button type="button" class="d-block w-100 rounded pointer transition">
        Загрузить еще
      </button>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      news: [],
    }
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
