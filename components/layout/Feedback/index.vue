<template>
  <div>
    <aside
      class="feedback-wrap p-fixed d-flex align-center f-column pointer"
      @click="show = !show"
    >
      <img src="/img/svg/comment-icon.png" alt="Comment Icon" />
      <span>{{ $t('Обратная связь') }}</span>
    </aside>

    <transition name="fade">
      <div class="feedback-modal p-fixed w-100 h-100 child-center" v-if="show">
        <div
          class="feedback-modal-overlay p-fixed w-100 h-100"
          @click="show = false"
        ></div>

        <div class="feedback-form p-relative bg-white rounded w-100">
          <div class="feedback-form-content">
            <div class="d-flex f-between">
              <h1>{{ $t('Обратная связь') }}</h1>

              <img
                @click="show = false"
                class="mobile-close-icon-2"
                src="/img/svg/times-icon.png"
                alt
              />
            </div>

            <form class="feedback-form-wrap d-flex f-wrap">
              <div class="feedback-form-cell">
                <div class="form-group-wrap">
                  <div
                    class="appeap-form-group form-with-border rounded bg-white p-relative"
                  >
                    <span class="appeal-label d-block">{{
                      $t('Имя и фамилия')
                    }}</span>
                    <input
                      type="text"
                      class="d-block w-100"
                      :placeholder="$t('Имя и фамилия')"
                    />
                  </div>
                </div>

                <div class="form-group-wrap">
                  <div
                    class="appeap-form-group form-with-border rounded bg-white p-relative"
                  >
                    <span class="appeal-label d-block">
                      {{ $t('Номер телефона') }}
                    </span>
                    <input
                      type="text"
                      class="d-block w-100"
                      placeholder="+998"
                    />
                  </div>
                </div>

                <div class="form-group-wrap">
                  <div
                    class="appeap-form-group form-with-border rounded bg-white p-relative"
                  >
                    <span class="appeal-label d-block">
                      {{ $t('Электронная почта') }}
                    </span>
                    <input
                      type="text"
                      class="d-block w-100"
                      placeholder="headoffice@qqb.uz"
                    />
                  </div>
                </div>
              </div>
              <div class="feedback-form-cell">
                <div class="form-group-wrap">
                  <div
                    class="appeap-form-group form-with-border rounded bg-white p-relative"
                  >
                    <span class="appeal-label d-block">
                      {{ $t('Текст обращения') }}
                    </span>
                    <textarea
                      class="d-block w-100"
                      :placeholder="$t('Текст обращения')"
                    ></textarea>
                  </div>
                </div>

                <div class="feedback-form-button">
                  <button
                    type="button"
                    class="transition d-block w-100 h-100 pointer rounded"
                  >
                    {{ $t('Отправить сообщение') }}
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="feedback-form-footer main-bg d-flex align-center">
            <div class="feedback-footer-cell">
              <span>{{ $t('Телефоны доверия') }}</span>
              <h1>+998 78 150-10 01</h1>
              <b>{{ $t('ПН-ПТ - 9:00 до 18:00') }}</b>

              <nuxt-link
                :to="localePath('/')"
                class="feedback-footer-pdf d-flex align-center"
              >
                <b class="text-white">{{ $t('Регламент') }}</b>
                <span class="white-bg">PDF</span>
              </nuxt-link>

              <p>{{ $t('Оценка обслуживания по телефонам доверия') }}</p>
            </div>

            <div class="feedback-footer-cell">
              <span>{{ $t('Колл-центр') }}</span>
              <h1>+998 78 150-93-39</h1>
              <b>{{ $t('ПН-ПТ - 9:00 до 18:00') }}</b>

              <nuxt-link
                :to="localePath('/')"
                class="feedback-footer-pdf d-flex align-center"
              >
                <b class="text-white">{{ $t('Регламент') }}</b>
                <span class="white-bg">PDF</span>
              </nuxt-link>

              <p>{{ $t('Оценка обслуживания по телефонам доверия') }}</p>
            </div>

            <div class="feedback-footer-cell">
              <div class="footer-cell-items">
                <div class="feedback-contact d-flex align-center">
                  <img src="/img/svg/envelope.png" alt />
                  <span>{{ $t('Эл. почта') }}</span>
                </div>
                <h1>headoffice@qqb.uz</h1>
              </div>

              <div class="footer-cell-items">
                <div class="feedback-contact d-flex align-center">
                  <img src="/img/svg/location-2.png" alt />
                  <span>{{ $t('Адрес') }}</span>
                </div>
                <h1>{{ $t('100011, г. Ташкент, ул А. Навои, 18А') }}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style></style>
