<template>
  <div id="app" class="app d-flex f-column">
    <Loader />
    <TheHeader />
    <TheFeedback />
    <transition name="fade">
      <Nuxt class="app-router f-fill" />
    </transition>

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
import Loader from '~/components/Loader'
import { setVH, dropdown } from '~/utils/frontend'

export default {
  scrollToTop: true,

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
    Loader,
  },
  watch: {
    $route() {
      document.querySelector('body').classList.remove('dark-side')
    },
  },
  mounted() {
    // Initialize functions
    setVH()
    dropdown()

    function iOS() {
      return (
        [
          'iPad Simulator',
          'iPhone Simulator',
          'iPod Simulator',
          'iPad',
          'iPhone',
          'iPod',
        ].includes(navigator.platform) ||
        // iPad on iOS 13 detection
        (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
      )
    }

    if (iOS()) {
      document.querySelector('body').classList.add('is-ios')
    }

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

      this.isMobileContent = _bodyWidth < 1025
    },
  },
}
</script>

<style>
.app {
  min-height: 100vh;
}
</style>
