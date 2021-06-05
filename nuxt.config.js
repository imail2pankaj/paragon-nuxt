module.exports = {
    target: 'server',
    head: {
        title: 'Paragon Two Wheeler Accessories',
        meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: '' }
        ],
        link: [
          { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/bootstrap.css' },
          { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/lightslider.css' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/misc.css' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/testimonails-slider.css' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,600,400italic,600italic,700,700italic' },
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Oswald:300,400,500,600' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/jis.min.css' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/flexslider.css' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/loader.css' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/SpryTabbedPanels.css' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/video-js.css' },
          { rel: 'stylesheet', href: 'https://paragontwowheeleraccessories.com/css/stickytooltip.css' },
        ],
        script: [
            { src: 'https://paragontwowheeleraccessories.com/js/vendor/modernizr-2.6.1-respond-1.1.0.min.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/vendor/jquery.min.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/stickytooltip.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/SpryTabbedPanels.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/vendor/jquery-ui.min.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/loader1.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/video.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/jis.jquery.min.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/vendor/jquery.gmap3.min.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/menu_slide.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/model-slider.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/jquery.flexslider.js' },
            { src: 'https://paragontwowheeleraccessories.com/js/custom.js' },
        ],
      },
    css: [
        '@/assets/css/bootstrap.css',
        '@/assets/css/custom.css',
        '@/assets/css/menu.css',
        '@/assets/css/responsive.css',
    ],
    axios: {
      baseURL: 'http://localhost/paragon-api/api.php', // Used as fallback if no runtime config is provided
      credentials: false,
      proxyHeaders: false,
      headers: {
        common: {
          'Accept': 'application/json',
          // 'Access-Control-Allow-Origin': '*'
        },
      }
      // https: true,
    },
    publicRuntimeConfig: {
      axios: {
        baseURL: 'http://localhost/paragon-api/api.php',
        credentials: false,
        proxyHeaders: false,
        headers: {
          common: {
            'Accept': 'application/json',
            // 'Access-Control-Allow-Origin': '*'
          },
        }
      }
    },
    auth: {
      strategies: {
        local: {
          endpoints: {
            login: { url: 'login', method: 'post', propertyName: 'data.token' },
            user: { url: 'me', method: 'get', propertyName: 'data' },
            logout: false
          }
        }
      }
    },
    // plugins: ['~/plugins/repository'],
    modules: [
      '@nuxtjs/axios',
      '@nuxtjs/auth-next',
      '@nuxtjs/proxy'
    ],
    proxy: { 
      '/api.php': 'http://localhost:3000' 
    }, 
}