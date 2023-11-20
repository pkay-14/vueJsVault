import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import VueVideoPlayer from '@videojs-player/vue'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueVideoPlayer)
  .mount('#app')
