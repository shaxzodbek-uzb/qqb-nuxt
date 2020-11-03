<template>
  <div class="loader-wrap" ref="loader">
    <img src="~/static/img/logo-white.png" alt="" />
  </div>
</template>

<script>
export default {
  mounted() {
    const { loader } = this.$refs

    setTimeout(() => {
      loader.classList.add('active')
    }, 3000)
  },
}
</script>

<style></style>
