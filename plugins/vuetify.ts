import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'; // Ensure you are using css-loader
import { mdi } from 'vuetify/iconsets/mdi';


export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: true,
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        sets: {
            mdi,
        }
    },
  })

  nuxtApp.vueApp.use(vuetify)
});