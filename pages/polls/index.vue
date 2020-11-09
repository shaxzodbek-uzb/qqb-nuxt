<template>
  <div
    class="anonymous-appeal-wrap d-flex"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="news-page-container pt-60">
        <h1 class="title-50">Архив опросов</h1>

        <transition name="fade">
          <div
            class="polls-modal feedback-modal p-fixed w-100 h-100 child-center"
            v-if="active_id"
          >
            <div
              class="feedback-modal-overlay p-fixed w-100 h-100"
              @click="active_id = false"
            ></div>

            <div class="polls-form p-relative bg-white rounded w-100">
              <div class="d-flex align-center">
                <h1>
                  {{ activeItem.name }}
                </h1>

                <img
                  @click="active_id = false"
                  class="pointer"
                  src="~/static/img/svg/times-icon.png"
                  alt
                />
              </div>

              <form class="polls-checkbox-wrap d-flex f-wrap">
                <div
                  class="checkbox-group polls-chekbox"
                  v-for="itm in activeItem.poll_variants"
                  :key="'itm1' + itm.id"
                >
                  <input
                    type="checkbox"
                    :id="'check-' + itm.id"
                    v-model="itm.active"
                  />
                  <label :for="'check-' + itm.id" class="checkbox-wrap">
                    <div class="checkbox-curtain transition">
                      <img src="~/static/img/svg/checkbox-white.png" alt />
                    </div>
                    <span>{{ itm.name }}</span>
                  </label>
                </div>

                <div class="orphan-space-4">
                  <button
                    class="fake-route-button-4 rounded transition pointer"
                  >
                    Отправить сообщение
                  </button>
                </div>
              </form>
            </div>
          </div>
        </transition>
        <div class="polls-wrap">
          <div
            class="polls-items rounded d-flex f-wrap"
            v-for="item in polls"
            :key="'item1' + item.id"
          >
            <div class="polls-items-header f-fill">
              <div class="polls-header-meta">
                <h1>{{ item.name }}</h1>

                <div class="polls-meta-badges d-flex">
                  <div class="news-badge">
                    <img src="~/static/img/svg/calendar.png" alt />
                    <span>{{ item.created_at }}</span>
                  </div>
                  <div class="vacancy-badge">
                    <div class="app-badge">ГОЛОСОВ: {{ item.count }}</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="polls-button">
              <button
                v-if="item.active"
                @click="active_id = item.id"
                class="d-flex align-center btn btn-border rounded pointer transition"
              >
                <span>Голосовать</span>
              </button>
              <button
                v-else
                disabled
                class="d-flex align-center btn btn-border rounded pointer transition"
              >
                <span>Не активен</span>
              </button>
            </div>

            <div class="polls-items-content w-100">
              <h1>Результаты опроса</h1>

              <div
                class="polls-range-items rounded p-relative"
                v-for="itm in item.poll_variants"
                :key="'item2' + itm.id"
              >
                <span class="d-block p-relative text-white"
                  >{{ itm.name }}
                  {{ ((itm.count * 100) / item.count).toFixed(0) }}%</span
                >

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  :style="`width: ${(itm.count * 100) / item.count}%;`"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset } from '~/utils/frontend'

export default {
  computed: {
    activeItem() {
      for (let index = 0; index < this.polls.length; index++) {
        const element = this.polls[index]
        if ((element.id = this.active_id)) {
          return element
        }
      }
      return {}
    },
  },
  data() {
    return {
      active_id: false,
      polls: [],
    }
  },
  mounted() {
    setOffset()
    this.$axios.$get('/polls').then((res) => {
      this.polls = res.data.polls
    })
  },
}
</script>

<style></style>
