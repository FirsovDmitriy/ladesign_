
import { createStore } from 'vuex'
// import instance from '@/api/base'

// const UNSPLASH__URL = 'https://api.unsplash.com/search/photos?query=loft'

export default createStore({
  state () {
    return {
      innerPage: false,

      photos: []
    }
  },

  getters: {},

  mutations: {
    SET_PHOTOS (state, photos) {
      state.photos = photos
    }
  },

  actions: {
    async fPhotos ({ commit }) {
      const response = await fetch('https://api.unsplash.com/search/photos?query=loft&client_id=PQmRETP-Jwfwe1Bkk7-nSCfHmtaxajE3BiSzPIClCQE')
      const data = await response.json()
      console.log(data)
      commit('SET_PHOTOS', data.results)
    }
  }
})
