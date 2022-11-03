<template>
  <div class="contacts">

        <div class="contacts__container">
          <h2 class="contacts__title">Контакты</h2>
        <div class="contacts__wrapper">
          <FeedbackBlock class="contacts__feedback" />
          <div class="contacts__col">
            <h3>Наши контакты</h3>
            <ul class="contacts__list">
              <li class="contacts__item">
                <span class="contacts__icon">
                  <IconPhone />
                </span>
                <a href="tel:+79184123443">+7 918 412-34-43</a>
              </li>
              <li class="contacts__item contacts__item--2">
                <span class="contacts__icon">
                  <IconMail />
                </span>
                <a href="mailto:ladesign@inbox.ru" class="contacts__mail">ladesign@inbox.ru</a>
              </li>
              <li class="contacts__item">
                <span class="contacts__icon ">
                  <IconClock />
                </span>
                Пн - Сб 9:00 — 18:00
              </li>
              <li class="contacts__item">
                <span class="contacts__icon">
                  <IconLocation />
                </span>
                г. Краснодар, ул. Братьев Игнатовых, 1/1
              </li>
            </ul>
          </div>
        </div>
        </div>
        <!-- /.contacts__container -->

      </div>
      <!-- /.contacts -->
</template>

<script>
import FeedbackBlock from '@/components/feedback/FeedbackBlock'
import IconMail from '../components/icons/IconMail.vue'
import IconClock from '../components/icons/IconClock.vue'
import IconLocation from '@/components/icons/IconLocation'
import IconPhone from '../components/icons/IconPhone.vue'

export default {
  name: 'ContactPage',

  components: {
    FeedbackBlock,
    IconMail,
    IconClock,
    IconLocation,
    IconPhone
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/config";

.contacts {}

.contacts__container {
  @include container();
}

.contacts__title {
  text-align: center;
}

.contacts__wrapper {
  display: flex;
  justify-content: space-between;

  @include media-down(992px) {
    flex-direction: column;
  }
}

.contacts__feedback {
  max-width: 515px;

  @include media-down(992px) {
    max-width: none;
    width: 100%;
    margin-bottom: 70px;
  }
}

.contacts__col {
  margin: 0 230px 0 0;

  @include media-down($lg) {
    margin: 0 40px 0 0;
  }
}

.contacts__list {
  display: grid;
  grid-template-columns: 240px;
  margin: 30px 0 0 0;

  @include media-down(992px) {
    grid-template-columns: repeat(2, 240px);
  }

  @include media-down($sm) {
    grid-template-columns: 1fr;
  }
}

.contacts__item {
  display: flex;
  align-items: center;

  font-size: 16px;
  line-height: 24px;
  /* or 150% */

  /* body text */

  color: #777777;

  &:not(:last-child) {
    margin: 0 0 25px 0;
  }

  &--2 {
    font-weight: 400;
    text-decoration-line: underline;
  }
}

.contacts__icon {
  margin: 0 17px 0 0;
}
</style>
