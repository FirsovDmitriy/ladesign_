<template>
  <div class="application">
    <button @click="openModalWindow" class="application__button">
      оставить заявку на проект
      <span class="application__icon">
        <IconArrowTopRight />
      </span>
    </button>
    <Teleport to="body">
      <div
        v-show="isShow"
        class="modal"
      >
        <div class="modal__wrapper">
          <Transition>
            <div class="modal__content" v-show="isShow">
              <h3>
                оставЬТЕ СВОИ КОНТАКТЫ. мЫ СВЯЖЕМСЯ С ВАМИ И ОБСУДИМ ВАШ ПРОЕКТ
              </h3>
              <form action="#" class="modal__callback">
                <div class="modal__callback-row">
                  <BaseControl
                    v-for="control in form"
                    :key="control.placeholder"
                    :control="control"
                    class="modal__callback-input"
                  />
                </div>
                <div class="modal__actions">
                  <BaseButton purple="true">
                    отправить
                  </BaseButton>
                  <p class="modal__agreement">
                    Нажимая на кнопку, я даю <a href="#" class="modal__link">согласие на обработку персональных данных</a>
                  </p>
                </div>
              </form>
              <button
                @click="closeModalWindow"
                class="modal__close"
              >
                <XIcon />
              </button>
            </div>
            <!-- /.modal__content -->
          </Transition>
        </div>
        <!-- /.modal__wrapper -->
        <div @click="closeModalWindow" class="modal__backdrop"></div>
        <!-- /.modal__backdrop -->
      </div>
    </Teleport>
  </div>
</template>

<script>
import BaseControl from './ui/BaseControl.vue'
import BaseButton from './ui/BaseButton.vue'
import XIcon from './icons/XIcon.vue'
import IconArrowTopRight from '@/components/icons/IconArrowTopRight'

export default {
  components: {
    BaseControl,
    BaseButton,
    XIcon,
    IconArrowTopRight
  },

  data () {
    return {
      isShow: false,
      form: [
        {
          id_input: 'name',
          placeholder: 'Ваше имя'
        },
        {
          id_input: 'phone',
          placeholder: 'Ваш телефон'
        }
      ]
    }
  },

  methods: {
    openModalWindow () {
      this.isShow = true
      document.body.style.overflow = 'hidden'
    },

    closeModalWindow () {
      this.isShow = false
      document.body.style.overflow = 'visible'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.v-enter-active,
.v-leave-active {
  transition: transform 0.5s ease-out;
}

.v-enter-from,
.v-leave-to {
  // opacity: 0;
  transform: translateX(-20%);
}

.application {
  margin: 110px auto;
}

.application__button {
  font-weight: 300;
  font-size: 40px;
  line-height: 47px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;

  /* main/main */

  color: #3D3D3D;

  border-bottom: 1px solid $border-color;

}

.application__icon {
  align-self: flex-start;
  padding: 7.5px;

  svg {
    width: 20px;
    height: 20px;
  }
}

.modal {}

.modal__close {
  position: absolute;
  right: 0;
  bottom: 101%;
}

.modal__backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($color: #000000, $alpha: $blackout);
  z-index: 99;
}

.modal__wrapper {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: var(--window-width, 800px);
  width: 100%;
  height: auto;
  z-index: 10000;

  display: flex;
  justify-content: center;
  align-items: center;

  @include media-down($md) {
    --window-width: 600px;
  }

  @include media-down($sm) {
    --window-width: 291px;
  }
}

.modal__content {
  position: relative;
  padding: 50px;
  background: #FFF;

  @include media-down($sm) {
    padding: 15px;
  }
}

.modal__callback-row {
  display: flex;
  margin: 40px 0;

  @include media-down($sm) {
    flex-direction: column;
  }
}

.modal__callback-input {
  flex: 1 0 auto;

  &:not(:last-child) {
    margin: 0 30px 0 0;
  }
}

.modal__actions {
  display: flex;
  align-items: center;
}

.modal__agreement {
  flex: 0 0 310px;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;

  margin-left: 34px;

  /* text */

  color: #878787;
}

.modal__link {
  color: #777777;
  text-decoration-line: underline;
}
</style>
