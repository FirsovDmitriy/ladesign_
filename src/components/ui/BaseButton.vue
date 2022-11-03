<template>
  <button
    class="button"
    :class="{ 'button--grayish-purple':  purple }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',

  props: {
    purple: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config';

.button {
  @include roboto-condensed;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.15em;

  height: rem(50);
  padding: 0 rem(57);
  color: var(--text-color, #393246);
  background: var(--bg-color, transparent);
  border: 1px solid var(--border-color, #393246);
  text-transform: uppercase;
  transition: $transition;

  &:hover {
    --bg-color: #393246;
    --text-color: #fff;
  }

  &:active {
    --bg-color: #4A415A;
  }

  &:disabled {
    --bg-color: #5D5D5D;
  }

  &--grayish-purple {
    --text-color: #FFF;
    --bg-color: #393246;
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
