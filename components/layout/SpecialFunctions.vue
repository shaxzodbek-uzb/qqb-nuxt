<template>
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
