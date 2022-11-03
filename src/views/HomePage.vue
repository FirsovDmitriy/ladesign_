<template>
  <div class="home">
    <TheMainScreen />
    <AdvantageBlock />
    <PortfolioGallery />
  </div>
</template>

<script>
import TheMainScreen from '@/components/TheMainScreen'
import PortfolioGallery from '@/components/portfolio/PortfolioGallery'
import AdvantageBlock from '@/components/advantage/AdvantageBlock.vue'

export default {
  name: 'HomeView',
  components: { TheMainScreen, PortfolioGallery, AdvantageBlock }
}
</script>
