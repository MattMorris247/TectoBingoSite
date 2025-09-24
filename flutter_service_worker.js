'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/all_49_bingo_tiles.json": "3cb4860735edbd608d4ad40f35f4d211",
"assets/AssetManifest.bin": "415d07de32f457d8c82d77971d51c6f5",
"assets/AssetManifest.bin.json": "1d9bb3975e3f23cb63f75acdfacd7741",
"assets/AssetManifest.json": "1c7e9895f78af1e8213779d76b687530",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "92cf3b2d23ee43cef069baefb35ce9b8",
"assets/images/stuffablesList.png": "c523d3ff3e9d8ff25c2b637d9c8c7e13",
"assets/images/tile1.png": "e0ab5d9babd20a800b45613d5c936285",
"assets/images/tile10.png": "aae72493a4f6b79c103a3bc2caad8bb7",
"assets/images/tile11.png": "5566bde329fae306f15b9a5b5df60efb",
"assets/images/tile12.png": "48a94836f403e9dc3bcd712c69ba4873",
"assets/images/tile13.png": "562529d531f5e6b4baf7cce0896e30fa",
"assets/images/tile14.png": "6cc14aea446a776869c603ff9750f9fc",
"assets/images/tile15.png": "6a2e1d05b80c6829477a7c8767b53e8b",
"assets/images/tile16.png": "1c86a99a15491351e98d09e82d6f12fa",
"assets/images/tile17.png": "d696abc1d227b15b7308f4f04fd47700",
"assets/images/tile18.png": "305c0905d8e964c282115b6638c728f9",
"assets/images/tile19.png": "6fee474bd6532acff41faa01c0820ee2",
"assets/images/tile2.png": "e7cda938fe2f8a7144e4e0e1567adedf",
"assets/images/tile20.png": "a60a37dae6f9957699f9654c1922938f",
"assets/images/tile21.png": "0f4f24daed15156ba266b96291beafc8",
"assets/images/tile22.png": "0812ff099286cb88f6ffceb15cd8453f",
"assets/images/tile23.png": "36bd43edfd16d9e454a2267e3ca03d73",
"assets/images/tile24.png": "50e4c0164f0c9374f2f5c86607ae43a2",
"assets/images/tile25.png": "5d6d30fe981f87495f40258fd0b52254",
"assets/images/tile26.png": "203c8b637851af4fbcd6ff850666845c",
"assets/images/tile27.png": "549c429f75186159f92e6ce9b28d14a3",
"assets/images/tile28.png": "7f72f0b9f356707f02f07b19240e98a9",
"assets/images/tile29.png": "e3caa31b65bba9cac7850407573b9fda",
"assets/images/tile3.png": "3c1c308c01580ee1dce4bd4de728abc9",
"assets/images/tile30.png": "3adc90e05c3dcff77a6652a9482d5f06",
"assets/images/tile31.png": "8c0694c4b2e9eb1d04a4f2227dd8bdc5",
"assets/images/tile32.png": "59711b5c8fa73704cd96d3feb6e3bf6c",
"assets/images/tile33.png": "19617e7b8e4d474772de17cc22442407",
"assets/images/tile34.png": "272a7c5ea99ca5f49cc6425d3a12c8de",
"assets/images/tile35.png": "c46d90fe94ffa048f33b39062211415d",
"assets/images/tile36.png": "87498e9c37c7d400eaafc24591a9f9cb",
"assets/images/tile37.png": "7efb0d5420644f33a72f155277f3044a",
"assets/images/tile38.png": "d641af60469a3802268fc782bc571acd",
"assets/images/tile39.png": "95fe579e1f58db9c37e583d0f79b5a22",
"assets/images/tile4.png": "c1e5bc1db20c87ff452943fc6c0dda9a",
"assets/images/tile40.png": "c30fddfd77c1d245823a97db28f03695",
"assets/images/tile41.png": "c5e6522e83e26c85237655d2a386a534",
"assets/images/tile42.png": "102097211a7193b85a57164cc29665dc",
"assets/images/tile43.png": "2bae84c1012e7dd783ab20cf31ed5545",
"assets/images/tile44.png": "d746256207eecd6cf2d36530d311ca43",
"assets/images/tile45.png": "ba74a52247fd3f3e6375a143db3a5afb",
"assets/images/tile46.png": "f8fc2a06ebbf627156019bae7e56594c",
"assets/images/tile47.png": "0bc0f16e2fce544c9f29f932325a919b",
"assets/images/tile48.png": "24d732da615e04ae392b862e4b247639",
"assets/images/tile49.png": "353ea9cb9785bcaa0751615bc15ee8d1",
"assets/images/tile5.png": "5285ea6c966a1b739c169fd94944eb03",
"assets/images/tile6.png": "8ffaeed38f83ddc9fa4a04f079e2cf70",
"assets/images/tile7.png": "cb0cd02923d907c3ffbe08451c4ab7b1",
"assets/images/tile8.png": "ef5601c88f53df6ba4cb2974b305dbe8",
"assets/images/tile9.png": "e3de24f66cadc36cb0a88967da1a0dd7",
"assets/images/yay.png": "d063700ac041cca45961f6785f705e36",
"assets/NOTICES": "4a30870862f27348e69e5c673667cedd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "cfec26a117d16804a832d0cedaa498b4",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "74fdeb760a84c23c426eddbd0318784e",
"icons/favicon.png": "cfec26a117d16804a832d0cedaa498b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9c62dbe74f9a647067b198cdefc8e408",
"/": "9c62dbe74f9a647067b198cdefc8e408",
"main.dart.js": "5ae10d013cd4a0a2ddfe7aaf43de87b1",
"manifest.json": "b78c3dc630c94ed03941ae8e5d9c126b",
"StPaddyFav.png": "5fdb39f043234e571f8de8579d4bf93c",
"version.json": "1fad5fedb89731e25099a64b57ee919a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
