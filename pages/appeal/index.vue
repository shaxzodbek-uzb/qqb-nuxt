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
                    class="appeap-form-group rounded bg-white p-relative"
                    :class="{ 'appeap-form-success': false }"
                  >
                    <span class="appeal-label d-block">Адресат обращения</span>
                    <input
                      type="text"
                      class="d-block w-100"
                      placeholder="..."
                      v-model="form.address"
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
                    class="appeap-form-group rounded bg-white p-relative"
                    :class="{ 'appeap-form-error': false }"
                  >
                    <span class="appeal-label d-block">Тема обращения</span>
                    <input
                      type="text"
                      class="d-block w-100"
                      placeholder="..."
                      v-model="form.title"
                    />

                    <img
                      class="form-error-img"
                      src="~/static/img/svg/error-x.png"
                      alt
                    />
                  </div>

                  <span class="form-error-text" v-if="false"
                    >Поле обязательно для заполнения</span
                  >
                </div>

                <div class="form-group-wrap">
                  <div class="appeap-form-group rounded bg-white p-relative">
                    <span class="appeal-label d-block">Текст обращения</span>
                    <textarea
                      class="d-block w-100"
                      placeholder="..."
                      v-model="form.content"
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
                          ref="upload-1"
                          v-on:change="handleFilesUpload(1)"
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
                          id="upload-2"
                          ref="upload-2"
                          v-on:change="handleFilesUpload(2)"
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
                          id="upload-3"
                          ref="upload-3"
                          v-on:change="handleFilesUpload(3)"
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
                          id="upload-4"
                          ref="upload-4"
                          v-on:change="handleFilesUpload(4)"
                        />

                        <span class="file-upload-text">File Name</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="appeap-form-code" v-if="false">
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
                    @click="submitForm"
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

    <div class="notification-wrap active">
      <p>Lorem ipsum</p>
    </div>
  </div>
</template>

<script>
import { setOffset, getLeftSideClientRect } from '~/utils/frontend'

export default {
  data() {
    return {
      form: {
        type: 'anonymous',
        address: '',
        title: '',
        content: '',
        files: [],
      },
    }
  },
  mounted() {
    setOffset()
    getLeftSideClientRect()
  },
  methods: {
    submitForm() {
      let formData = new FormData()
      for (var i = 0; i < this.form.files.length; i++) {
        let file = this.form.files[i]

        formData.append('upload_files[' + i + ']', file)
      }
      formData.append('type', this.form.type)
      formData.append('title', this.form.title)
      formData.append('address', this.form.address)
      formData.append('content', this.form.content)

      this.$axios
        .post('/appeals', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function () {
          console.log('SUCCESS!!')
        })
        .catch(function () {
          console.log('FAILURE!!')
        })
    },
    handleFilesUpload(id) {
      let uploadedFiles = this.$refs['upload-' + id].files
      console.log(uploadedFiles)
      for (var i = 0; i < uploadedFiles.length; i++) {
        this.form.files.push(uploadedFiles[i])
      }
    },
  },
}
</script>

<style></style>
