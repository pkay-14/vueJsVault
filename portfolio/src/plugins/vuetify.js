// Styles
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import colors from 'vuetify/util/colors'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify(
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
  { 
    icons: {
      iconfont: 'fa' || 'md' || 'mdi'
    },
    theme: {
      themes: {
        dark:{
          background: '#111111'
        },
        colors: {
          primary: colors.red.darken4, 
          secondary: colors.red.lighten4
        }
      }
    }
  }
)
