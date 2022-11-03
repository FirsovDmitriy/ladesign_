<template>
  <div class="control">
    <input
      :id="control.id_input"
      type="text"
      class="control__field"
      placeholder=" "
    >
    <label :for="control.id_input" class="control__label"> {{ control.placeholder }} </label>
  </div>
</template>

<script>
export default {
  name: 'BaseControl',

  props: {
    control: {
      type: Object
    }
  }
}
</script>

<style lang="scss" scoped>
.control {
  position: relative;
}

.control__field {
  width: 100%;
  // height: 30px;
  padding-bottom: 10px;

  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  /* body text */

  color: #777777;

  border: none;
  border-bottom: 1px solid #3D3D3D;
  outline: none;

  &:focus {
    outline: none;
    border-bottom: 2px solid #393246;
  }

  &:focus ~ .control__label, &:not(:placeholder-shown) ~ .control__label {
    transform: translateY(-25px) scale(0.8);
  }
}

.control__label {
  position: absolute;
  top: 0;
  left: 0;

  font-weight: 300;
  font-size: 16px;
  line-height: 0,24;
  /* identical to box height, or 150% */

  /* text input */

  // transform: translateY(4.8rem);
  transform-origin: 0 100%;
  transition: all 0.3s ease-in-out;
  cursor: text;

  color: #ADADAD;
}
</style>
