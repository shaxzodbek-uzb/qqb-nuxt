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
      <a class="dropdown-items d-flex align-center f-between pointer">
        <span>UZ</span>
        <img src="/img/icon/uzbekistan.png" alt="Uzbekistan Flag" />
      </a>
      <a class="dropdown-items d-flex align-center f-between pointer">
        <span>RU</span>
        <img src="/img/icon/russia.png" alt="Russia Flag" />
      </a>
      <a class="dropdown-items d-flex align-center f-between pointer">
        <span>EN</span>
        <img src="/img/icon/united-states.png" alt="USA Flag" />
      </a>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.language-text {
  margin: 0 3px 0 6px;
  line-height: 19px;
}
</style>
