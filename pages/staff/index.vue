<template>
  <div class="bank-council-wrapper" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="bank-container pt-60">
        <h1 class="title-50">Совет банка</h1>

        <div class="cards-entry-text">
          <h1>
            {{
              $t(
                'Примечание: У членов Совета Банка не имеются доли в уставном капитале банка'
              )
            }}
          </h1>
          <p>
            {{
              $t(
                'Члены наблюдательного совета АКБ “Кишлок курилиш банк” (01.01.2020)'
              )
            }}
          </p>
        </div>

        <div
          class="bank-council-items rounded d-flex"
          v-for="item in staffs"
          :key="item.id"
        >
          <div class="bank-council-avatar">
            <img :src="item.avatar" class="d-block w-100 h-100" alt />
          </div>
          <div class="bank-council-meta f-fill">
            <h1>{{ item.fullname }}</h1>

            <div class="line-horizontal"></div>

            <span>{{ $t('Занимаемая должность') }}</span>

            <p>
              {{ item.position }}
            </p>

            <span>{{ $t('Подтверждающий документ') }}</span>

            <p>
              {{ item.confirmation_document }}
            </p>

            <span>{{ $t('Номера телефонов') }}:</span>

            <p>{{ item.phone }}</p>
          </div>
        </div>

        <!-- <div class="content-load">
          <button
            type="button"
            class="d-block w-100 rounded pointer transition"
          >
            Загрузить еще
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset } from '~/utils/frontend'

export default {
  data() {
    return {
      staffs: [],
    }
  },
  mounted() {
    setOffset()
    this.$axios.$get('/staffs').then((res) => {
      this.staffs = res.data.staffs
    })
  },
}
</script>

<style></style>
