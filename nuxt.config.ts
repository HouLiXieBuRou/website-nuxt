// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // routeRules: {
  //   '/': { ssr: false }
  // },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/eslint',
    'nuxt-monaco-editor'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        sepia: 'monokai'
      }
    }
  },
  extends: '@nuxt-themes/docus',
  vite: {
    server: {
      proxy: {
        '/pasteApi': {
          target: 'http://localhost:38629',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/pasteApi/, '')
        }
      }
    }
  }
});