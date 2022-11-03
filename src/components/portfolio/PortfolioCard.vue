<template>
  <article
    class="gallery-card"
    :class="{}"
  >
    <div class="gallery-card__overlay">
      <div class="gallery-card__content">
        <h4 class="gallery-card__title"> {{ titleTest }} </h4>
        <p class="gallery-card__subtitle">Unique collection</p>
      </div>
    </div>
    <!-- /.gallery-card__overlay -->
    <div class="gallery-card__img-wrapper">
      <img :src="photo.urls.regular" class="gallery-card__img" alt="" >
    </div>
  </article>
</template>

<script>
export default {
  name: 'PortfolioCard',

  props: {
    titleTest: {
      type: String
    },

    photo: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.gallery-card {
  position: relative;
  width: 100%;
  cursor: pointer;

  &:hover {
    .gallery-card__overlay {
      opacity: 1;
    }
  }

  &:first-child {
    grid-area: g01;

    .gallery-card__img-wrapper {
      padding-top: aspect-ratio(585, 278);
    }
  }

  &:nth-child(6) {
    grid-area: g06;
  }

  &:nth-child(7) {
    grid-area: g07;
  }

  &:nth-child(8) {
    grid-area: g08;
  }

  &:nth-child(9) {
    grid-area: g09;
  }

  &:nth-child(10) {
    grid-area: g10;
  }

  &:nth-child(7), &:nth-child(10) {
    .gallery-card__img-wrapper {
      --aspect-ratio: 44%;
      padding-top: aspect-ratio(278, 585);

      @include media-down($sm) {
        padding-top: 100%;
      }
    }
  }
}

.gallery-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  width: 100%;
  height: 100%;

  background: rgba($color: #000000, $alpha: $blackout);
  opacity: 0;
  transition: opacity 0.3 ease-out;
}

.gallery-card__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  color: $white;
}

.gallery-card__title, .gallery-card__subtitle {
  text-align: center;
}

.gallery-card__title {
  margin-bottom: 10px;
}

.gallery-card__subtitle {
  font-weight: 300;
  font-size: $text-lg;
}

.gallery-card__img-wrapper {
  position: relative;
  height: 0;
  overflow: hidden;
  padding-top: 100%;
}

.gallery-card__img {
  position: absolute;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;

  width: 100%;
  height: 100%;

  margin: auto;
  object-fit: cover;
}
</style>
