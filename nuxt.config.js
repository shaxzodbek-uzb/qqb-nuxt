export default {
  dev: process.env.NODE_ENV !== 'production',
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Qishloq Qurilish Bank',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/static/css/main.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    {
      src: '~/plugins/vue-slider-component.js',
      ssr: false,
    },
    { src: '~/plugins/i18n.js' },
    '~/plugins/axios',
    // {
    //   src: '~/plugins/index.js',
    // },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            name: 'English',
            flag: '/img/icon/united-states.png',
          },
          {
            code: 'uz',
            name: "O'zbek",
            flag: '/img/icon/uzbekistan.png',
          },
          {
            code: 'ru',
            name: 'RUssian',
            flag: '/img/icon/russia.png',
          },
        ],
      },
    ],
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        name: 'English',
        flag: '/img/icon/united-states.png',
      },
      {
        code: 'uz',
        name: "O'zbek",
        flag: '/img/icon/uzbekistan.png',
      },
      {
        code: 'ru',
        name: 'RUssian',
        flag: '/img/icon/russia.png',
      },
    ],
    defaultLocale: 'ru',
    vueI18n: {
      fallbackLocale: 'ru',
    },
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  server: {
    host: '0.0.0.0',
    port: 3002,
  },
}
