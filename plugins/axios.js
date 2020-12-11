import config from '~/nuxt.config.js'

export default function ({ $axios, redirect, app }) {
  /* eslint-disable */
  $axios.onRequest((config) => {
    config.headers.common['Content-Language'] = app.i18n.locale
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  $axios.setBaseURL(
    config.dev ? 'http://manage.qqb.test/api' : 'https://admin.parkent.ru/api'
  )
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('Content-Language', app.i18n.locale)
}
