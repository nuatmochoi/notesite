/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "02.html",
    "revision": "1e78cf52ff9a8016e8918c3d1bbeece8"
  },
  {
    "url": "03.html",
    "revision": "0facbdbf3be742d99127bcaf98a3ef6b"
  },
  {
    "url": "04.html",
    "revision": "ab483ba95817ddebd4dee427b4538db9"
  },
  {
    "url": "05.html",
    "revision": "60edacaeb6fb14030c04d45b86c42d37"
  },
  {
    "url": "06.html",
    "revision": "1441e1b7c775cc458ff58351fd3db0fa"
  },
  {
    "url": "07.html",
    "revision": "8cd8ae29366aabce055b98dac8215053"
  },
  {
    "url": "08.html",
    "revision": "53ff354e00c6df1b60fcd91c34b27b70"
  },
  {
    "url": "404.html",
    "revision": "20377dfc040caf185fbc2083f3b0b229"
  },
  {
    "url": "assets/css/0.styles.096013c7.css",
    "revision": "7b8bc0a0892fff751a389272c860ecfc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.af6dba14.js",
    "revision": "eae9c361b34d58f7ea40bdced35a0004"
  },
  {
    "url": "assets/js/11.cda827c0.js",
    "revision": "f876e0e623a4d321caa30f9aafdfbcb7"
  },
  {
    "url": "assets/js/12.abd301ab.js",
    "revision": "82d33ea9a5530d13bec133876d5febd8"
  },
  {
    "url": "assets/js/13.7c59abbc.js",
    "revision": "91ded893036f818f2fe3077a4b4c7b54"
  },
  {
    "url": "assets/js/14.32cf25ee.js",
    "revision": "70d036f8693ecf018e1c0fc5dc0bd26c"
  },
  {
    "url": "assets/js/2.2b413f48.js",
    "revision": "e7243c4bad87c96fac07dc8d413602a7"
  },
  {
    "url": "assets/js/3.9a023001.js",
    "revision": "4d59b9a62aaeb37455ae893525275b71"
  },
  {
    "url": "assets/js/4.a57bf471.js",
    "revision": "e2cc88151bfc10869e6d83e17290fd8e"
  },
  {
    "url": "assets/js/5.48a0f058.js",
    "revision": "4cb57eb5136e5704ed782ad8dba78263"
  },
  {
    "url": "assets/js/6.33446d39.js",
    "revision": "8ec628ce61a7555d47255fbedc751026"
  },
  {
    "url": "assets/js/7.63882a72.js",
    "revision": "2b7c6e2ce14726919389c68d22b613e3"
  },
  {
    "url": "assets/js/8.8247d324.js",
    "revision": "21ec9c60f056e9a2fc608a7d0d59779e"
  },
  {
    "url": "assets/js/9.ea0270c8.js",
    "revision": "b3c8ba9b782721a6012dcc7389626ba5"
  },
  {
    "url": "assets/js/app.7598ef95.js",
    "revision": "9fb285f37cf49ec358af6a47ab97e240"
  },
  {
    "url": "images/icon-128x128.png",
    "revision": "9a80fabe0de8d2b8f0798c4d229ee6db"
  },
  {
    "url": "images/icon-144x144.png",
    "revision": "a0e13a3da895876d758d2ac87c9197a9"
  },
  {
    "url": "images/icon-152x152.png",
    "revision": "4dc53bb75fae620bfd3bfcc52776b9c0"
  },
  {
    "url": "images/icon-192x192.png",
    "revision": "606c3a8244dba1231eaa1260ea41f026"
  },
  {
    "url": "images/icon-384x384.png",
    "revision": "55b4c6f4424c77ee2b377e336264ae9f"
  },
  {
    "url": "images/icon-512x512.png",
    "revision": "afe4e4c777f208fe21be7cdeb0be8298"
  },
  {
    "url": "images/icon-72x72.png",
    "revision": "89f29163196e77a49a4034b9bd913f7d"
  },
  {
    "url": "images/icon-96x96.png",
    "revision": "3763fe1c112c9dc6f44572f1c23a4805"
  },
  {
    "url": "index.html",
    "revision": "b81a46299a647eeb10f8e8c4761c7878"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
