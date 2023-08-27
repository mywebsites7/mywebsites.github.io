module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Mohammed-Khalil Ghali Projects","short_name":"KMohammed-Khalil Ghali Projects","start_url":"/","background_color":"#1b2d3a","theme_color":"#1b2d3a","display":"minimal-ui","icon":"src/images/mojePhotoSquare.jpg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"57e5ff82fbc9b9347b12b7e79c996f11"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":[null]},
    },{
      plugin: require('../node_modules/gatsby-plugin-gatsby-cloud/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-omni-font-loader/gatsby-browser.js'),
      options: {"plugins":[],"mode":"async","enableListener":true,"preconnect":["https://fonts.gstatic.com"],"web":[{"name":"Roboto Mono","file":"https://fonts.googleapis.com/css2?family=Roboto+Mono"}]},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
