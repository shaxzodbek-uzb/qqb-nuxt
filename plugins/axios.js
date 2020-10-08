import config from '~/nuxt.config.js'

export default function ({ $axios, redirect, app }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })

  $axios.setBaseURL(
    config.dev ? 'https://admin.parkent.ru/api' : 'https://admin.parkent.ru/api'
  )
  $axios.setHeader('Content-Type', 'application/json')
  $axios.setHeader('Content-Language', app.i18n.locale)
}
