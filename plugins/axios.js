import config from '~/nuxt.config.js'

export default function ({ $axios, redirect }) {
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
    config.dev ? 'http://manage.qqb.test/api' : 'http://manage.qqb.uz/api'
  )
  $axios.setHeader('Content-Type', 'application/json')
}
