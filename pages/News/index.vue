<template>
  <div class="news-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="news-page-container pt-60">
        <h1 class="title-50">Новости</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer"
                data-toggle="tab"
                v-for="item in news_categories"
                :key="item.id"
                :class="{ active: item.id == active_item }"
                @click="active_item = item.id"
              >
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <News :category_id="active_item" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '~/utils/frontend'
import News from '~/components/TabItems/News/index'

export default {
  data() {
    return {
      news_categories: [],
      active_item: 0,
    }
  },
  components: {
    News,
  },
  mounted() {
    setOffset()
    tabNavigation()
    let me = this
    this.$axios.$get(`/news-categories`).then((res) => {
      while (me.news_categories.pop());
      me.news_categories.push(...res.data.news_categories)
      me.active_item = res.data.news_categories[0].id
    })
  },
}
</script>

<style></style>
