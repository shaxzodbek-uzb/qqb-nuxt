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
                  :to="localePath(`/${child.value}`)"
                  class="dropdown--content-items"
                  data-items="anchors"
                  @click="toggleDropdown"
                >
                  <span>{{ child.name }}</span>

                  <div
                    class="chevron-left-icon"
                    v-if="child.children.length != 0"
                  ></div>
                </nuxt-link>

                <div class="dropdown-content__sub">
                  <ul v-if="child.children.length != 0">
                    <li v-for="ch in child.children" :key="ch.id">
                      <nuxt-link :to="localePath(`/${ch.value}`)">
                        {{ ch.name }}
                      </nuxt-link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <nuxt-link
          v-else
          :to="localePath(`/${item.value}`)"
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
  methods: {
    toggleDropdown(event) {
      console.log(event.target)
    },
  },
}
</script>

<style></style>
