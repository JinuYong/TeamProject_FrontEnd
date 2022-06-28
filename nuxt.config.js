export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title    : 'omym-frontend',
        htmlAttrs: {
            lang: 'ko'
        },
        meta     : [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'}
        ],
        link     : [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {href          : "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",
                rel        : "stylesheet",
                integrity  : "sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",
                crossorigin: "anonymous"
            },
        ],
        script   : [
            {src           : "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
                integrity  : "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
                crossorigin: "anonymous",

            },
            {
                src : "//dapi.kakao.com/v2/maps/sdk.js?appkey=2347b9f93173423c7fe7580ee45e5589"
            },
            // kakao map 라이브러리 불러오기
            {
                src :  "//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=LIBRARY",
            },
            {
                src :  "//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services"
            },
            {
                src :  "//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services,clusterer,drawing"
            },
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        'bootstrap-vue/nuxt',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
