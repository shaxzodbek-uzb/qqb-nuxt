<template>
  <div class="bank-council-wrapper" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="bank-container pt-60">
        <h1 class="title-50">Совет банка</h1>

        <div class="cards-entry-text">
          <h1>
            Примечание: У членов Совета Банка не имеются доли в уставном
            капитале банка
          </h1>
          <p>
            Члены наблюдательного совета АКБ “Кишлок курилиш банк” (01.01.2020)
          </p>
        </div>

        <div class="bank-council-items rounded d-flex">
          <div class="bank-council-avatar">
            <img
              src="~/static/img/avatar-1.png"
              class="d-block w-100 h-100"
              alt
            />
          </div>
          <div class="bank-council-meta f-fill">
            <h1>Ашрафханов Бахром Баходирович</h1>

            <div class="line-horizontal"></div>

            <span>Занимаемая должность</span>

            <p>
              Исполнительный директор внебюджетного пенсионного фонда при
              Министерстве
              <br />финансов Республики Узбекистан
            </p>

            <span>Подтверждающий документ</span>

            <p>
              Внеочередное общее собрание акционеров банка 2019 год 23 июля
              Протокол №40
            </p>

            <span>Номера телефонов:</span>

            <p>(71) 239-11-01</p>
          </div>
        </div>

        <div class="bank-council-items rounded d-flex">
          <div class="bank-council-avatar">
            <img
              src="~/static/img/avatar-1.png"
              class="d-block w-100 h-100"
              alt
            />
          </div>
          <div class="bank-council-meta f-fill">
            <h1>Абидов Шерзод Абдусаматович</h1>

            <div class="line-horizontal"></div>

            <span>Занимаемая должность</span>

            <p>
              Исполнительный директор внебюджетного пенсионного фонда при
              Министерстве
              <br />финансов Республики Узбекистан
            </p>

            <span>Подтверждающий документ</span>

            <p>
              Внеочередное общее собрание акционеров банка 2019 год 23 июля
              Протокол №40
            </p>

            <span>Номера телефонов:</span>

            <p>(71) 239-11-01</p>
          </div>
        </div>

        <div class="bank-council-items rounded d-flex">
          <div class="bank-council-avatar">
            <img
              src="~/static/img/avatar-1.png"
              class="d-block w-100 h-100"
              alt
            />
          </div>
          <div class="bank-council-meta f-fill">
            <h1>Искандаров Эркин Бўриевич</h1>

            <div class="line-horizontal"></div>

            <span>Занимаемая должность</span>

            <p>
              Исполнительный директор внебюджетного пенсионного фонда при
              Министерстве
              <br />финансов Республики Узбекистан
            </p>

            <span>Подтверждающий документ</span>

            <p>
              Внеочередное общее собрание акционеров банка 2019 год 23 июля
              Протокол №40
            </p>

            <span>Номера телефонов:</span>

            <p>(71) 239-11-01</p>
          </div>
        </div>

        <div class="content-load">
          <button
            type="button"
            class="d-block w-100 rounded pointer transition"
          >
            Загрузить еще
          </button>
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
