const { join } = require('path')
// const fs = require('fs')
// const axios = require('axios')
// // const _ = require('lodash')

//
function getSlugs(post, index) {
  // let slug = slugify(post.title)
  return `/dynamic/${post.slug}`
}
//
const postsArray = require('./static/posts.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt Example - Markdown Files',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js Example - Using Markdown Files by David Royer' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    ['@nuxtjs/markdownit', { linkify: true } ]
    // {
    //   src: '@nuxtjs/markdownit',
    //   options: { linkify: true }
    // }
  ],
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    // 'hover.css/css/hover-min.css',
    // 'bulma/bulma.sass',
    join('~assets/css/main.scss')
  ],
  router: {
    middleware: 'test'
  },
  generate: {
    routes: function() {
      return postsArray.map(getSlugs)
      // return axios.get('~/static/posts.json')
      // .then((res) => {
      //   return _.map(res.data, function(post, key) {
      //     return `/dynamic/${post.slug}`
      //   })
      //
      // })
    }
  },
  build: {
    /*
    ** Run ESLINT on save
    */
    extractCSS: true,
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
