<template>
  <div class="portfolio">
    <div class="portfolio__container">
      <div class="portfolio__header">
        <h2 class="portfolio__title">портфолио</h2>
        <PortfolioTabs
          @switch-tab="switchTab"
        />
      </div>
      <!-- /.portfolio__header -->
      <div v-if="tab === 1" class="portfolio__gallery">
        <PortfolioCard
          v-for="photo in $store.state.photos"
          :key="photo.id"
          :photo="photo"
          titleTest="Название в две строки"
        />
      </div>
      <!-- /.portfolio__gallery -->
      <div v-if="tab === 2" class="portfolio__gallery">
        <PortfolioCard
          v-for="card in 12" :key="card"
          titleTest="loft"
        />
      </div>
      <!-- /.portfolio__gallery -->
      <div class="portfolio__footer">
        <BaseButton>
          показать еще работы
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue'
import PortfolioTabs from '@/components/portfolio/tabs/PortfolioTabs'
import BaseButton from '@/components/ui/BaseButton'

import { mapActions } from 'vuex'

export default {
  components: {
    PortfolioCard, PortfolioTabs, BaseButton
  },

  data () {
    return {
      tab: 1
    }
  },

  methods: {
    ...mapActions([
      'fPhotos'
    ]),

    switchTab (label) {
      this.tab = label
    }
  },

  mounted () {
    this.fPhotos()
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.portfolio__container {
  @include container();
}

.portfolio__header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portfolio__gallery {
  display: grid;

  grid-template-areas:
    'g01 g02 g03 g04'
    'g01 g05 g06 g06'
    'g07 g07 g06 g06'
    'g08 g09 g10 g10';

  gap: 30px;
  margin: 0 0 40px 0;

  @include media-down($md) {
    grid-template-areas:
      'g01 g02'
      'g01 g03'
      'g04 g05'
      'g06 g06'
      'g07 g07'
      'g07 g07'
      'g08 g09'
      'g10 g10';
  }

  @include media-down($sm) {
    grid-template-areas:
      'g01'
      'g01'
      'g02'
      'g03'
      'g04'
      'g05'
      'g06'
      'g07'
      'g08'
      'g09'
      'g10'
  }
}

.portfolio__footer {
  display: flex;
  justify-content: center;
}
</style>
