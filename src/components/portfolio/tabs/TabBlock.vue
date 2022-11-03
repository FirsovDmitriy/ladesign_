<template>
  <li
    class="tab"
    :class="{ 'tab--active': isActive }"
  >
    <button
      @click="switchTab"
      class="tab__text"
    >
      {{ tab.text }}
    </button>
    <span class="tab__label">12</span>
  </li>
</template>

<script>
export default {
  name: 'TabBlock',

  props: {
    tab: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isActive: false
    }
  },

  methods: {
    switchTab () {
      this.$emit('switch-tab', this.tab.label)
      console.log('tab', this.tab.label)
    }
  },

  mounted () {
    if (this.tab.label === 1) this.isActive = true
  }
}
</script>

<style lang="scss" scoped>
.tab {
  position: relative;
  flex-shrink: 0;
  padding: 10px 0;

  &:not(:last-child) {
    margin: 0 50px 0 0;
  }

  &--active {
    &::after {
      content: '';
      display: block;

      position: absolute;
      bottom: 0;

      width: 100%;
      height: 2px;
      background: #393246;
    }
  }
}

.tab__text {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.tab__label {
  position: absolute;
  top: 0;
  left: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 0 0 0 5px;
}
</style>
