<template>
  <div class="advantage" id="advantage">
    <div class="advantage__container">
      <h2 class="advantage__title">Наша команда дает уверенность</h2>
      <div class="advantage__wrapper">
        <div class="advantage__content-wrapper">
          <p class="advantage__text">
            Дизайн-проект от студии LA Design не только совершенен по дизайну, но и реализуем
          </p>
          <AdvantageAccordion />
        </div>
        <div class="advantage__col">
          <div class="advantage__img-wrapper">
            <img class="advantage__img" src="@/assets/img/img3.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdvantageAccordion from './AdvantageAccordion'

export default {
  name: 'AdvantageBlock',

  components: {
    AdvantageAccordion
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.advantage {
  margin: 100px 0;
}

.advantage__container {
  @include container();
}

.advantage__wrapper {
  display: grid;
  grid-template-columns: var(--width-content, 515px) 1fr;
  // display: flex;
  // justify-content: space-between;
  gap: 100px;

  @include media-down($lg) {
    gap: 40px;
    --width-content: 439px;
  }

  @include media-down($md) {
    grid-template-columns: 1fr;
  }
}

.advantage__title {
  // margin: 0 0 50px 0;
}

.advantage__content-wrapper {
  // margin: 0 50px 0 0;

  @include media-down($lg) {
    // max-width: 440px;
  }

  @include media-down($md) {
    margin: 0 0 50px 0;
    max-width: none;
    width: 100%;
  }
}

.advantage__text {
  font-size: 18px;
  line-height: 27px;

  color: #777777;
}

.advantage__col {
  // flex: 0 0 515px;
}

.advantage__img-wrapper {
  position: relative;
  height: 0;
  padding-top: 87.4%;
  overflow: hidden;

  @include media-down($lg) {
    padding-top: 118.4%;
  }

  @include media-down($lg) {
    // padding-top: #{ 528 / 450 * 100% };
  }
}

.advantage__img {
  height: 100%;
  @include image-centering();
}
</style>
