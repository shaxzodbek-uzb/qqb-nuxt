<template>
  <div
    class="anonymous-appeal-wrap d-flex pt-5"
    data-set="offset"
    data-offset="top bottom"
  >
    <div class="appeal-offset-wrap w-100" data-offset="setLeftOffset">
      <div class="d-flex">
        <NuxtLink
          v-for="type in types"
          :key="type.id"
          :to="'/application/' + type.slug"
          tag="div"
          class="tab-items p-relative pointer"
          :class="{ active: type.slug == $route.params.slug }"
          data-toggle="tab"
        >
          <span> {{ type.name }}</span>
        </NuxtLink>
      </div>
      <div class="container">
        <NuxtChild :key="$route.params.slug" />
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
      types: [
        {
          id: 2,
          slug: 'credit-legal',
          name: 'Заявка на кредитный отпуск на юридических лиц',
        },
        {
          id: 3,
          slug: 'credit',
          name: 'Заявка на кредитный отпуск для физических лиц',
        },
        {
          id: 4,
          slug: 'deposit',
          name: 'Онлайн заявки по вкладам',
        },
      ],
      form: {
        address: '',
        title: '',
        content: '',
        files: [],
      },
    }
  },
  mounted() {
    console.log(this.$route.params)
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
