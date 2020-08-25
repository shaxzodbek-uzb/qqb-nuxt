<template>
  <div class="money-transfer-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="money-transfer-wrap pt-60 pb-60">
        <div class="row">
          <div class="col-xl-6 col-lg-6">
            <div class="money-transfer-left">
              <h1>Международные денежные переводы.</h1>
            </div>
          </div>
          <div class="col-xl-6 col-lg-6">
            <div class="money-transfer-right">
              <p>
                В АКБ “Кишлок курилиш банк” для осуществления международных
                трансграничных переводов по системам Золотая корона,
                WesternUnion, MoneyGram, Contact, Ria и Азия Экспресс
                организованы 43 пунктов (
                <router-link to="/">перечень пунктов с дислокацией</router-link
                >) обслуживания клиентов.
              </p>

              <p>
                Пункты международных трансграничных денежных переводов
                предназначены для осуществления быстрых переводов денежных
                средств в иностранной валюте с использованием современных
                средств связи и предоставляет следующие виды услуг физическим
                лицам - гражданам Республики Узбекистан, иностранным гражданам,
                а также лицам без гражданства, находящимся на территории
                Республики Узбекистан:
              </p>

              <div class="about-credit-need">
                <ul>
                  <li>
                    <p>
                      Выплата трансграничных денежных переводов; - отправление
                      трансграничных денежных переводов; - другие услуги,
                      предоставляемые системами.
                    </p>
                  </li>
                </ul>
              </div>

              <p>
                Приём и выдача денежных средств при осуществлении переводов
                производятся в наличной и безналичной (в том числе с
                использованием пластиковых карт) формах, в долларах США и Евро.
                Кроме того, платежи, по желанию клиента, полностью или частично
                могут осуществляться в национальной валюте.
              </p>

              <div class="gallery-transfer d-flex f-wrap">
                <div class="gallery-transfer-items rounded">
                  <div class="gallery-transfer-aspect">
                    <img
                      class="p-absolute w-100 h-100"
                      src="~/static/img/img-27.png"
                      alt
                    />

                    <span
                      class="p-absolute text-white d-block w-100 text-center"
                      >Ria</span
                    >
                  </div>
                </div>
                <div class="gallery-transfer-items rounded">
                  <div class="gallery-transfer-aspect">
                    <img
                      class="p-absolute w-100 h-100"
                      src="~/static/img/img-28.png"
                      alt
                    />

                    <span
                      class="p-absolute text-white d-block w-100 text-center"
                      >Western Union</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset } from '~/utils/frontend'

export default {
  mounted() {
    setOffset()
  },
}
</script>

<style></style>
