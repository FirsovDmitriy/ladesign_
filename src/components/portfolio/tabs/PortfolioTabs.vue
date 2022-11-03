<template>
  <div class="tab-bar">
    <ul class="tab-bar__list">
      <TabBlock
        v-for="tab in tabs" :key="tab.label"
        :tab="tab"
        @switch-tab="switchTab"
      />
    </ul>
  </div>
</template>

<script>
import content from '@/content'
import TabBlock from './TabBlock'

export default {

  components: {
    TabBlock
  },

  props: {},

  data () {
    return {
      tabs: content.tabs
    }
  },

  methods: {
    switchTab (label) {
      this.$emit('switch-tab', label)
      console.log('T', label)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.tab-bar {
  margin: 0 0 40px 0;
  border-bottom: 1px solid #D5D5D5;

  @include media-down($md) {
    width: 100%;
  }
}

.tab-bar__list {
  display: flex;
  min-width: 100%;

  @include media-down($md) {
    overflow-x: auto;

    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
