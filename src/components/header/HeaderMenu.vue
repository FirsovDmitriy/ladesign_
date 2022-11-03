<template>
  <nav class="menu" :class="{ 'menu--active': isShow }">
    <ul class="menu__list">
      <li v-for="item in links" :key="item.name" class="menu__item">
        <router-link :to="item.link" class="menu__link">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import content from '@/content'

export default {
  props: {
    isShow: {
      type: Boolean
    }
  },

  data () {
    return {
      links: content.navagation
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.menu {
  @include media-down($md) {
    transform: translateX(-100%);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
    height: 100%;
    padding: 100px 30px 30px 30px;
    transition: $transition;
    background: $black;
    overflow-y: auto;

    &--active {
      transform: translateX(0);
    }
  }
}

.menu__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @include media-down($md) {
    flex-direction: column;
    align-items: center;
  }
}

.menu__item {
  margin: 0 25px;
  // padding-top: 3.9px;

  @include media-down($md) {
    margin: 0;
    &:not(:last-child) {
      margin: 0 0 20px 0;
    }
  }
}

.menu__link {
  @include roboto-condensed;

  font-size: $text-sm;
  text-transform: uppercase;
  letter-spacing: 0.15em;

  @media (hover: any-hover) {
    &:hover {
      text-decoration: underline;
    }
  }

  @include media-down($md) {
    font-size: $text-xl;
  }
}
</style>
