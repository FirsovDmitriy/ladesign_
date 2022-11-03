<template>
  <div class="feedback">
    <h3 class="feedback__title">Напишите нам</h3>
    <p class="feedback__text">
      Мы всегда рады ответить на интересующие  вас вопросы. Заполните форму и наш специалист свяжется с вами.
    </p>
    <form action="" class="feedback__form">
      <BaseControl
        v-for="control in content.form"
        :key="control.placeholder"
        :control="control"
        class="feedback__field"
      />
      <div class="upload-file feedback__upload-file">
        <input
          type="file"
          class="upload-file__input"
          name=""
          id="upload-file-input"
        >
        <label for="upload-file-input" class="upload-file__label">
          <IconAttach />
          <span class="upload-file__text">Прикрепить файл</span>
        </label>
      </div>
      <FeedbackActions />
    </form>
  </div>
</template>

<script>
import BaseControl from '../ui/BaseControl.vue'
import FeedbackActions from '@/components/feedback/FeedbackActions'

import content from '@/content'
import IconAttach from '../icons/IconAttach.vue'

export default {
  components: {
    BaseControl,
    FeedbackActions,
    IconAttach
  },

  data () {
    return {
      content
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.feedback {}

.feedback__title {
  margin-bottom: 30px;
}

.feedback__form {
  margin-top: 30px;
}

.feedback__field {

  &:not(:last-child) {
    margin-bottom: 40px;
  }
}

.upload-file {
  width: 188px;
  margin-bottom: 30px;
}

.upload-file__input {
  position: absolute;
  opacity: 0;
  z-index: -1;
  overflow: hidden;
}

.upload-file__label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.upload-file__text {
  font-weight: 700;
  font-size: 16px;
  line-height: 0,24;
  /* identical to box height, or 150% */

  /* body text */

  color: #777777;
  margin-left: 10px;

  @include media-down($sm) {
    font-weight: 300;
  }
}
</style>
