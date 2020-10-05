<template>
  <nav class="header-navigation">
    <ul class="d-flex">
      <li v-for="item in menu.menuItems" :key="item.id">
        <div
          class="header-navigation-dropdown dropdown-init pointer p-relative"
          v-if="item.children != 0"
        >
          <span>{{ item.name }}</span>
          <img src="~/static/img/svg/arrow-down.png" alt />
          <img
            src="~/static/img/svg/arrow-white.png"
            class="white-icon-5 p-absolute"
            alt
          />

          <div class="dropdown--content">
            <nuxt-link
              v-for="child in item.children"
              :key="child.id"
              :to="{ path: child.value }"
              class="dropdown--content-items"
            >
              {{ child.name }}
            </nuxt-link>
          </div>
        </div>
        <nuxt-link
          v-else
          :to="{ path: item.value }"
          class="d-block p-relative"
          >{{ item.name }}</nuxt-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      default() {
        return { menuItems: [] }
      },
    },
  },
}
</script>

<style></style>
