<template>
  <div class="popup">
    <div class="popup__overlay">
      <div class="popup__content">
        <Swiper
          :modules="modules"
        >
          <SwiperSlide>F</SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper, SwiperSlide
  },

  data () {
    return {
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.popup__overlay {
  width: 100%;
  height: 100%;
}
</style>
