<template>
  <li class="answer">
    <h4 class="answer__title"> {{ answer.title }} </h4>
    <p class="answer__text">
      {{ answer.text }}
    </p>
  </li>
</template>

<script>
export default {
  name: 'SeriveItem',

  props: {
    answer: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.answer {
  padding-bottom: 25px;
  border-bottom: 1px solid #D5D5D5;

  &:not(:last-child) {
    margin: 0 0 25px 0;
  }
}

.answer__title {
  margin: 0 0 12px 0;
}

.answer__text {
  font-weight: 300;
  font-size: 16px;
  line-height: 1.5;
  /* or 150% */

  /* body text */

  color: #777777;
}
</style>
