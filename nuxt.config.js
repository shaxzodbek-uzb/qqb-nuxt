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
    script: [
      {
        src: 'https://code.jivosite.com/widget/95D8Br60LX',
        body: true,
      },
      {
        src: 'https://www.gstatic.com/charts/loader.js',
        body: true,
      },
      {
        src: 'https://share.pluso.ru/pluso-like.js',
        body: true,
      },
      {
        src: '~/assets/orphus.js',
        body: true,
      },
    ],
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
    '@/plugins/bootstrap-vue',
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
    // '@nuxtjs/eslint-module',
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
          //   {
          //     code: 'en',
          //     name: 'English',
          //     flag: '/img/icon/united-states.png',
          //   },
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
    '@nuxtjs/axios',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyDQLvnqitj7zPdWE9jtfxLawpZZrbp1A-k',
        // libraries: ['places'],
      },
    ],
    '@nuxtjs/recaptcha',
  ],
  recaptcha: {
    hideBadge: true,
    language: 'ru',
    siteKey: '6Lf5feMZAAAAAIV7mpFFPSt0eKeP1jQL1ZTmUfwV',
    version: 2,
  },
  i18n: {
    locales: [
      //   {
      //     code: 'en',
      //     name: 'English',
      //     file: 'en.js',
      //     flag: '/img/icon/united-states.png',
      //   },
      {
        code: 'uz',
        name: "O'zbek",
        file: 'uz.js',
        flag: '/img/icon/uzbekistan.png',
      },
      {
        code: 'ru',
        name: 'Russian',
        file: 'ru.js',
        flag: '/img/icon/russia.png',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'uz',
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
