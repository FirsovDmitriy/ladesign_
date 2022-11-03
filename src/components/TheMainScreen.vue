<template>
  <div class="main-screen">
    <div class="main-screen__overlay">
      <div class="main-screen__content">
        <h1 class="main-screen__title">Ladesign</h1>
        <p class="main-screen__text">
          Дизайн-проекты жилых и коммерческих помещений. Малая архитектура
        </p>
        <a href="#advantage" class="main-screen__arrow-down">
          <ArrowDownIcon class="" />
        </a>
      </div>
    </div>
    <!-- /.main-screen__overlay -->
  </div>
</template>

<script>
import ArrowDownIcon from '@/components/icons/ArrowDownIcon'

export default {
  name: 'TheMainScreen',

  components: {
    ArrowDownIcon
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.main-screen {
  position: relative;
  height: 100vh;
  background: url('@/assets/img/main-bg.jpg') center / cover no-repeat;
  color: $white;
}

.main-screen__overlay {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: $blackout);
}

.main-screen__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 648px;
  margin-top: 40vh;

  @include media-down(1440px) {
    margin-top: 30vh;
  }
}
.main-screen__title {
  margin-bottom: rem(10);
}

.main-screen__text {
  @include roboto-condensed();
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-align: center;
}

.main-screen__arrow-down {
  margin: auto 0 rem(90) 0;

  @include media-down(1440px) {
    margin-bottom: rem(50);
  }
}

@include media-down(767px) {
  .main-screen__content {
    max-width: rem(278);
    margin-top: 40vh;
  }
  .main-screen__text {
    font-size: 16px;
  }
  .main-screen__arrow-down {
    display: none;
  }
}
</style>
