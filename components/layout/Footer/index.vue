<template>
  <div
    class="subscribe-slide-wrap p-relative h-100 d-flex f-column"
    data-set="offset"
  >
    <div class="subscribe-slide-header p-relative">
      <div class="content-overlay-4 p-absolute w-100"></div>

      <img
        class="subscribe-full-img p-absolute img-cover"
        src="/img/slide-images/slide-img-4.png"
        alt
      />

      <div class="content-overlay-7 p-absolute w-100 h-100"></div>
      <div class="content-overlay-8 p-absolute w-100 h-100"></div>

      <img
        class="img-line-2 img-cover p-absolute"
        src="/img/svg/line-2.png"
        alt
      />
      <div
        class="subscribe-header-content p-relative h-100 text-white"
        data-set="offset"
        data-offset="top"
      >
        <div class="header-content-text">
          <div class="container">
            <div class="row">
              <div class="col-xl-4">
                <div class="header-content-left">
                  <h1>{{ $t('Подписывайтесь на QQB') }}</h1>
                  <p>
                    {{
                      $t(
                        'Будем отправлять одно письмо в неделю, и никакого спама'
                      )
                    }}
                  </p>
                </div>
              </div>
              <div class="col-xl-8">
                <form>
                  <div class="subscribe-form d-flex align-center rounded">
                    <input
                      class="f-fill text-white"
                      type="text"
                      placeholder="Электронная почта"
                    />
                    <button class="btn btn-border rounded pointer transition">
                      <span class="text-white">{{ $t('Подписаться') }}</span>
                    </button>
                  </div>
                </form>
              </div>

              <div class="subscribe-bottom d-flex align-center f-between w-100">
                <div class="data-update d-flex f-fill">
                  <a href="http://www.gov.uz/uz/" class="data-update__items">
                    <img src="~static/img/icon/f-icon-4.png" alt="" />
                  </a>
                  <a
                    href="http://www.mineconomy.uz/"
                    class="data-update__items"
                  >
                    <img src="~static/img/icon/f-icon-2.png" alt="" />
                  </a>
                  <a href="http://www.cbu.uz/" class="data-update__items">
                    <img src="~static/img/icon/f-icon-1.png" alt="" />
                  </a>
                  <a href="http://e-kommunal.uz/ru/" class="data-update__items">
                    <img src="~static/img/icon/f-icon-5.png" alt="" />
                  </a>
                  <a href="http://my.gov.uz/" class="data-update__items">
                    <img src="~static/img/icon/f-icon-3.png" alt="" />
                  </a>
                </div>

                <div class="socials-meta">
                  <div class="social-wrap d-flex">
                    <nuxt-link
                      :to="localePath('/')"
                      class="social-items child-center"
                    >
                      <img src="/img/svg/white-fb.png" alt />
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('/')"
                      class="social-items child-center"
                    >
                      <img src="/img/svg/white-gp.png" alt />
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('/')"
                      class="social-items child-center"
                    >
                      <img src="/img/svg/white-tw.png" alt />
                    </nuxt-link>
                  </div>
                  <div class="symbols-wrap d-flex">
                    <nuxt-link
                      :to="localePath('/')"
                      class="symbol-items d-flex align-center text-white"
                    >
                      <img src="/img/svg/symbol-1.png" alt />
                      <span>{{ $t('ГЕРБ') }}</span>
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('/')"
                      class="symbol-items d-flex align-center text-white"
                    >
                      <img src="/img/svg/symbol-2.png" alt />
                      <span>{{ $t('ФЛАГ') }}</span>
                    </nuxt-link>
                    <nuxt-link
                      :to="localePath('/')"
                      class="symbol-items d-flex align-center text-white"
                    >
                      <img src="/img/svg/symbol-3.png" alt />
                      <span>{{ $t('ГИМН') }}</span>
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="subscribe-slide-content p-relative f-fill">
      <img class="footer-big-logo p-absolute" src="/img/footer-logo.png" alt />

      <div class="footer-top text-white">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-sm-6 col-6 footer-phone-cell">
              <div class="d-flex align-center">
                <img src="/img/svg/phone-white.png" alt />
                <span>{{ $t('Телефон') }}</span>
              </div>
              <p>+998 (78) 150 93 39</p>
            </div>
            <div class="col-lg-3 col-sm-6 col-6 footer-phone-cell">
              <div class="d-flex align-center">
                <img src="/img/svg/phone-white-2.png" alt />
                <span>{{ $t('Факс') }}</span>
              </div>
              <p>+998 (78) 150 39 93</p>
            </div>
            <div class="col-lg-3 col-sm-6 col-6 footer-phone-cell">
              <div class="d-flex align-center">
                <img src="/img/svg/email-white.png" alt />
                <span>{{ $t('Эл. почта') }}</span>
              </div>
              <p>headoffice@qqb.uz</p>
            </div>
            <div class="col-lg-3 col-sm-6 col-6 footer-phone-cell">
              <div class="d-flex align-center">
                <img src="/img/svg/loc-white.png" alt />
                <span>{{ $t('Адрес') }}</span>
              </div>
              <p>{{ $t('г. Ташкент, ул А. Навои, 18А') }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-body text-white p-relative">
        <div class="container">
          <div class="footer-body-box d-flex">
            <div class="footer-box-items">
              <h1>{{ $t('Информация') }}</h1>
            </div>
            <div
              class="footer-box-items"
              v-for="item in menu.menuItems"
              :key="item.id"
            >
              <nuxt-link
                :to="localePath(`/${child.value}`)"
                class="footer-item-anchor d-block"
                v-for="child in item.children"
                :key="child.id"
              >
                {{ child.name }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container">
          <div class="row align-center">
            <div class="col-xl-8 footer-bottom__left">
              <span>
                {{ $t('Последнее обновление сайта') }}:
                <b>07.05.2020 13:13:27</b>
              </span>
              <p>
                1994-2020 ©
                <nuxt-link
                  class="text-white"
                  style="text-decoration: underline;"
                  :to="localePath('/')"
                  >QISHLOQQURILISHBANK</nuxt-link
                >.
                {{
                  $t(
                    'Все права защищены. Обнаружив в тексте ошибку, выделите её и нажмите'
                  )
                }}
                <b>Ctrl+Enter</b>
              </p>
              <a
                href="https://goodone.uz/"
                target="_blank"
                class="owner-develope"
              >
                {{ $t('Разработка сайта') }} -
                <b>GOODONE</b>
              </a>
            </div>

            <div class="col-xl-4">
              <div class="f-icon-wrap d-flex">
                <a href="#" class="f-icon-items">
                  <img src="~static/img/icon/f-1.png" alt="" class="d-block" />
                </a>
                <a href="#" class="f-icon-items">
                  <img src="~static/img/icon/f-2.png" alt="" class="d-block" />
                </a>
                <a href="#" class="f-icon-items">
                  <img src="~static/img/icon/f-3.png" alt="" class="d-block" />
                </a>
                <a href="#" class="f-icon-items">
                  <img src="~static/img/icon/f-4.png" alt="" class="d-block" />
                </a>
                <a href="#" class="f-icon-items">
                  <img src="~static/img/icon/f-5.png" alt="" class="d-block" />
                </a>
                <a
                  href="http://www.uzrating.com/"
                  target="_blank"
                  class="f-icon-items"
                  v-if="false"
                >
                  <img
                    class="d-block"
                    src="http://www.uzrating.com/cgi-bin/count.fgi?rn=0.6556755010969937&amp;id=2010&amp;ck=y&amp;js=1.3&amp;ja=y&amp;tm=-300&amp;px=40&amp;sw=1440x900&amp;rf=http%3A//qqb.uz/"
                    alt="UzRating"
                    height="31"
                    border="0"
                  />
                </a>
                <a
                  href="http://www.cert.uz/uzcertified"
                  class="f-icon-items"
                  v-if="false"
                >
                  <img
                    src="http://www.cert.uz/certified/uz-certified.gif"
                    alt="www.cert.uz"
                    height="31"
                    border="0"
                    class="d-block"
                  />
                </a>
                <a
                  href="http://www.uz/rus/toprating/cmd/stat/id/17254"
                  target="_top"
                  class="f-icon-items"
                  v-if="false"
                >
                  <img
                    src="http://www.uz/plugins/top_rating/count/cnt.png?id=17254&amp;r=http%3A//qqb.uz/&amp;pg=http%3A//qqb.uz/uz/index.php&amp;c=Y&amp;j=Y&amp;wh=1440x900&amp;px=40&amp;js=1.3&amp;col=ECEFF1&amp;t=003F82&amp;p=009984"
                    alt="Топ рейтинг www.uz"
                    height="31"
                    border="0"
                    class="d-block"
                    v-if="false"
                  />
                </a>
                <a href="http://www.gis.uz/" class="f-icon-items" v-if="false">
                  <img
                    src="/local/templates/.default/img/ginsitt.png"
                    alt=""
                    height="31"
                    class="d-block"
                  />
                </a>
                <a href="http://orphus.ru/" class="f-icon-items" v-if="false">
                  <img
                    src="/local/templates/.default/img/orphus.gif"
                    alt=""
                    height="31"
                    class="d-block"
                  />
                </a>
                <a
                  href="https://www.facebook.com/pg/official.qqb.uz"
                  class="f-icon-items"
                  v-if="false"
                >
                  <img
                    src="/local/templates/.default/img/facebook.png"
                    alt=""
                    height="32"
                    class="d-block"
                  />
                </a>
                <a
                  href="https://twitter.com/official_qqb_uz"
                  class="f-icon-items"
                  v-if="false"
                >
                  <img
                    src="/local/templates/.default/img/twitter.png"
                    alt=""
                    height="32"
                    class="d-block"
                  />
                </a>
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
    this.$axios.$get('/menus/footer').then((res) => {
      this.menu = res.data
    })
  },
  data() {
    return {
      menu: {
        menuItems: [],
      },
    }
  },
}
</script>

<style></style>
