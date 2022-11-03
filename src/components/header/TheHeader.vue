<template>
  <header
    class="header"
    :class="{
      'header--main': $store.state.innerPage,
      'header--active': isShow,
      'header--fixed': isFixed,
    }"
    ref="header"
  >
    <div class="header__container">
      <div class="header__row">
        <HeaderLogo />
        <HeaderMenu :isShow="isShow" />
          <div class="header__col">
            <a href="tel:+79184123443" class="header__link">
              <PhoneIcon />
              <span class="header__phone">+7 918 412-34-43</span>
            </a>
            <HeaderBurger :isShow="isShow" @open="openMenu" />
          </div>
          <!--- /.header__col -->
      </div>
      <!-- /.header__row -->
    </div>
    <!-- /.header__container -->
  </header>
</template>

<script>
import PhoneIcon from '@/components/icons/PhoneIcon'
import HeaderLogo from './HeaderLogo.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderBurger from './HeaderBurger.vue'

export default {
  name: 'TheHeader',

  components: {
    PhoneIcon,
    HeaderMenu,
    HeaderLogo,
    HeaderBurger
  },

  data () {
    return {
      isShow: false,
      isFixed: false
    }
  },

  methods: {
    openMenu () {
      this.isShow = !this.isShow
      switch (this.isShow) {
        case true:
          document.body.style.overflow = 'hidden'
          break
        default:
          document.body.style.overflow = 'visible'
      }
    },

    fixedHeader () {
      if (window.scrollY > 555) {
        this.isFixed = true
      } else this.isFixed = false
    }
  },

  mounted () {
    window.addEventListener('scroll', this.fixedHeader)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.header {
  position: absolute;
  top: 0;
  z-index: 3;
  width: 100%;
  color: $white;
  border-bottom: 0.5px solid $gray;
  transition: all $animation-time ease-out;

  &--active {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      z-index: 4;
      width: 100%;
      height: 70px;
      background: $black;
      transition: $transition;
    }
  }

  &--fixed {
    position: fixed !important;
    background: $white;
    color: $second-color;
    animation: down 0.3s;
  }

  &--main {
    position: static;
    margin: 0 0 100px 0;
    color: #777777;

    .burger::before,
    .burger::after,
    .burger__line {
      background: #393246;
    }

    @include media-down($md) {
      margin: 0 0 70px 0;
    }
  }
}

.header__container {
  @include container();
}

.header__row {
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  align-items: center;

  padding: 20px 0;

  @include media-down($md) {
    grid-template-columns: repeat(2, min-content);
    justify-content: space-between;
  }

  @include media-down($sm) {
    padding: 20px 0;
  }
}

.header__col {
  display: flex;
  justify-content: flex-end;
}

.header__link {
  display: flex;
  align-items: center;
}

.header__phone {
  @include roboto-condensed();
  white-space: nowrap;
  margin-left: rem(10);

  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: 0.05em;
}

@keyframes down {
  0% {
    transform: translateY(-100%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>
