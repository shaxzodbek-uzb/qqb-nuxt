<template>
  <div class="currency-wrap p-fixed w-100 main-bg">
    <div class="container">
      <div class="row align-center">
        <div class="col-xl-7 col-lg-5 col-md-4 col-sm-6 col-5 currency-cell-1">
          <div class="currency-container d-flex align-center">
            <nuxt-link
              :to="{ path: 'ExchangeRates' }"
              class="btn btn-sm rounded"
            >
              <span>Курсы валют</span>
            </nuxt-link>

            <div class="currency-dropdown dropdown dropdown-init">
              <button class="btn btn-sm rounded pointer d-flex align-center">
                <span style="margin-right: 0.35rem;">USD</span>
                <img src="/img/svg/arrow-down-white.png" alt />
              </button>

              <div class="dropdown--content" data-position="top right">
                <a class="dropdown-items d-flex align-center f-between pointer">
                  <span>USD</span>
                  <img
                    src="/img/icon/united-states.png"
                    alt="Uzbekistan Flag"
                  />
                </a>
                <a class="dropdown-items d-flex align-center f-between pointer">
                  <span>RU</span>
                  <img src="/img/icon/russia.png" alt="Russia Flag" />
                </a>
                <a class="dropdown-items d-flex align-center f-between pointer">
                  <span>EUR</span>
                  <img src="/img/icon/france.png" alt="USA Flag" />
                </a>
              </div>
            </div>

            <div class="currency-item">
              <span>Покупка</span>
              <div class="currency-item__text d-flex align-center">
                <img src="/img/svg/grow-up.png" alt="Icon" />
                <span>10153.19</span>
              </div>
            </div>

            <div class="currency-item">
              <span>Продажа</span>
              <div class="currency-item__text d-flex align-center">
                <img src="/img/svg/grow-down.png" alt="Icon" />
                <span>10130.00</span>
              </div>
            </div>

            <div class="currency-item">
              <span>Курс ЦБ</span>
              <div class="currency-item__text d-flex align-center">
                <img src="/img/svg/grow-down.png" alt="Icon" />
                <span>10200.00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-4 col-md-5 col-sm-2 col-2 currency-cell-2">
          <div class="currency-wrap-right d-flex align-center">
            <div class="p-relative dropdown-init pointer">
              <button class="btn btn-sm d-flex align-center text-white pointer">
                <img src="/img/svg/eye.png" alt="Eye Icon" />
                <span class="facilities-text" style="margin: 0 5px;"
                  >Версия для слабовидящих</span
                >
                <img src="/img/svg/arrow-down-white.png" alt />
              </button>

              <div
                class="dropdown--content special-facilities-content"
                data-position="top right"
              >
                <div class="special-facilities">
                  <span>Вид:</span>

                  <div class="checkbox-group" @click="defaultMode">
                    <input type="radio" id="check-11" name="radio" checked />
                    <label for="check-11" class="checkbox-wrap">
                      <div class="checkbox-curtain transition">
                        <img src="/img/svg/check.png" alt />
                      </div>
                      <span>Обычная версия</span>
                    </label>
                  </div>

                  <div class="checkbox-group" @click="grayscaleMode">
                    <input type="radio" id="check-22" name="radio" />
                    <label for="check-22" class="checkbox-wrap">
                      <div class="checkbox-curtain transition">
                        <img src="/img/svg/check.png" alt />
                      </div>
                      <span>Черно-белая версия</span>
                    </label>
                  </div>

                  <div class="facilities-font d-flex align-center">
                    <span>Размер шрифта:</span>

                    <div class="facilities-font-control d-flex">
                      <div
                        class="font-control-items rounded child-center"
                        data-decrease="decrease"
                      >
                        A-
                      </div>
                      <div
                        class="font-control-items rounded child-center"
                        data-default="inherit"
                      >
                        A
                      </div>
                      <div
                        class="font-control-items rounded child-center"
                        data-increase="increase"
                      >
                        A+
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="currency-cell-3">
          <div class="currency-wrap-right d-flex align-center">
            <div class="call-center-phones p-relative dropdown-init pointer">
              <div class="btn btn-border rounded transition text-white pointer">
                +998 (78) 150 10 01
              </div>

              <div class="dropdown--content" data-position="top right">
                <div class="center-phones d-flex align-center">
                  <a
                    href="tel:+998781501001"
                    class="center-phones__items text-white"
                  >
                    <span>Телефоны доверия</span>
                    <h1>+998 78 150-10-01</h1>
                    <p>ПН-ПТ - 9:00 до 18:00</p>
                  </a>
                  <a
                    href="tel:+998781501001"
                    class="center-phones__items text-white"
                  >
                    <span>Телефоны доверия</span>
                    <h1>+998 78 150-10-01</h1>
                    <p>ПН-ПТ - 9:00 до 18:00</p>
                  </a>
                  <a
                    href="tel:+998781501001"
                    class="center-phones__items text-white"
                  >
                    <span>Телефоны доверия</span>
                    <h1>+998 78 150-10-01</h1>
                    <p>ПН-ПТ - 9:00 до 18:00</p>
                  </a>
                  <a
                    href="tel:+998781501001"
                    class="center-phones__items text-white"
                  >
                    <span>Телефоны доверия</span>
                    <h1>+998 78 150-10-01</h1>
                    <p>ПН-ПТ - 9:00 до 18:00</p>
                  </a>
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
export default {
  mounted() {
    const tagArray = [
      'span',
      'p',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'i',
      'b',
      'a',
    ]
    const $container = document.querySelectorAll('.container')

    document
      .querySelector('[data-increase="increase"]')
      .addEventListener('click', function () {
        $container.forEach((el) => {
          const style = getComputedPropertyValue(el, 'max-width')

          el.style.maxWidth = parseFloat(style) + 75 + 'px'
        })

        tagArray.forEach((tag) => {
          const elArray = document.querySelectorAll(tag)

          elArray.forEach((el) => {
            const style = getComputedPropertyValue(el, 'font-size')
            el.style.fontSize = parseFloat(style) + 1 + 'px'
          })
        })
      })

    document
      .querySelector('[data-default="inherit"]')
      .addEventListener('click', function () {
        $container.forEach((el) => {
          el.style.maxWidth = ''
        })

        tagArray.forEach((tag) => {
          const elArray = document.querySelectorAll(tag)

          elArray.forEach((el) => {
            el.style.fontSize = ''
          })
        })
      })

    document
      .querySelector('[data-decrease="decrease"]')
      .addEventListener('click', function () {
        $container.forEach((el) => {
          const style = getComputedPropertyValue(el, 'max-width')

          el.style.maxWidth = parseFloat(style) - 75 + 'px'
        })

        tagArray.forEach((tag) => {
          const elArray = document.querySelectorAll(tag)

          elArray.forEach((el) => {
            const style = getComputedPropertyValue(el, 'font-size')
            el.style.fontSize = parseFloat(style) - 1 + 'px'
          })
        })
      })

    function getComputedPropertyValue(el, prop) {
      return window.getComputedStyle(el, null).getPropertyValue(prop)
    }
  },
  methods: {
    grayscaleMode() {
      document.querySelector('body').classList.add('grayscale-mode')
    },
    defaultMode() {
      document.querySelector('body').classList.remove('grayscale-mode')
    },
  },
}
</script>

<style></style>
