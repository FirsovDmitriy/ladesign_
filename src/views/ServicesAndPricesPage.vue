<template>
  <div class="service-price">
    <div class="container">
      <h2 class="service-price__title">услуги и цены</h2>
    </div>
    <ServiceBlock />
    <PriceBlock />
    <CarouselProject>
      <template v-slot:title>
        реализованные проекты
      </template>
    </CarouselProject>
  </div>
</template>

<script>
import ServiceBlock from '@/components/service/ServiceBlock'
import PriceBlock from '@/components/price/PriceBlock'
import CarouselProject from '@/components/carousel/CarouselProject'

export default {
  components: {
    ServiceBlock, PriceBlock, CarouselProject
  }
}
</script>

<style lang="scss" scoped>
.service-price__title {
  text-align: center;
}
</style>
