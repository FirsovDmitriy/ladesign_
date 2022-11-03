<template>
  <BaseButton @click="$emit('toggle')" class="prices__toggle">
    <template v-if="isActive">свернуть</template>
    <template v-else>развернуть</template>
    <span
      class="prices__arrow"
      :class="{ 'prices__arrow--up-direction': isActive }"
    >
      <IconArrow />
    </span>
  </BaseButton>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton'
import IconArrow from '@/components/icons/IconArrow'

export default {
  components: {
    BaseButton, IconArrow
  },

  props: {
    isActive: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.prices__toggle {
  border: none;

  &:hover {
    background: transparent;
    color: #393246;
  }

  @include media-down($md) {
    display: none;
  }
}

.prices__arrow {
  width: 30px;
  height: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 0 0 10px;

  border: 1px solid #D5D5D5;
  border-radius: 50%;
  transition: transform 0.4s ease-in-out;

  &--up-direction {
    transform: rotate(-180deg);
  }
}
</style>
