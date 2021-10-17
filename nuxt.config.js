export default {

  target: 'static',
  ssr: true,

  head: {
    title: 'Sloth Loader',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;800&display=swap'}
    ]
  },

  components: true,
  
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
  ],

  robots: {
    UserAgent: '*',
    Disallow: ''
  },

  styleResources: {
    scss: [
        '~/styles/style.scss',
    ]
  },
}
