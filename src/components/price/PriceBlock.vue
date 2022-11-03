<template>
  <div class="prices">
    <div class="prices__container">
      <h3 class="prices__title">
        стоимость разработки дизайе-проекта
      </h3>
      <div class="prices__row">
        <PriceCard
          :isActive="isActive"
          v-for="price in content.prices"
          :key="price.trade_offer"
          :price="price"
        />
      </div>
      <div class="prices__footer">
        <PriceButtonOpen
          :isActive="isActive"
          @toggle="isActive = !isActive"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PriceCard from '@/components/price/PriceCard'
import PriceButtonOpen from './PriceButtonOpen.vue'

import content from '@/content'

export default {
  name: 'PriceBlock',

  components: {
    PriceCard,
    PriceButtonOpen
  },

  data () {
    return {
      isActive: false,
      content
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.prices {
  margin: 0 0 150px 0;
}

.prices__container {
  @include container();
}

.prices__title {
  max-width: 400px;
  margin: 0 auto 50px auto;
  text-align: center;

}

.prices__row {
  display: flex;
  justify-content: space-between;
  margin: 0 0 50px 0;

  @include media-down($md) {
    flex-direction: column;
  }
}

.prices__footer {
  display: flex;
  justify-content: center;
}
</style>
