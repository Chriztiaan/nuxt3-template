// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    nitro: {
        preset: 'netlify'
    },
    devServer: {
        port: 8080
    },
    components: [{
        path: '~/components',
        pathPrefix: false,
    }],
    css: ['vuetify/lib/styles/main.sass'],
    build: {
        transpile: ['vuetify'],
    }
})
