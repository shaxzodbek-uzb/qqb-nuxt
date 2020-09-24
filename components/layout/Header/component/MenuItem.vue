<template>
  <li>
    <div class="header-navigation-dropdown dropdown-init pointer p-relative">
      <span>Физическим лицам</span>
      <img src="~/static/img/svg/arrow-down.png" alt />
      <img
        src="~/static/img/svg/arrow-white.png"
        class="white-icon-5 p-absolute"
        alt
      />

      <div class="dropdown--content">
        <nuxt-link
          :to="{ path: 'Contributions' }"
          class="dropdown--content-items"
          >Вклады</nuxt-link
        >
        <nuxt-link
          :to="{ path: 'InternationalMoneyTransfers' }"
          class="dropdown--content-items"
          >Международные денежные переводы</nuxt-link
        >
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style></style>
