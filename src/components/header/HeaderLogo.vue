<template>
  <router-link to="/" class="logo">
    <picture v-show="!$store.state.innerPage">
      <source media="(max-width: 767px)" srcset="@/assets/img/logo/small-logo.png" />
      <img src="@/assets/img/logo/logo.png" alt="" />
    </picture>
    <picture v-show="$store.state.innerPage">
      <source media="(max-width: 767px)" srcset="@/assets/img/logo/small-dark-logo.png" />
      <img src="@/assets/img/logo/dark-logo.png" alt="" />
    </picture>
  </router-link>
</template>

<script>
export default {
  name: 'HeaderLogo'
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.logo {
  z-index: 4;
  width: 45px;
}

@include media-down($md) {
  .logo {}
}
</style>
