<template>
  <TheHeader />
  <main class="page-content">
    <router-view />
  </main>
  <ModalWindow />
  <UpButton />
  <TheFooter />
</template>

<script>
import TheHeader from '@/components/header/TheHeader'
import TheFooter from '@/components/TheFooter'
import ModalWindow from '@/components/ModalWindow'
import UpButton from './components/UpButton.vue'

export default {
  name: 'App',

  components: {
    TheHeader,
    TheFooter,
    ModalWindow,
    UpButton
  }
}
</script>

<style lang="scss">

</style>
