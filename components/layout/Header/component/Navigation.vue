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
            <ul>
              <li v-for="child in item.children" :key="child.id">
                <nuxt-link
                  :to="{ path: `/${child.value}` }"
                  class="dropdown--content-items"
                >
                  <span>{{ child.name }}</span>

                  <div class="chevron-left-icon"></div>
                </nuxt-link>

                <ul class="dropdown-content__sub">
                  <li>
                    <nuxt-link to="/">Child Items</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">Child Items 2</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">Child Items 3</nuxt-link>
                  </li>
                  <li>
                    <nuxt-link to="/">Child Items 4</nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <nuxt-link
          v-else
          :to="{ path: `/${item.value}` }"
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
