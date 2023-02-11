import { quasar } from '@quasar/vite-plugin'

export default defineNuxtConfig({
  css: [
    '~/assets/styles/quasar.sass',
    '@quasar/extras/roboto-font/roboto-font.css',
    '@quasar/extras/material-icons/material-icons.css',
    '@quasar/extras/fontawesome-v6/fontawesome-v6.css',
  ],
  build: {
    transpile: ['quasar', '@happy-dom/global-registrator'],
  },
  vite: {
    define: {
      // "process.env.DEBUG": false,
    },
    ssr: {
      external: ['happy-dom'],
    },
    plugins: [
      quasar({
        sassVariables: 'assets/styles/quasar-variables.sass',
      }),
    ],
  },
})
