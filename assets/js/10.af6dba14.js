(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{220:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"router-pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#router-pwa"}},[t._v("#")]),t._v(" Router, PWA")]),t._v(" "),a("h2",{attrs:{id:"vue-router"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-router"}},[t._v("#")]),t._v(" Vue Router")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vue-router\n")])])]),a("p",[t._v("페이지 전체 정보가 routes 라는 곳에 들어가게 된다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// src/router/index.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/home'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" HomePage\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("이 정도로 path마다 뿌려지는 component 구현으로 충분하지만, tag를 정의하기 위해서 router view를 정의한다.\n"),a("router-view",[t._v("는 뷰 라이브러리를 썼을 때 제공하는 router 태그이다.")])],1),t._v(" "),a("ul",[a("li",[t._v("mode")])]),t._v(" "),a("p",[t._v("vue-router의 기본 모드는 "),a("em",[t._v("hash mode")]),t._v(". URL이 변경될 떄 페이지가 다시 로드되지 않음")]),t._v(" "),a("p",[t._v("변경을 위해 history 모드 사용 가능. 페이지를 다시 로드하지 않아도 URL 탐색 가능")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VueRouter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("router-link")])]),t._v(" "),a("p",[t._v("a href와의 차이 : to, replace 등의 vue-router에서 제공해주는 기능 제공 여부. router-link를 사용함으로써 히스토리 관리를 하지 않는 기능이라든지, to 속성에 parameter 등을 넘길 수 있게 된다.")]),t._v(" "),a("p",[t._v("url을 바꿨는데도 서버로 가지 않고 js파일로 조작이 어떻게 가능한가? -> "),a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/API/Window/history",target:"_blank",rel:"noopener noreferrer"}},[t._v("window history"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("router 구성방법")])]),t._v(" "),a("ol",[a("li",[t._v("기본 방식 : 요구사항이 많이 바뀌는 경우에 사용 (단순하게 구성)")]),t._v(" "),a("li",[t._v("nested router")]),t._v(" "),a("li",[t._v("named view")])]),t._v(" "),a("ul",[a("li",[t._v("SPA(Single Page Application)")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://docs.microsoft.com/en-us/archive/msdn-magazine/2013/november/images/dn463786.wasson_figure2_hires(en-us%2cmsdn.10).png",alt:"SPA lifecycle"}})]),t._v(" "),a("p",[t._v("예전에는 화면에 바뀌는 것을 수정하기 위해서 전체 파일을 받아오기 위해 서버까지 접근했는데,\n요즘에는 바뀌는 부분만 서버에 가서 요청함. 해당 역할을 vue router가 수행")]),t._v(" "),a("h3",{attrs:{id:"navigation-gaurd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#navigation-gaurd"}},[t._v("#")]),t._v(" Navigation gaurd")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("routes"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/home"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tcomponent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" Home\n\t\t"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("beforeEnter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("localStorage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getItem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\tpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/login"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\t\t\tquery"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirect"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" to"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fullPath "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("next")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("로컬 스토리지에 key가 있는지 확인하고 없으면 login 화면으로 넘기는 로직이다.")]),t._v(" "),a("li",[t._v("위 예시와 같이 네비게이션 가드를 통해 특정 라우팅에 대해 가드를 설정할 수 있다.")]),t._v(" "),a("li",[t._v("쉽게 말해, 특정 컴포넌트로 이동하기 전에 조건 처리를 통해 로그인이 되었는지 등 검증 로직을 수행할 수 있는 방법이다.")])]),t._v(" "),a("h2",{attrs:{id:"pwa"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa"}},[t._v("#")]),t._v(" PWA")]),t._v(" "),a("p",[t._v("Workbox가 가장 최신의 라이브러리이다.")]),t._v(" "),a("ul",[a("li",[t._v("모바일 앱과 같은 경험을 주는 최신 웹 앱")]),t._v(" "),a("li",[t._v("앱 icon, 앱 설치 banner, 모바일 push(notification), offline 경험 제공")]),t._v(" "),a("li",[t._v("html, css, js로 모바일과 같은 웹앱 구현")]),t._v(" "),a("li",[t._v("높은 사용자 경험을 제공하기 위한 웹앱 (페이징 속도를 올리는 등)")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://vuejsdevelopers.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vuejsdevelopers.com"),a("OutboundLink")],1),t._v(", "),a("a",{attrs:{href:"https://dev.to/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://dev.to"),a("OutboundLink")],1),t._v(" 와 같은 사이트들이 PWA로 개발이 되었다. 웹 어플리케이션으로 설치가 가능한 것을 확인할 수 있다. "),a("a",{attrs:{href:"https://pwa.rocks/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pwa.rocks/"),a("OutboundLink")],1),t._v(" 여기에서 더 많은 PWA 사이트를 확인 할 수 있다.")]),t._v(" "),a("h3",{attrs:{id:"pwa-특징"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa-특징"}},[t._v("#")]),t._v(" PWA 특징")]),t._v(" "),a("ul",[a("li",[t._v("App-like (Mobile App과 동일한 icon based 실행방식과 UX을 제공)")]),t._v(" "),a("li",[t._v("Discoverable (url로 사이트 접근 후 banner를 통해 oneclick 설치 가능)")]),t._v(" "),a("li",[t._v("Engagable (push 알람이 왔을 때 다시 앱으로 유입)")]),t._v(" "),a("li",[t._v("Connectivity (오프라인 웹앱 - 인터넷이 끊겨도 웹사이트가 잘 동작함)")]),t._v(" "),a("li",[t._v("https 위에서만 동작한다.")]),t._v(" "),a("li",[t._v("포보스나 익스페디아 등 많은 기업에서 사용한다.")]),t._v(" "),a("li",[t._v("일반 웹사이트와 동작이 다르다. PWA는 앱으로 설치하고 실행했을 때, launching image가 있어 모바일 앱 같아 보이고, 위에 url bar가 존재하지 않는 것을 확인할 수 있다.")])]),t._v(" "),a("h3",{attrs:{id:"pwa를-구성하는-기술"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa를-구성하는-기술"}},[t._v("#")]),t._v(" PWA를 구성하는 기술")]),t._v(" "),a("ol",[a("li",[t._v("Web App Manifest (manifest.json)")]),t._v(" "),a("li",[t._v("Service Workers (client-side javascript proxy) - 웹앱과 webserver 사이에 존재 (caching)")])]),t._v(" "),a("h3",{attrs:{id:"pwa-지원-브라우저"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa-지원-브라우저"}},[t._v("#")]),t._v(" PWA 지원 브라우저")]),t._v(" "),a("ul",[a("li",[t._v("파이어폭스, 오페라, 크롬, 삼성 인터넷, 엣지, 사파리(push 지원X) 등")]),t._v(" "),a("li",[t._v("삼성 인터넷과 크롬은 대부분의 기능을 제공한다.")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://www.christianoliveira.com/blog/wp-content/uploads/2018/06/pwa-browser-compatibility-features-700x325.jpg",alt:"PWA 지원 브라우저"}})]),t._v(" "),a("h3",{attrs:{id:"pwa는-실제-앱-마켓에-배포가능하다"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa는-실제-앱-마켓에-배포가능하다"}},[t._v("#")]),t._v(" PWA는 실제 앱 마켓에 배포가능하다?")]),t._v(" "),a("ul",[a("li",[t._v("OS레벨까지 내려왔음")]),t._v(" "),a("li",[t._v("application 관리 tab으로 존재함")]),t._v(" "),a("li",[t._v("플레이스토어에 배포하기 위해서는 mapping 하는 작업이 추가로 필요할 뿐이다.")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://youtu.be/xKZ0933D7hk?t=1364",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google I/O 2019 웹 세션"),a("OutboundLink")],1),t._v("에서 "),a("strong",[t._v("TWA (Trusted Web Activity)")]),t._v(" 라는 용어가 등장했는데, 이것은 Google Play에 PWA를 올릴 수 있는 App Frame 이다. App Store는 지원 예정이 없다.")])]),t._v(" "),a("h3",{attrs:{id:"web-app-manifest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-app-manifest"}},[t._v("#")]),t._v(" Web App Manifest")]),t._v(" "),a("p",[t._v("PWA의 설치와 앱 구성정보를 담고 있는 파일 (앱 아이콘, 런쳐 방식, 배경, 시작페이지 등)")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manifest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("manifest.json"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("아래 것들이 설정될 수 있음.")]),t._v(" "),a("ul",[a("li",[t._v("start url")]),t._v(" "),a("li",[t._v("launch image")]),t._v(" "),a("li",[t._v("display type : 웹앱이 모바일 앱의 느낌을 가질 수 있도록 결정짓는 속성 (전체 모양)\n"),a("ul",[a("li",[t._v("Standalone (url창 사라짐)")]),t._v(" "),a("li",[t._v("Browser")]),t._v(" "),a("li",[t._v("Fullscreen (non-app UI 사라짐)")]),t._v(" "),a("li",[t._v("Minimal-ui")])])]),t._v(" "),a("li",[t._v("display orientation")]),t._v(" "),a("li",[t._v("App icon")]),t._v(" "),a("li",[t._v("배경 색 : background color와 비슷하게 하는 것이 좋다.")])]),t._v(" "),a("h3",{attrs:{id:"web-app-install-banner"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web-app-install-banner"}},[t._v("#")]),t._v(" Web App Install Banner")]),t._v(" "),a("p",[t._v("PWA가 모바일적인 특징을 가지는 큰 부분")]),t._v(" "),a("ul",[a("li",[t._v("기존 앱 개발주기 : 구현 -> SDK 빌드 -> 스토어 배포 -> 검색 -> 앱 다운로드 -> 설치 -> 사용")]),t._v(" "),a("li",[t._v("PWA 앱 개발주기 : 구현 -> 사이트 배포 -> 검색 -> 사용 (자동설치, 항상 최신상태 유지)")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developers.google.com/web/fundamentals/app-install-banners/native",target:"_blank",rel:"noopener noreferrer"}},[t._v("install banner 동작조건"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("short name")]),t._v(" "),a("li",[t._v("name")]),t._v(" "),a("li",[t._v("icons (including a 192px and a 512px version)")]),t._v(" "),a("li",[t._v("https")])]),t._v(" "),a("p",[t._v("사용자가 30초만 사이트에 머무르면, install banner가 뜬다. (타이밍은 조절 가능)")]),t._v(" "),a("h3",{attrs:{id:"service-worker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-worker"}},[t._v("#")]),t._v(" Service Worker")]),t._v(" "),a("ul",[a("li",[t._v("오프라인 서비스, 푸쉬알람 등 Mobile 기능을 웹에서 가능하게 하는 코어 기술")]),t._v(" "),a("li",[t._v("PWA에서 가장 중요한 역할을 한다.")]),t._v(" "),a("li",[t._v("약자로 sw.js와 같이 많이 쓰임")]),t._v(" "),a("li",[t._v("서버에 배포할 때 service worker를 사용하려면 https를 사용해야한다.\n"),a("a",{attrs:{href:"https://www.netlify.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Netlify"),a("OutboundLink")],1),t._v("나 "),a("a",{attrs:{href:"https://firebase.google.com/docs/hosting?hl=ko",target:"_blank",rel:"noopener noreferrer"}},[t._v("Firebase Hosting"),a("OutboundLink")],1),t._v("을 사용하면 간단히 https로 배포할 수 있다.")])]),t._v(" "),a("p",[a("router-link",{attrs:{to:"chrome://inspect/#service-workers"}},[t._v("chrome://inspect/#service-workers")]),t._v("\n-> 현재 브라우저에서 돌아가고 있는 service worker를 전부 볼 수 있는 개발자도구")],1),t._v(" "),a("p",[a("strong",[t._v("주요특징")])]),t._v(" "),a("ul",[a("li",[t._v("Caching")]),t._v(" "),a("li",[t._v("Offline (리소스를 캐싱함으로써 가능)")]),t._v(" "),a("li",[t._v("Native features (push 등)")])]),t._v(" "),a("p",[t._v("Service worker는 브라우저와 서버 사이의 별도의 js가 돌아가는 것 (미들웨어)")]),t._v(" "),a("ul",[a("li",[t._v("실제적으로는 브라우저 뒤에 별도의 쓰레드 (멀티 쓰레드 개념)가 돌아가고 있다. (scope도 다르다)")]),t._v(" "),a("li",[t._v("같은 동작을 했음에도 기존 js와 결과가 다르게 나온다.")])]),t._v(" "),a("p",[t._v("이전에도 Service worker와 비슷한 개념은 존재했다.")]),t._v(" "),a("ol",[a("li",[t._v("AppCache")])]),t._v(" "),a("ul",[a("li",[t._v("오프라인경험을 제공하기 위한 캐시 제공, HTML 표준")]),t._v(" "),a("li",[t._v("페이지가 여러 개 일때 오동작, 파일 변화할 때 문제")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("Shared Workers")])]),t._v(" "),a("ul",[a("li",[t._v("js와 별도의 쓰레드")]),t._v(" "),a("li",[t._v("페이지에 비종속적 (페이지가 새로고침되더라도, js파일은 새로고침되지 않음)")])]),t._v(" "),a("p",[t._v("이런 것들을 보완하기 위해서 등장한 것이 service worker이다.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://developer.mozilla.org/ko/docs/Web/API/Cache",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("service-worker.js(sw.js) 파일을 설정하기 이전에,index.html 파일의 body 태그 안에 서비스워커를 등록하는 아래 코드를 추가해야 한다.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'serviceWorker'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" navigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\twindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'load'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tnavigator"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serviceWorker\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../service-worker.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("reg")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[Service worker registered]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #1 - 서비스 워커 설치(캐싱 파일 생성)")]),t._v("\nself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'install'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// self : app.js에서의 window와 동일 - 바로 window 객체에 접근할 수 없기 때문에 사용")]),t._v("\n\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'서비스 워커 설치 완료'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tevent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("waitUntil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tcaches\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cacheName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'캐시 생성 완료'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\tcache"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cacheFilelist"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("오프라인에서도 돌아가게끔 캐시 작업을 한 것이다.")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// #2 - 서비스 워커의 네트워크 요청 가로채기 코드 작성")]),t._v("\nself"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fetch'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tevent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("respondWith")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tcaches\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("match")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("response")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\tconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"pwa-적용하는-방법"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwa-적용하는-방법"}},[t._v("#")]),t._v(" PWA 적용하는 방법")]),t._v(" "),a("ol",[a("li",[t._v("Vue create로 만들 때 PWA Support 옵션으로 생성")]),t._v(" "),a("li",[t._v("이미 만들어진 app에 적용하려면,\n"),a("ol",[a("li",[t._v("public 폴더 밑의 index.html에 link tag로 manifest 연결")]),t._v(" "),a("li",[t._v("manifest.json 생성")]),t._v(" "),a("li",[t._v("main.js에 service worker 등록")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);