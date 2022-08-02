export default {
    target: 'static', // default is 'server'
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
    lintOnSave: false,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "omym-frontend",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
            {
                href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css",
                rel: "stylesheet",
                integrity:
                    "sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor",
                crossorigin: "anonymous",
            },
            {
                rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css",
                integrity: "sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm",
                crossorigin: "anonymous"
            },
            // jQuery
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css",
                integrity:
                    "sha512-aOG0c6nPNzGk+5zjwyJaoRUgCdOrfSDhmMID2u4+OIslr0GjpLKo7Xm0Ao3xmpM4T8AmIouRkqwj1nrdVsLKEQ==",
                crossorigin: "anonymous",
                referrerpolicy: "no-referrer",
            },
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css",
            },
            // SummerNote
            {
                href: "https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.css",
                rel: "stylesheet",
            },
        ],
        script: [
            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js",
                integrity:
                    "sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2",
                crossorigin: "anonymous",
            },
            {
                src: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js",
            },
            // jQuery
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js",
                integrity:
                    "sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==",
                crossorigin: "anonymous",
                referrerpolicy: "no-referrer",
            },
            {
                src: "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js",
                integrity:
                    "sha512-uto9mlQzrs59VwILcLiRYeLKPPbS/bT71da/OEBYEwcdNUk8jYIy+D176RYoop1Da+f9mvkYrmj5MCLZWEtQuA==",
                crossorigin: "anonymous",
                referrerpolicy: "no-referrer",
            },
            // kakao map 라이브러리 불러오기
            // {
            //     src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=2347b9f93173423c7fe7580ee45e5589&libraries=services,clusterer,drawing",
            // },
            {
                type: "text/javascript",
                src: "//dapi.kakao.com/v2/maps/sdk.js?appkey=9c0ab16c7aa85bf5514d85cb7f46f6dc&libraries=services"
            },
            // SummerNote
            {
                src: "https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote.min.js"
            },
            {
                src: "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
            }
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        "~/plugins/validate.js",
        // '~/plugins/route.js'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // '@nuxtjs/eslint-module',
        // '@nuxtjs/moment'
    ],
    // moment:{
    //     locales:'ko',
    // },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "bootstrap-vue/nuxt",
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        // baseURL: "http://192.168.0.166:8000",
        baseURL: "http://localhost:8000",
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        // analyze: {
        //     analyzerMode: 'static'
        // },
        // extend(config, { isClient, isServer }) {
        //     console.log('webpack', config, isClient, isServer)
        // },
    },
};
