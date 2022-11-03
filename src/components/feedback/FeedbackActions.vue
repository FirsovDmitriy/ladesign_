<template>
  <div class="feedback-actions">
    <BaseButton purple="true">
      отправить
      <span class="feedback-actions__button-icon">
        <IconArrowTopRight />
      </span>
    </BaseButton>
    <p class="feedback-actions__agreement">
      Нажимая на кнопку, я даю
      <a href="#" class="feedback-actions__link">согласие на обработку персональных данных</a>
    </p>
  </div>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue'
import IconArrowTopRight from '../icons/IconArrowTopRight.vue'

export default {
  components: {
    BaseButton,
    IconArrowTopRight
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.feedback-actions {
  display: flex;
  align-items: center;

  @include media-down($sm) {
    flex-direction: column;
    align-items: flex-start;
  }
}

.feedback-actions__button-icon {
  margin-left: 10px;
}

.feedback-actions__agreement {
  max-width: 225px;
  margin: 0 0 0 30px;

  font-weight: 400;
  font-size: 13px;
  line-height: 0,15;

  color: #878787;

  @include media-down($sm) {
    margin: 20px 0 0 0;
  }
}

.feedback-actions__link {
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;

  text-decoration-line: underline;

  color: #393246;
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration-line: none;
  }
}
</style>
