<template>
  <div class="language-dropdown dropdown dropdown-init">
    <button class="language-wrap d-flex align-center pointer p-relative">
      <img src="/img/svg/language-icon.png" alt="Language Icon" />
      <img
        src="/img/svg/globe-white.png"
        class="white-icon-2 p-absolute"
        alt="Language Icon"
      />
      <span class="language-text">Язык</span>
      <img src="/img/svg/arrow-down.png" alt="Arrow Down" />
      <img
        src="/img/svg/arrow-white.png"
        class="white-icon-3 p-absolute"
        alt="Arrow Down"
      />
    </button>

    <div class="dropdown--content">
      <nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
        class="dropdown-items d-flex align-center f-between pointer"
      >
        <span>{{ locale.name }}</span>
        <img :src="locale.flag" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style>
.language-text {
  margin: 0 3px 0 6px;
  line-height: 19px;
}
</style>
