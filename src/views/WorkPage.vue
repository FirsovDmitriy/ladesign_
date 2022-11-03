<template>
  <section class="full-screen">
    <div class="full-screen__overlay">
      <div class="full-screen__content">
        <h2 class="full-screen__title">Loft</h2>
        <p class="full-screen__subtitle">Unique collection</p>
      </div>
    </div>
  </section>
  <!-- /.full-screen -->

  <section class="work">
    <div class="work__container">
      <h3 class="work__title work__title--top">Дизайн 1-комнатной квартиры в стиле loft</h3>
      <div class="work__row work__row--down-direction">
        <div class="work__col">
          <ul class="work__description">
            <li class="work__description-item">
              <span class="work__description-title">Для кого</span>
              <p class="work__description-text">молодой мужчина</p>
            </li>
            <li class="work__description-item">
              <span class="work__description-title">общая площадь</span>
              <p class="work__description-text">60м<sup>2</sup></p>
            </li>
            <li class="work__description-item">
              <span class="work__description-title">место расположения</span>
              <p class="work__description-text">Краснодар</p>
            </li>
            <li class="work__description-item">
              <span class="work__description-title">срок выполнения</span>
              <p class="work__description-text">1 месяц</p>
            </li>
          </ul>
        </div>
        <div class="work__col">
          <p>
            В этой квартире для молодого человека много бетона, кирпича и натурального дерева. Это лофт в классическом понимании и с очень интересными деталями.
          </p>
          <p>
            В интерьере использовано довольно много различных материалов и текстур. Однако благодаря тому, что каждый материал применяется не единожды и находит себе продолжение в других помещениях, квартира смотрится цельным объёмом, где все текстуры дополняют друг друга и сочетаются между собой.
          </p>
        </div>
      </div>
      <!-- /.work__row -->
      <Swiper
        class="slider-work"
        :modules="modules"
        :speed="800"
        :loop="true"
        :navigation="{
          prevEl: '.navigation-button--prev',
          nextEl: '.navigation-button--next'
        }"
      >
        <SwiperSlide class="slider-work__slide">
          <div class="slider-work__img-wrapper">
            <img class="slider-work__img" src="../assets/img/slide.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide class="slider-work__slide">
          <div class="slider-work__img-wrapper">
            <img class="slider-work__img" src="../assets/img/slide_2.jpg" alt="">
          </div>
        </SwiperSlide>
        <SwiperSlide class="slider-work__slide">
          <div class="slider-work__img-wrapper">
            <img class="slider-work__img" src="../assets/img/slide_3.jpg" alt="">
          </div>
        </SwiperSlide>
        <button class="navigation-button navigation-button--prev">
          <IconArrow />
        </button>
        <button class="navigation-button navigation-button--next">
          <IconArrow />
        </button>
      </Swiper>
    </div>
  </section>

  <section class="work">
    <div class="work__container">
      <h3 class="work__title work__title--middle">практичность и рациональное использование каждого квадратного метра</h3>
      <div class="work__row">
        <div class="work__col">
          <h4>Задача</h4>
          <p>
            В этой квартире для молодого человека много бетона, кирпича и натурального дерева. Это лофт в классическом понимании и с очень интересными деталями.
          </p>
        </div>
        <div class="work__col">
          <h4>решение</h4>
          <p>
            В этой квартире для молодого человека много бетона, кирпича и натурального дерева. Это лофт в классическом понимании и с очень интересными деталями.
          </p>
          <p>
            В интерьере использовано довольно много различных материалов и текстур. Однако благодаря тому, что каждый материал применяется не единожды и находит себе продолжение в других помещениях, квартира смотрится цельным объёмом, где все текстуры дополняют друг друга и сочетаются между собой.
          </p>
        </div>
      </div>
    </div>
    <section class="full-screen full-screen--empty"></section>
    <div class="work__container">
      <h4>особенности проекта</h4>
      <p></p>
      <div class="work__gallery">
        <div>
          <img class="work-item__img" src="../assets/img/work1.jpg" alt="">
        </div>
        <div>
          <img class="work-item__img" src="../assets/img/work2.jpg" alt="">
        </div>
        <div>
          <img class="work-item__img" src="../assets/img/work3.jpg" alt="">
        </div>
        <div>
          <img class="work-item__img" src="../assets/img/work4.jpg" alt="">
        </div>
      </div>
    </div>
  </section>

  <section class="work">
    <div class="work__container">
      <h3 class="work__title work__title--last">похожие проекты</h3>
      <CarouselProject />
    </div>
  </section>
</template>

<script>
import CarouselProject from '@/components/carousel/CarouselProject'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

import IconArrow from '@/components/icons/IconArrow'

export default {
  name: 'WorkPage',
  components: {
    CarouselProject,
    Swiper,
    SwiperSlide,
    IconArrow
  },
  data () {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.full-screen {
  position: relative;
  min-height: 100vh;
  background: url('../assets/img/bg_2.jpg') center / cover no-repeat;

  &--empty {
    margin: 0 0 100px 0;
    background: url('../assets/img/full_screen_img.jpg') center / cover no-repeat fixed;
  }
}

.full-screen__overlay {
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  color: $white;
  background: rgba($color: #000000, $alpha: $blackout);
}

.full-screen__content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.full-screen__title {
  margin: 0 0 25px 0;
}

.full-screen__subtitle {
  font-size: 20px;
  line-height: 27px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.work {
  margin: 150px 0 0 0;
}

.work__container {
  @include container();
}

.work__title {
  &--top {
    max-width: 525px;
  }

  &--middle {
    max-width: 828px;
  }

  &--last {
    text-align: center;
  }
}

.work__row {
  display: flex;
  justify-content: space-between;
  margin: 0 0 100px 0;

  @include media-down($md) {
    &--down-direction {
      flex-direction: column;
      .work__col {
        flex: auto;
      }
    }
  }

  @include media-down($sm) {
    flex-direction: column;
  }
}

.work__col {
  flex: 0 1 484px;
  &:not(:last-child) {
    margin: 0 30px 0 0;
  }

  @include media-down($sm) {
    flex: 0;
    &:not(:last-child) {
    margin: 0;
  }
  }
}

// Slider
.slider-work__slide {
  // height: 700px;
}

.slider-work__img-wrapper {
  height: 0;
  overflow: hidden;
  // position: relative;
  margin-bottom: #{ 700 / 1200 * 100% };
}

.slider-work__img {
  // @include image-centering();
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.navigation-button {
  --size-button: 40px;
  width: var(--size-button);
  height: var(--size-button);

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: calc(50% - var(--size-button) / 2);
  z-index: 1;

  border: 1px solid #FFFFFF;
  color: #FFF;
  border-radius: 50%;
  backdrop-filter: blur(2.5px);

  @include media-down($md) {
    display: none;
  }
}

.navigation-button--prev {
  left: 30px;
  transform: rotate(90deg);
}

.navigation-button--next {
  right: 30px;
  transform: rotate(-90deg);
}

// =====

.work-item__title {
  &--last {
    text-align: center;
  }
}

.work__description {
  width: 100%;
}

.work__description-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 0 20px 0;
  margin-bottom: 20px;

  border-bottom: 1px solid $border-color;
}

.work__description-title {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;

    /* text */

  color: #878787;
}

.work__gallery {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @include media-down($sm) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}
</style>
