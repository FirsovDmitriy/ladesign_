<template>
  <li class="accordion__item">
    <button @click="isShow = !isShow" class="accordion__button">
      <p class="accordion__title"> {{ spoiler.title }} </p>
      <span
        class="accordion__arrow"
        :class="{ 'accordion__arrow--active': isShow }"
      >
        <IconArrowBottomRight />
      </span>
    </button>
    <div
      class="accordion__content"
      :class="{ 'accordion__content--active': isShow }"
    >
      <p class="accordion__text">
        {{ spoiler.text }}
      </p>
    </div>
  </li>
</template>

<script>
import IconArrowBottomRight from '@/components/icons/IconArrowBottomRight'

export default {
  name: 'AdvantageAccordionItem',

  components: {
    IconArrowBottomRight
  },

  props: {
    spoiler: {
      type: Object
    }
  },

  data () {
    return {
      isShow: false
    }
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.accordion__item {
  --test: 1px solid #D5D5D5;
  border-bottom: var(--test);
  overflow: hidden;
  padding: 25px 0;

  &:first-child {
    border-top: var(--test);
  }
}

.accordion__button {
  @include roboto-condensed();
  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: left;
  width: 100%;

  @include media-down($sm) {
    font-size: 16px;
    line-height: 24px;
  }
}

.accordion__title {
  font-weight: 300;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.12em;
  text-transform: uppercase;

  color: #3D3D3D;
}

.accordion__arrow {
  --circle-size: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex: 0 0 var(--circle-size);
  height: var(--circle-size);

  border: 1px solid $border-color;
  border-radius: 50%;
  transition: all 0.3s ease;

  &--active {
    transform: rotate(-90deg);
  }
}

.accordion__content {
  max-height: 0;
  transition: all 0.3s ease;
  overflow: hidden;

  &--active {
    max-height: 100vh;
    margin-top: 20px;
  }
}

.accordion__text {
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;

  color: #777777;

}
</style>
