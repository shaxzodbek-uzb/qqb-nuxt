<template>
  <div class="documents-page-wrap" data-set="offset" data-offset="top bottom">
    <div class="container">
      <div class="documents-page-container pt-60">
        <h1 class="title-50">Документы</h1>

        <div class="card-tab-navigation tab-navigation--credit">
          <div class="card-tab-header">
            <div class="d-flex">
              <div
                class="tab-items p-relative pointer active"
                data-toggle="tab"
              >
                <span>Договор</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Типовой договор</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Регламент интерактивных услуг</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span
                  >Указы и программы, принятые Президентом Республики
                  Узбекистан</span
                >
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Постановление Кабинета Министров</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Банковское законодательство</span>
              </div>
              <div class="tab-items p-relative pointer" data-toggle="tab">
                <span>Внутренные нормативные документы</span>
              </div>
            </div>
          </div>

          <div class="card-tab-content">
            <div role="tabpanel">
              <Contract />
            </div>
            <div role="tabpanel">1234aaa</div>
            <div role="tabpanel">11axx</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, tabNavigation } from '@/utils/frontend'
import Contract from '~/components/TabItems/Contract'

export default {
  components: {
    Contract,
  },
  mounted() {
    setOffset()
    tabNavigation()
  },
}
</script>

<style></style>
