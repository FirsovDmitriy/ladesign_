<template>
  <div class="service">
    <div class="service__container">
      <div class="service__wrapper">
        <div class="service__col">
          <h3 class="service__title">
            Зачем вам нужен дизайн-проект
          </h3>
        </div>
        <ul class="service__list-answer">
          <ServiceItem
            v-for="item in content.answers"
            :key="item.title"
            :answer="item"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ServiceItem from './ServiceItem.vue'

import content from '@/content'

export default {
  components: {
    ServiceItem
  },

  data () {
    return {
      content
    }
  },

  mounted () {
    console.log(this.content)
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.service {
  margin-bottom: 150px;

  @include media-down($md) {
    margin-bottom: 70px;
  }
}

.service__container {
  @include container();
}

.service__wrapper {
  display: flex;
  justify-content: space-between;

  @include media-down($md) {
    flex-direction: column;
  }
}

.service__title {
  max-width: 315px;

  @include media-down($md) {
    max-width: none;
    margin-bottom: 30px;
  }
}

.service__list-answer {
  flex: 0 1 687px;

  @include media-down($md) {
    flex: 0 0 auto;
  }
}
</style>
