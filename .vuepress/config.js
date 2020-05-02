module.exports = { 
    base : '/notesite/',
    assetsPublicPath: '/',
    title : 'Vue.js Lecture Note',
    serviceWorker: true,
    themeConfig: {
        sidebar: [
            ['/','Introduction'],
            '/02',
            '/03',
            '/04',
            '/05',
            '/06',
            '/07',
            '/08'
        ]
    },
    head:[
        ['link', {rel: 'icon', href: '/images/icon-144x144.png'}],
        ['link', {rel: "manifest", href: '/manifest.json'}]
    ],
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: true
        }]
    ]

}
