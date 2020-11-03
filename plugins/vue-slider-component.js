import Vue from 'vue'
import VueSlider from 'vue-slider-component'

Vue.component('vue-slider', VueSlider)

import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'
Vue.component('v-select', vSelect)

import 'vue-slider-component/theme/default.css'

import '@morioh/v-lightbox/dist/lightbox.css'

// import '@morioh/v-lightbox/dist/lightbox.css'
import Lightbox from '@morioh/v-lightbox'

// global register
Vue.use(Lightbox)

import VueSimpleAccordion from 'vue-simple-accordion'
import 'vue-simple-accordion/dist/vue-simple-accordion.css'

Vue.use(VueSimpleAccordion, {
  // ... Options go here
})
