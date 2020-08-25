<template>
  <div
    class="anonymous-appeal-wrap d-flex"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="news-page-container pt-60">
        <h1 class="title-50">Архив опросов</h1>

        <div class="polls-wrap">
          <div class="polls-items rounded d-flex f-wrap">
            <div class="polls-items-header f-fill">
              <div class="polls-header-meta">
                <h1>Пожалуйста, оцените услугу нашего Колл-центр</h1>

                <div class="polls-meta-badges d-flex">
                  <div class="news-badge">
                    <img src="~/static/img/svg/calendar.png" alt />
                    <span>23.01.2020</span>
                  </div>
                  <div class="vacancy-badge">
                    <div class="app-badge">ГОЛОСОВ: 503</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="polls-button">
              <button
                @click="showPollModal = !showPollModal"
                class="d-flex align-center btn btn-border rounded pointer transition"
              >
                <span>Голосовать</span>
              </button>
            </div>

            <transition name="fade">
              <div
                class="polls-modal feedback-modal p-fixed w-100 h-100 child-center"
                v-if="showPollModal"
              >
                <div
                  class="feedback-modal-overlay p-fixed w-100 h-100"
                  @click="showPollModal = false"
                ></div>

                <div class="polls-form p-relative bg-white rounded w-100">
                  <div class="d-flex align-center">
                    <h1>
                      Пожалуйста, оцените услугу нашего Колл-центр
                    </h1>

                    <img
                      @click="showPollModal = false"
                      class="pointer"
                      src="~/static/img/svg/times-icon.png"
                      alt
                    />
                  </div>

                  <form class="polls-checkbox-wrap d-flex f-wrap">
                    <div class="checkbox-group polls-chekbox">
                      <input type="checkbox" id="check-1" />
                      <label for="check-1" class="checkbox-wrap">
                        <div class="checkbox-curtain transition">
                          <img src="~/static/img/svg/checkbox-white.png" alt />
                        </div>
                        <span>Недопустимо 80%</span>
                      </label>
                    </div>

                    <div class="checkbox-group polls-chekbox">
                      <input type="checkbox" id="check-2" />
                      <label for="check-2" class="checkbox-wrap">
                        <div class="checkbox-curtain transition">
                          <img src="~/static/img/svg/checkbox-white.png" alt />
                        </div>
                        <span>Хорошо 22%</span>
                      </label>
                    </div>

                    <div class="checkbox-group polls-chekbox">
                      <input type="checkbox" id="check-3" />
                      <label for="check-3" class="checkbox-wrap">
                        <div class="checkbox-curtain transition">
                          <img src="~/static/img/svg/checkbox-white.png" alt />
                        </div>
                        <span>Плохо 50%</span>
                      </label>
                    </div>

                    <div class="checkbox-group polls-chekbox">
                      <input type="checkbox" id="check-4" />
                      <label for="check-4" class="checkbox-wrap">
                        <div class="checkbox-curtain transition">
                          <img src="~/static/img/svg/checkbox-white.png" alt />
                        </div>
                        <span>Удовлетворительно 10%</span>
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

            <div class="polls-items-content w-100">
              <h1>Результаты опроса</h1>

              <div class="polls-range-items rounded p-relative">
                <span class="d-block p-relative text-white"
                  >Недопустимо 80%</span
                >

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  style="width: 80%;"
                ></div>
              </div>

              <div class="polls-range-items rounded p-relative">
                <span class="d-block p-relative text-white">Плохо 50%</span>

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  style="width: 50%;"
                ></div>
              </div>

              <div class="polls-range-items rounded p-relative">
                <span class="d-block p-relative text-white">Хорошо 22%</span>

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  style="width: 22%;"
                ></div>
              </div>

              <div class="polls-range-items rounded p-relative">
                <span class="d-block p-relative text-white"
                  >Удовлетворительно 10%</span
                >

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  style="width: 10%;"
                ></div>
              </div>
            </div>
          </div>

          <div class="polls-items rounded d-flex f-wrap">
            <div class="polls-items-header f-fill">
              <div class="polls-header-meta">
                <h1>
                  Какие виды банковских услуг Qishloq Qurilish Bank? больше
                  заинтересованы
                </h1>

                <div class="polls-meta-badges d-flex">
                  <div class="news-badge">
                    <img src="~/static/img/svg/calendar.png" alt />
                    <span>23.01.2020</span>
                  </div>
                  <div class="vacancy-badge">
                    <div class="app-badge">ГОЛОСОВ: 503</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="polls-button">
              <button
                disabled
                class="d-flex align-center btn btn-border rounded pointer transition"
              >
                <span>Не активен</span>
              </button>
            </div>

            <div class="polls-items-content w-100">
              <h1>Результаты опроса</h1>

              <div class="polls-range-items rounded p-relative">
                <span class="d-block p-relative text-white"
                  >Недопустимо 80%</span
                >

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  style="width: 80%;"
                ></div>
              </div>

              <div class="polls-range-items rounded p-relative">
                <span class="d-block p-relative text-white">Плохо 50%</span>

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  style="width: 50%;"
                ></div>
              </div>

              <div class="polls-range-items rounded p-relative">
                <span class="d-block p-relative text-white">Хорошо 22%</span>

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  style="width: 22%;"
                ></div>
              </div>

              <div class="polls-range-items rounded p-relative">
                <span class="d-block p-relative text-white"
                  >Удовлетворительно 10%</span
                >

                <div
                  class="polls-range-track p-absolute h-100 rounded"
                  style="width: 10%;"
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
  data() {
    return {
      showPollModal: false,
    }
  },
  mounted() {
    setOffset()
  },
}
</script>

<style></style>
