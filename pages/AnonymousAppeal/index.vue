<template>
  <div
    class="anonymous-appeal-wrap d-flex"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="appeal-offset-wrap w-100" data-offset="setLeftOffset">
      <div class="container">
        <div class="row h-100">
          <div class="col-xl-5 h-100 bg-white pt-60">
            <div class="appeal-offset-left">
              <h1>
                Анонимное Обращние
              </h1>

              <p>
                Примерная форма анонимного обращения для содействия в решении
                вопросов предотвращения и недопу-щения бюрократизма и волокиты,
                в обеспечении предоставле-ния банковских услуг согласно
                принципов, основанных на честности, бескорыст-ности и
                справедливости, а также, для содействия предотвращения
                злоупотребления служебным положением для получения личной выгоды
                или для удовлетворения противозаконных интересов других лиц,
                которые порождают затруднение клиентам, при пользовании услугами
                банка.
              </p>
            </div>
          </div>
          <div class="col-xl-7 pt-60">
            <div class="appeal-offset-right">
              <form class="appeal-form">
                <div class="form-group-wrap">
                  <div
                    class="appeap-form-group appeap-form-success rounded bg-white p-relative"
                  >
                    <span class="appeal-label d-block">Адресат обращения</span>
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
                    <span class="appeal-label d-block">Тема обращения</span>
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
                  <div class="appeap-form-group rounded bg-white p-relative">
                    <span class="appeal-label d-block">Текст обращения</span>
                    <textarea
                      class="d-block w-100"
                      placeholder="..."
                    ></textarea>
                  </div>
                </div>

                <div class="appeap-form-file">
                  <div class="form-file-title d-flex f-between align-center">
                    <h1>Тема обращения</h1>
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

                <div class="appeap-form-code">
                  <div class="form-file-title">
                    <h1>Защитный код</h1>
                  </div>

                  <div class="appeap-code-group rounded bg-white p-relative">
                    <div class="code-img d-flex align-center">
                      <img
                        src="~/static/img/icon/code.png"
                        class="d-block"
                        alt
                      />
                    </div>
                  </div>
                </div>

                <div class="appeal-form-descr">
                  <h1>Примечание</h1>

                  <div class="apperal-descr">
                    <div class="apperal-descr-items">
                      <p>
                        Согласно Закону “Об обращениях физических и юридических
                        лиц”, на анонимные обращения ответы не возвращаються.
                      </p>
                    </div>
                    <div class="apperal-descr-items">
                      <p>
                        Анонимное обращение содержащего клевету, оскорбления и
                        необоснованную информацию может привести к
                        ответственности в установленном порядке
                      </p>
                    </div>
                  </div>

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
  mounted() {
    setOffset()
    getLeftSideClientRect()
  },
}
</script>

<style></style>
