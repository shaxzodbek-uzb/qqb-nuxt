<template>
  <div class="card-show-wrap" data-set="offset" data-offset="top bottom">
    <div class="card-show-header pt-60">
      <div class="container">
        <div class="show-header-top d-flex f-between">
          <button
            type="button"
            class="router-back pointer"
            @click="$router.go(-1)"
          >
            <img src="~/static/img/svg/arrow-back.png" alt />
            <span>{{ $t('Карты') }}</span>
          </button>

          <div class="card-header-tools d-flex align-center">
            <button
              class="card-print-btn d-flex align-center f-between w-100 rounded pointer"
              @click="print()"
            >
              <span>{{ $t('Печать') }}</span>
              <img src="~/static/img/svg/print.png" alt />
            </button>

            <a
              href="#"
              class="card-download-btn d-flex align-center f-between w-100 rounded secondary-color"
              @click="pdf()"
            >
              <span>{{ $t('Скачать PDF') }}</span>
              <img src="~/static/img/svg/doc.png" alt />
            </a>
          </div>
        </div>
      </div>

      <div class="header-outline-text text-white p-absolute text-truncate">
        <p>{{ card.name }}</p>
      </div>
    </div>

    <div class="card-show-group p-relative">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-3 card-cell-1">
            <div class="card-group-left">
              <h1>{{ card.name }}</h1>
              <p>
                {{ card.description }}
              </p>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6 card-cell-2">
            <div class="card-group-img p-absolute">
              <img :src="card.big_image" class="d-block" alt />
            </div>
          </div>
          <div class="col-xl-3 col-lg-3 card-cell-3">
            <div class="card-group-right">
              <div class="about-card-text d-flex f-wrap f-between">
                <div class="about-card-cell p-relative">
                  <img
                    class="p-absolute"
                    src="~/static/img/slide-images/card-icon-1.png"
                    alt
                  />
                  <div>
                    <span
                      >{{ $t('Банковские услуги по открытию карты') }}:</span
                    >
                    <p>{{ card.cost }}</p>
                  </div>
                </div>
                <div class="about-card-cell p-relative">
                  <img
                    class="p-absolute"
                    src="~/static/img/slide-images/card-icon-2.png"
                    alt
                  />
                  <div>
                    <span>{{ $t('Срок действия') }}:</span>
                    <p>{{ card.validity }}</p>
                  </div>
                </div>
                <div class="about-card-line"></div>
                <div class="about-card-cell p-relative">
                  <img
                    class="p-absolute"
                    src="~/static/img/slide-images/card-icon-3.png"
                    alt
                  />
                  <div>
                    <span>{{ $t('Необходимые документы') }}:</span>
                    <p>{{ card.required_documents }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card-tab-navigation">
      <div class="card-tab-header">
        <div class="container">
          <div class="d-flex f-center">
            <div class="tab-items p-relative pointer active" data-toggle="tab">
              <span>{{ $t('Карты') }}</span>
            </div>
            <div class="tab-items p-relative pointer" data-toggle="tab">
              <span>{{ $t('Документы') }}</span>
            </div>
            <div class="tab-items p-relative pointer" data-toggle="tab">
              <span>{{ $t('Вопросы и ответы') }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="card-tab-content">
        <div role="tabpanel">
          <Card :card="card" />
        </div>
        <div role="tabpanel">
          <Document :documents="card.documents" />
        </div>
        <div role="tabpanel">
          <Faq :faqs="card.faqs" />
        </div>
      </div>

      <div class="container">
        <div class="app-meta d-flex">
          <div
            class="app-breadcrumb-wrap d-flex align-center f-fill text-truncate"
          >
            <router-link to="/" class="d-flex align-center p-relative">
              <img src="~/static/img/svg/home.png" class="d-block" alt />
            </router-link>
            <router-link to="/" class="d-flex align-center p-relative">
              <span>{{ $t('Карты') }}</span>
            </router-link>
            <router-link to="/" class="d-flex align-center p-relative">
              <span>
                {{ card.name }}
              </span>
            </router-link>
          </div>

          <div class="app-meta__download d-flex align-center">
            <p>
              {{ $t('Скачать') }}
              <span>PDF,</span>
              <span>205.77 KB</span>
            </p>
            <div class="app-badge badge-danger">PDF</div>
          </div>
        </div>
      </div>
    </div>

    <div id="elementH"></div>
  </div>
</template>

<script>
import { setOffset, tabNavigation, print } from '~/utils/frontend'
import Card from '~/components/TabItems/Cards'
import Document from '~/components/TabItems/Document'
import Faq from '~/components/TabItems/Faq'
import html2canvas from 'html2canvas'
import jsPdf from 'jspdf'

export default {
  components: {
    Card,
    Document,
    Faq,
  },
  mounted() {
    setOffset()
    tabNavigation()
    this.$axios.$get('/cards/' + this.$route.params.id).then((res) => {
      this.card = res.data.card
    })
  },
  data() {
    return {
      print,
      card: {
        id: 1,
        name: '',
        description: '',
        image: '',
        cover_image: '',
        type: '',
        cost: '',
        validity: '',
        required_documents: '',
        resource_details: [],
        advantages: [],
        documents: [],
        faqs: [],
      },
    }
  },
  methods: {
    pdf() {
      const domElement = document.body
      html2canvas(domElement, {
        onclone: () => {
          //   document.getElementById('print-button').style.visibility = 'hidden'
        },
      }).then((canvas) => {
        const img = canvas.toDataURL('image/png')
        const pdf = new jsPdf()
        pdf.addImage(img, 'JPEG', 0, 0, 200, 300)
        pdf.save('document.pdf')
      })
    },
  },
}
</script>

<style></style>
