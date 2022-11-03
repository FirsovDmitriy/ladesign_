<template>
  <div
    class="card"
    :class="{ 'card--recommended': price.recommended }"
  >
    <div
      class="card__wrapper"
    >
      <span
        v-if="price.recommended"
        class="card__label"
      >
        recommend
    </span>
      <div class="card__header">
        <p class="card__title">
          {{ price.trade_offer }}
        </p>
        <p class="card__price">
          от {{ price.price }} ₽
        </p>
      </div>
    <div
      class="card__body"
      :class="{ 'card__body--active': isActive || open }"
    >
      <ul class="card__list">
        <li
          v-for="item in price.list_works"
          :key="item"
          class="card__item"
          :class="{ 'card__item--empty': item === '—' }"
        >
          {{ item }}
        </li>
      </ul>
      <BaseButton v-if="isMobile" purple="true" class="card__button card__button--mobile">
        Заказать
        <span>
          <IconArrowTopRight />
        </span>
      </BaseButton>
    </div>
    <!-- /.card__body -->
    <div class="card__footer">
      <BaseButton v-if="!isMobile" :purple="price.recommended" class="card__button">
        Заказать
        <span>
          <IconArrowTopRight />
        </span>
      </BaseButton>
      <PriceButtonOpen
        :isActive="open"
        @toggle="open = !open"
        class="card__toggle"
      />
    </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '../ui/BaseButton'
import IconArrowTopRight from '../icons/IconArrowTopRight'
import PriceButtonOpen from './PriceButtonOpen'

export default {
  name: 'PriceCard',

  components: {
    BaseButton,
    IconArrowTopRight,
    PriceButtonOpen
  },

  props: {
    isActive: {
      type: Boolean
    },

    price: {
      type: Object
    }
  },

  data () {
    return {
      open: false,
      isMobile: false
    }
  },

  methods: {
    checkSize () {
      const screenWidth = document.documentElement.clientWidth

      if (screenWidth <= 768) {
        this.isMobile = true
      } else {
        this.isMobile = false
      }
    }
  },

  computed: {
    test () {
      return this.price.list_works.indexOf('—')
    }
  },

  mounted () {
    this.checkSize()
    window.addEventListener('resize', this.checkSize)
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.card {
  width: 33.3333%;
  margin: 0 -15px 0 -15px;

  &--recommended {
    .card__wrapper {
      position: relative;
      border: 2px solid #393246;
      border-top: none;
      border-bottom: none;

      @include media-down($md) {
        border-bottom: 2px solid #393246;
      }

      .card__label {
        position: absolute;

        transform: translateY(-48%);

        display: flex;
        justify-content: center;
        align-items: center;

        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.15em;
        text-transform: uppercase;

        /* main/main */

        color: #3D3D3D;

        width: 100%;

        &::after, &::before {
          content: '';
          position: absolute;
          width: 6vw;
          height: 2px;
          background-color: #393246;
        }

        &::after {
          left: 0;
        }

        &::before {
          right: 0;
        }
      }
    }
  }

  @include media-down($md) {
    width: 100%;
    margin: 0 0 30px 0;

    &:last-child {
      margin: 0;
    }
  }
}

.card__wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 15px;
  border: 1px solid #D5D5D5;

  @include media-down($md) {
    margin: 0;
  }
}

.card__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #D5D5D5;
}

.card__title {
  font-weight: 400;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  /* main/main */

  color: #3D3D3D;

  margin: 0 0 15px 0;

}

.card__body {
  flex: 1 0 auto;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;

  &--active {
    max-height: 100vh;
  }
}

.card__list {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
}

.card__item {
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  display: flex;
  align-items: center;

  color: #777777;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &--empty {
    flex: auto;
  }

  &--empty:last-child {
    flex: 0;
  }
}

.card__price {
  font-weight: 400;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;

/* text */

color: #878787;
}

.card__button {
  width: 100%;

  span {
    margin-left: 10px;
  }

  &--mobile {
    width: 100%;
  }
}

.card__toggle {
  display: none;
  width: 100%;

  @include media-down($md) {
    display: flex;
    border: 1px solid #393246;
  }
}
</style>
