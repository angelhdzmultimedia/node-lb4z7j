import * as quasar from 'quasar'
const { Quasar, Notify, Dialog, Dark, AppFullscreen, ...components } = quasar

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Quasar, {
    components,
    plugins: {
      Notify,
      Dialog,
      Dark,
      AppFullscreen,
    },
  })
})
