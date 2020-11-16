<template>
  <div class="row h-100">
    <div class="col-xl-5 h-100 bg-white pt-60">
      <div class="appeal-offset-left">
        <h1 v-html="type.name"></h1>

        <p v-html="type.description"></p>
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
              <span class="appeal-label d-block">
                {{ $t('Наименовние юридический лица') }}
              </span>
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

            <span class="form-error-text">
              {{ $t('Поле обязательно для заполнения') }}
            </span>
          </div>

          <div class="form-group-wrap">
            <div
              class="appeap-form-group rounded bg-white p-relative"
              :class="{ 'appeap-form-error': false }"
            >
              <span class="appeal-label d-block">{{ $t('Инн') }}</span>
              <input
                type="text"
                class="d-block w-100"
                placeholder="..."
                v-model="form.additional_params.tin.value"
              />

              <img
                class="form-error-img"
                src="~/static/img/svg/error-x.png"
                alt
              />
            </div>

            <span class="form-error-text" v-if="false">
              {{ $t('Поле обязательно для заполнения') }}
            </span>
          </div>
          <div class="form-group-wrap">
            <div
              class="appeap-form-group rounded bg-white p-relative"
              :class="{ 'appeap-form-error': false }"
            >
              <span class="appeal-label d-block">{{ $t('Филиалы') }}</span>
              <select
                v-model="form.additional_params.branche.value"
                class="d-block w-100 border-none"
              >
                <option v-for="item in branche_names" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>

              <img
                class="form-error-img"
                src="~/static/img/svg/error-x.png"
                alt
              />
            </div>

            <span class="form-error-text" v-if="false">
              {{ $t('Поле обязательно для заполнения') }}
            </span>
          </div>

          <div class="appeap-form-file">
            <div class="form-file-title d-flex f-between align-center">
              <h1>{{ $t('Тема обращения') }}</h1>
              <span>(.doc .docx .xls .xlsx .zip .pdf)</span>
            </div>

            <div class="form-file-content">
              <div class="file-upload-items d-flex align-center rounded">
                <label for="upload-1" class="file-upload-title main-bg pointer">
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
          </div>

          <div class="appeap-form-code" v-if="false">
            <div class="form-file-title">
              <h1>{{ $t('Защитный код') }}</h1>
            </div>

            <div class="appeap-code-group rounded bg-white p-relative">
              <div class="code-img d-flex align-center">
                <img src="~/static/img/icon/code.png" class="d-block" alt />
              </div>
            </div>
          </div>
          <recaptcha
            @error="onError"
            @success="onSuccess"
            @expired="onExpired"
          />

          <button
            type="button"
            class="appeal-button transition rounded pointer"
            @click="submitForm"
          >
            {{ $t('Отправить') }}
          </button>
        </form>
      </div>
    </div>

    <div class="notification-wrap" :class="{ active: show_success }">
      <p>{{ $t('Заявка успешно отправлена!') }}</p>
    </div>
  </div>
</template>

<script>
import { setOffset, getLeftSideClientRect } from '~/utils/frontend'

export default {
  data() {
    return {
      branches: [],
      recaptcha_login: false,
      show_success: false,
      type: {},
      form: {
        type: 'credit-legal',
        address: '-',
        title: '',
        content: '-',
        files: [],
        additional_params: {
          tin: {
            label: 'Инн',
            value: '',
          },
          branche: {
            label: 'Филиалы',
            value: '',
          },
        },
      },
    }
  },
  computed: {
    branche_names() {
      return this.branches.map((branch) => branch.name)
    },
  },
  mounted() {
    setOffset()
    getLeftSideClientRect()
    let me = this
    this.$axios.$get('/appeal-types/credit-legal').then((res) => {
      me.type = res.data['appeal_type']
    })
    this.$axios.$get('/branches').then((res) => {
      this.branches = res.data.branches
    })
  },
  methods: {
    async submitForm() {
      this.recaptcha_login = false
      try {
        const token = await this.$recaptcha.getResponse()
        console.log('ReCaptcha token:', token)
        this.submit()
        await this.$recaptcha.reset()
      } catch (error) {
        console.log('Login error:', error)
      }
    },
    submit() {
      let me = this
      let formData = new FormData()
      for (var i = 0; i < this.form.files.length; i++) {
        let file = this.form.files[i]

        formData.append('upload_files[' + i + ']', file)
      }
      formData.append('title', this.form.title)
      formData.append('address', this.form.address)
      formData.append('content', this.form.content)
      formData.append('type', this.form.type)
      formData.append(
        'additional_params[tin][label]',
        this.form.additional_params.tin.label
      )
      formData.append(
        'additional_params[tin][value]',
        this.form.additional_params.tin.value
      )
      formData.append(
        'additional_params[branche][label]',
        this.form.additional_params.branche.label
      )
      formData.append(
        'additional_params[branche][value]',
        this.form.additional_params.branche.value
      )

      this.$axios
        .post('/appeals', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(function () {
          me.show_success = true
          setTimeout(() => {
            me.show_success = false
          }, 3000)
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
    onError() {
      this.recaptcha_login = false
    },
    onSuccess() {
      this.recaptcha_login = true
    },
    onExpired() {
      this.recaptcha_login = false
    },
  },
}
</script>

<style></style>
