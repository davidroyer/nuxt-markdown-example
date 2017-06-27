const { join } = require('path')
const dir = require('node-dir')
const routesArray = []
const fs = require('fs')
const _ = require('lodash')

var files = fs.readdirSync('./static/dynamicMarkdownFiles');
function createRoutesArray() {
  files.forEach(function (file) {
      var name = file.substr(0, file.lastIndexOf('.'));
      var route = '/dynamic/' + name
      routesArray.push(route)
  });
}

function returnRoutes() {
  dir.readFiles('./static/dynamicMarkdownFiles', {
        match: /.md$/,
        shortName: true,
        exclude: /^\./
        }, function(err, content, next) {
            if (err) throw err;
            // console.log('content:', content);
            next();
        },
        function(err, files){
            if (err) throw err;
            // fileNamesArray = [];
            files.forEach(function (file) {
                var name = file.substr(0, file.lastIndexOf('.'));
                var path = '/dynamic/' + name
                return path
            });
        });
}
// const fs = require('fs')
// const axios = require('axios')
// // const _ = require('lodash')

//
function getSlugs(post, index) {
  let slug = post.substr(0, post.lastIndexOf('.'));
  return `/dynamic/${slug}`
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
    // routes: function() {
    //   returnRoutes()
    // }
    routes: function() {

        return files.map(getSlugs)
        // return _.map(routesArray, function(file) {
        //   let slug = file.substr(0, file.lastIndexOf('.'));
        //   return `/dynamic/${slug}`
        // })

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
