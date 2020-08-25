<template>
  <div id="app" class="app d-flex f-column">
    <TheHeader />
    <TheFeedback />
    <Nuxt class="app-router f-fill" />
    <TheCurrencyRates />

    <div v-if="isMobileContent" class="mobile-content">
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from '~/components/layout/Header'
import TheFooter from '~/components/layout/Footer'
import TheCurrencyRates from '~/components/layout/CurrencyRates'
import TheFeedback from '~/components/layout/Feedback'
import { /*setVH,*/ dropdown } from '~/utils/frontend'

export default {
  data() {
    return {
      isMobileContent: false,
    }
  },
  components: {
    TheHeader,
    TheFooter,
    TheCurrencyRates,
    TheFeedback,
  },
  watch: {
    $route() {
      document.querySelector('body').classList.remove('dark-side')
    },
  },
  mounted() {
    // Initialize functions
    // setVH()
    dropdown()

    function setVH() {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty(`--vh`, `${vh}px`)
    }

    window.addEventListener(`resize`, setVH)

    this.isMobile()
    window.addEventListener(
      'orientationchange',
      () => {
        setTimeout(() => {
          this.isMobile()
        }, 50)
      },
      false
    )
  },
  methods: {
    isMobile() {
      const _bodyWidth = document.querySelector('body').clientWidth

      if (_bodyWidth < 1025) {
        this.isMobileContent = true
      } else {
        this.isMobileContent = false
      }
    },
  },
}
</script>

<style>
.app {
  min-height: 100vh;
}
</style>
