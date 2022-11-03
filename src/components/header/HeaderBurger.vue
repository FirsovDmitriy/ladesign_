<template>
  <button @click="$emit('open')" class="burger" :class="{ 'burger--active': isShow }">
    <span class="burger__line"></span>
  </button>
  <!-- /.header__burger -->
</template>

<script>
export default {
  name: 'HeaderBurger',

  props: {
    isShow: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.burger {
  display: none;
}

@include media-down($md) {
  .burger {
    display: block;
    position: relative;
    width: 40px;
    height: 20px;
    margin-left: var(--left-horizontal-padding, 80px);
    z-index: 4;
  }

  .burger__line,
  .burger::before,
  .burger::after {
    position: absolute;
    left: 0;
    width: 100%;
    height: 10%;
    background: $white;
    transition: top 0.3s ease-out, transform 0.5s ease-in-out;
  }

  .burger::before,
  .burger::after {
    content: '';
  }

  .burger__line {
    top: 50%;
    transform: scale(1) translateY(-50%);
  }

  .burger::before {
    top: 0;
  }

  .burger::after {
    bottom: 0;
  }

  .burger--active .burger__line {
    transform: scale(0) translateY(-50%);
  }

  .burger--active.burger::before {
    top: 50%;
    transform: rotate(-45deg) translateY(-50%);
  }

  .burger--active.burger::after {
    bottom: 50%;
    transform: rotate(45deg) translateY(50%);
  }
}

@include media-down($sm) {
    .burger {
      --left-horizontal-padding: 30px;
    }
}
</style>
