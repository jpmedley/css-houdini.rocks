const state = require('./store/data')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CSS Houdini Experiments · @iamvdo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Experimenting with CSS Houdini Paint API' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'deeppink' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        
      }
      config.module.rules.push({
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /(node_modules|\.nuxt)/
      })
    }
  },
  generate: {
    routes: function (cb) {
      const routes = state.posts.map(post => {
        return post.url
      })
      cb(null, routes)
    }
  }
}
