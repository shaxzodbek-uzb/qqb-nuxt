<template>
  <div
    class="credit-app-wrap d-flex"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="appeal-offset-wrap w-100" data-offset="setLeftOffset">
      <div class="container appeal-container">
        <div class="row h-100">
          <div class="col-xl-5 appeal-left-cell h-100 bg-white pt-60">
            <div class="appeal-offset-left">
              <h1>
                Заявка на кредитный отпуск для юридических лиц
              </h1>

              <b>Уважаемый клиент!</b>

              <p>
                Вам нужно заполнить электронную форму заявления, чтобы подать
                заявку на кредитный отпуск.
              </p>

              <router-link to="/" class="download-wrap d-flex align-center">
                <img src="~/static/img/svg/download.png" alt />
                <span>Скачать форму заявки</span>
              </router-link>

              <div style="margin-top: 30px; font-family: var(--regular);">
                <p>Введите соответствующую информацию, чтобы подать заявку!</p>
              </div>
            </div>
          </div>
          <div class="col-xl-7 appeal-right-cell pt-60">
            <div class="appeal-offset-right">
              <form class="appeal-form">
                <div class="form-group-wrap">
                  <div
                    class="appeap-form-group appeap-form-success rounded bg-white p-relative"
                  >
                    <span class="appeal-label d-block"
                      >Наименование юридического лица *</span
                    >
                    <input
                      type="text"
                      class="d-block w-100"
                      placeholder="..."
                    />

                    <img
                      class="form-error-img"
                      src="~/static/img/svg/error-x.png"
                      alt
                    />
                  </div>

                  <span class="form-error-text"
                    >Поле обязательно для заполнения</span
                  >
                </div>

                <div class="form-group-wrap">
                  <div
                    class="appeap-form-group appeap-form-error rounded bg-white p-relative"
                  >
                    <span class="appeal-label d-block">ИНН *</span>
                    <input
                      type="text"
                      class="d-block w-100"
                      placeholder="..."
                    />

                    <img
                      class="form-error-img"
                      src="~/static/img/svg/error-x.png"
                      alt
                    />
                  </div>

                  <span class="form-error-text"
                    >Поле обязательно для заполнения</span
                  >
                </div>

                <div class="form-group-wrap form-group--select">
                  <div
                    class="appeap-form-group appeap-form-error rounded bg-white p-relative"
                  >
                    <span class="appeal-label d-block">Выберите филиал *</span>
                    <v-select :options="options"></v-select>

                    <img
                      class="form-error-img"
                      src="~/static/img/svg/error-x.png"
                      alt
                    />
                  </div>

                  <span class="form-error-text"
                    >Поле обязательно для заполнения</span
                  >
                </div>

                <div class="appeap-form-file">
                  <div class="form-file-title d-flex f-between align-center">
                    <h1>Прикрепить заявку</h1>
                    <span>(.doc .docx .xls .xlsx .zip .pdf)</span>
                  </div>

                  <div class="form-file-content">
                    <div class="file-upload-items d-flex align-center rounded">
                      <label
                        for="upload-1"
                        class="file-upload-title main-bg pointer"
                      >
                        <h1>Выберите файл...</h1>
                      </label>
                      <div class="file-upload-area f-fill bg-white p-relative">
                        <input
                          type="file"
                          class="d-block w-100"
                          id="upload-1"
                        />

                        <span class="file-upload-text">File Name</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="appeal-form-descr">
                  <button
                    type="button"
                    class="appeal-button transition rounded pointer"
                  >
                    Отправить
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setOffset, getLeftSideClientRect } from '~/utils/frontend'

export default {
  data() {
    return {
      options: ['foo', 'bar', 'baz'],
    }
  },
  mounted() {
    setOffset()
    getLeftSideClientRect()
  },
}
</script>

<style></style>
