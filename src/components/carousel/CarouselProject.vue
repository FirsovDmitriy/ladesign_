<template>
  <div class="project-carousel">
    <div class="project-carousel__container">
      <h3 class="project-carousel__title">
        <slot name="title"></slot>
      </h3>
      <Swiper
        :modules="modules"
        :loop="true"
        :speed="800"
        :slides-per-view="1"
        :space-between="30"
        :navigation="{
          prevEl: '.project-carousel__button-prev',
          nextEl: '.project-carousel__button-next'
        }"
        :breakpoints="{
          576: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          769: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4
          }
        }"
      >
        <SwiperSlide v-for="slide in 12" :key="slide">
          <ProjectCarouselSlide />
        </SwiperSlide>
        <button class="project-carousel__button-prev navigation-button">
          <IconArrow />
        </button>
        <button class="project-carousel__button-next navigation-button">
          <IconArrow />
        </button>
      </Swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

import IconArrow from '@/components/icons/IconArrow.vue'
import ProjectCarouselSlide from './ProjectCarouselSlide'

export default {
  components: {
    Swiper,
    SwiperSlide,
    IconArrow,
    ProjectCarouselSlide
  },

  data () {
    return {
      modules: [Navigation],
      isShowFancybox: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.project-carousel {
  // margin: 0 0 150px 0;
}

.project-carousel__container {
  @include container();
}

.project-carousel__title {
  margin: 0 0 50px 0;
  text-align: center;
}

.project-carousel__button-prev,
.project-carousel__button-next {
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

.project-carousel__button-prev {
  left: 30px;
  transform: rotate(90deg);
}

.project-carousel__button-next {
  right: 30px;
  transform: rotate(-90deg);
}
</style>

<style lang="scss">
@import "@/assets/styles/config";

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
</style>
