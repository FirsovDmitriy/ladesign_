<template>
  <div class="accordion">
    <ul class="accordion__list">
      <AdvantageAccordionItem
        v-for="spoiler in content.spoilers"
        :key="spoiler.id"
        :spoiler="spoiler"
      />
    </ul>
  </div>
</template>

<script>
import AdvantageAccordionItem from './AdvantageAccordionItem'

import content from '@/content'

export default {
  name: 'AdvantageAccordion',

  components: { AdvantageAccordionItem },

  data () {
    return {
      content
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.accordion {
  margin-top: 50px;
}
</style>
