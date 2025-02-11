export default function ({ app }) {
  // beforeLanguageSwitch called right before setting a new locale
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    // $axios.setHeader('Content-Language', newLocale)
    console.log(oldLocale, newLocale)
  }
  // onLanguageSwitched called right after a new locale has been set
  app.i18n.onLanguageSwitched = () => {
    // $axios.setHeader('Content-Language', newLocale)
    // location.reload()
  }
}
