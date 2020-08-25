<template>
  <div
    class="tariff-page-wrap d-flex"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="container">
      <div class="tariff-page-container pt-60 pb-60">
        <h1 class="title-50">Тарифы</h1>

        <div class="tariff-page-content" ref="initAccordion">
          <div class="tab-document-items rounded">
            <div class="accordion-header d-flex align-center">
              <div class="item-text f-fill">
                <h1>
                  Открытие и ведение банковских счетов, счетов по вкладам
                </h1>
              </div>
              <div class="tab-arrow">
                <button
                  class="w-100 h-100 rounded child-center transition pointer"
                >
                  <img
                    src="~/static/img/svg/arrow-down-2.png"
                    class="transition"
                    alt
                  />
                </button>
              </div>
            </div>

            <div class="accordion-content">
              <div class="tariff-table">
                <div class="tariff-table-items d-flex">
                  <b>1.1</b>
                  <div class="f-fill">
                    <p>
                      Открытие, ведение, закрытие банковского счета, вкладов до
                      востребования, срочных.
                    </p>
                  </div>
                  <span>комиссия не взимается</span>
                </div>
                <div class="tariff-table-items d-flex">
                  <b>1.2</b>
                  <div class="f-fill">
                    <p>
                      Предоставление выписки по текущему банковскому счету,
                      вкладу (по требованию Клиента)
                    </p>
                  </div>
                  <span>комиссия не взимается</span>
                </div>
                <div class="tariff-table-items d-flex">
                  <b>1.3</b>
                  <div class="f-fill">
                    <p>
                      Выписка по счету по просьбе клиента (повторная) и выдача
                      справки о состоянии счета
                    </p>
                  </div>
                  <span>10% БРВ</span>
                </div>
                <div class="tariff-table-items d-flex">
                  <b>1.4</b>
                  <div class="f-fill">
                    <p>
                      Выдача вкладной книжки при открытии счета
                    </p>
                  </div>
                  <span>комиссия не взимается</span>
                </div>
                <div class="tariff-table-items d-flex">
                  <b>1.5</b>
                  <div class="f-fill">
                    <p>
                      Выдача вкладной книжки взамен утраченной
                    </p>
                  </div>
                  <span>10% БРВ</span>
                </div>
                <div class="tariff-table-items d-flex">
                  <b>1.6</b>
                  <div class="f-fill">
                    <p>
                      Розыск вкладов владельцем или наследниками по одному
                      отделению, включая подведомственные филиалы АО
                      "Национальный банк"
                    </p>
                  </div>
                  <span>комиссия не взимается</span>
                </div>
              </div>
            </div>
          </div>

          <div class="tab-document-items rounded">
            <div class="accordion-header d-flex align-center">
              <div class="item-text f-fill">
                <h1>
                  Открытие и ведение банковских счетов, счетов по вкладам 123
                </h1>
              </div>
              <div class="tab-arrow">
                <button
                  class="w-100 h-100 rounded child-center transition pointer"
                >
                  <img
                    src="~/static/img/svg/arrow-down-2.png"
                    class="transition"
                    alt
                  />
                </button>
              </div>
            </div>

            <div class="accordion-content">
              <div class="accordion-box">
                <div class="tariff-table">
                  <div class="tariff-table-items d-flex">
                    <b>1.1</b>
                    <div class="f-fill">
                      <p>
                        Открытие, ведение, закрытие банковского счета, вкладов
                        до востребования, срочных.
                      </p>
                    </div>
                    <span>комиссия не взимается</span>
                  </div>
                  <div class="tariff-table-items d-flex">
                    <b>1.2</b>
                    <div class="f-fill">
                      <p>
                        Предоставление выписки по текущему банковскому счету,
                        вкладу (по требованию Клиента)
                      </p>
                    </div>
                    <span>комиссия не взимается</span>
                  </div>
                  <div class="tariff-table-items d-flex">
                    <b>1.3</b>
                    <div class="f-fill">
                      <p>
                        Выписка по счету по просьбе клиента (повторная) и выдача
                        справки о состоянии счета
                      </p>
                    </div>
                    <span>10% БРВ</span>
                  </div>
                  <div class="tariff-table-items d-flex">
                    <b>1.4</b>
                    <div class="f-fill">
                      <p>
                        Выдача вкладной книжки при открытии счета
                      </p>
                    </div>
                    <span>комиссия не взимается</span>
                  </div>
                  <div class="tariff-table-items d-flex">
                    <b>1.5</b>
                    <div class="f-fill">
                      <p>
                        Выдача вкладной книжки взамен утраченной
                      </p>
                    </div>
                    <span>10% БРВ</span>
                  </div>
                  <div class="tariff-table-items d-flex">
                    <b>1.6</b>
                    <div class="f-fill">
                      <p>
                        Розыск вкладов владельцем или наследниками по одному
                        отделению, включая подведомственные филиалы АО
                        "Национальный банк"
                      </p>
                    </div>
                    <span>комиссия не взимается</span>
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
import { setOffset, accardion } from '~/utils/frontend'

export default {
  mounted() {
    const { initAccordion } = this.$refs

    setOffset()
    accardion(initAccordion)
  },
}
</script>

<style></style>
