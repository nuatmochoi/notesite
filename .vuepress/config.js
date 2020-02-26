module.exports = { 
    base : '/notesite/',
    assetsPublicPath: '/',
    title : 'Vuejs Lecture Note',
    serviceWorker: true,
    themeConfig: {
        sidebar: [
            ['/','Introduction'],
            '/02',
            '/03',
            '/04',
            '/05'
        ]
    }
}
