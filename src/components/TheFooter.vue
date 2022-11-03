<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__social">
        <ul class="footer__list">
          <li class="footer__item">
            <a href="#" class="footer__link">houzz</a>
          </li>
          <li class="footer__item">
            <a href="#" class="footer__link">vk</a>
          </li>
        </ul>
      </div>
      <p class="footer__copyright">© 2022 LA Design, all rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

.<style lang="scss" scoped>
@import '@/assets/styles/config';
.footer {
  padding: rem(90) 0;
  background: $smoke-white;
}

.footer__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.footer__social {
  margin-bottom: rem(30);
}

.footer__list {
  display: flex;
}

.footer__item {
  &:not(:last-child) {
    margin: 0 rem(30) 0 0;
  }
}
.footer__link {
  @include roboto-condensed();
  font-size: $text-sm;
  line-height: 1.6;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.footer__copyright {
  font-size: rem(14);
  line-height: 1.5;
  color: $gray;
}
</style>
