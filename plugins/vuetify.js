import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const customLight = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    primary: '#bb86fc',
    //// 'primary-darken-1': '#3700B3',
    secondary: '#03c585',
    //// 'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}
const customDark = {
  dark: true,
  colors: {
    background: '#383F51',
    surface: '#3C4F76',
    primary: '#D68FD6',
    //// 'primary-darken-1': '#3700B3',
    secondary: '#0FF4C6',
    //// 'secondary-darken-1': '#018786',
    error: '#D7263D',
    info: '#DEFFF2 ',
    success: '#00A878',
    warning: '#AA5042',
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'dark',
      variations: {
        colors: ['primary', 'secondary'],
        lighten: 1,
        darken: 2,
      },
      themes: {
        customLight,
        customDark,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
