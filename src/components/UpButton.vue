<template>
  <div class="up">
    <div class="up__container">
      <button class="up-button">Up button</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.up {
  position: fixed;
  bottom: 250px;
  width: 100%;
}

.up__container {
  @include container();
  display: flex;
  justify-content: flex-end;
}

.up-button {
  color: royalblue;
}
</style>
