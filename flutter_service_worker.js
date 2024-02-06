'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "46f101e1bf8c4ccede04f59bb5ae8a31",
"assets/AssetManifest.json": "6436a2a9e6adbea60badab1a7e5e8c9a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9d4b4936f00f2c06016e2931d4dad402",
"assets/images/flip1.png": "007614530571553d878ce5d9436eaaee",
"assets/images/flip10.png": "38cfb98b25dc270f0fde85244897fdf4",
"assets/images/flip11.png": "d8dbdb51fb39b114bd6572aca2d79976",
"assets/images/flip12.png": "76275c04dd0512396e77fb159d8704e0",
"assets/images/flip13.png": "7f717338ce415108579dccf2cb16f8fe",
"assets/images/flip14.png": "a607dcdb7be2e7d0e7b2cf87ca7b8777",
"assets/images/flip15.png": "adba9c5b1482bc9461c0e72a6c09311c",
"assets/images/flip16.png": "cee95e32786aa788923e6b3241e7a2e9",
"assets/images/flip17.png": "5925907480241543e8e4e779d9116159",
"assets/images/flip18.png": "e44f92e54e740794408bd4d52b09076a",
"assets/images/flip19.png": "bbadfede4bbcd307ed6e6dfc8efd0e88",
"assets/images/flip2.png": "8410108db0a0509f10b09780f65e097b",
"assets/images/flip20.png": "685ae96c3f04865bf27b243a29cc7748",
"assets/images/flip21.png": "5da5c4bb217f5271c58466b66588cdd6",
"assets/images/flip22.png": "c8f1fe02871251a787f5496b098a8ddb",
"assets/images/flip23.png": "208e78baff349a9f61d14b5377a30c8e",
"assets/images/flip24.png": "e7bfa363f7b0be93df52615f30494cc7",
"assets/images/flip25.png": "f254f8f6653450a5372c7ef1a77aeb21",
"assets/images/flip3.png": "6832561eb828661c6c54eff69971c942",
"assets/images/flip4.png": "5d780221220de59555a2922408c0249e",
"assets/images/flip5.png": "8db123f941b11389686a57e62a79582b",
"assets/images/flip6.png": "d64ef506b752297ded806e0025e31399",
"assets/images/flip7.png": "fde10694a59a1f00c89b0e0addc66b07",
"assets/images/flip8.png": "f7d8a6de1d5e889b92c6bc3839b65ecb",
"assets/images/flip9.png": "d5dba5550259ce124446dcd1891c1bf1",
"assets/images/noimgfound.jpg": "6fc6e9672170ba98a2a03a1f40f5e8fe",
"assets/images/tile1.png": "cb329a013a8aa11e6f36f1344a97f44d",
"assets/images/tile10.png": "6336d862e0abb0b89180ea95661ead00",
"assets/images/tile11.png": "2206fb7f0770da74b2f28194c1111105",
"assets/images/tile12.png": "c02d386aebd8e9b6b8a11592d397da6d",
"assets/images/tile13.png": "1bc9cc26cfbfcaffcfb8d70a6b5b21c9",
"assets/images/tile14.png": "42ed1a8004c763c859b64833aea7bc95",
"assets/images/tile15.png": "eacb860047c49f3ed111e98bc26842b2",
"assets/images/tile16.png": "431aa72fe624cdd8dbc03e0ac1e60f90",
"assets/images/tile17.png": "d01060bd7d048633a7511f5fc825d0a0",
"assets/images/tile18.png": "b57a6751e6817b303b5caae79646b3e7",
"assets/images/tile19.png": "f6680bebbdf15fc5b6aebb174cc9a2ae",
"assets/images/tile2.png": "e4a2329631455b8ebe1de397f7e9198b",
"assets/images/tile20.png": "f1a9da20de7ba28a76bb4ffd079f59ca",
"assets/images/tile21.png": "0ba8b9a565621025836ac3aa94f22b5e",
"assets/images/tile21fake.png": "e585197245ec30e80e608a38e93507fe",
"assets/images/tile22.png": "3e32c7cf67278499e0182a1c7401b72c",
"assets/images/tile23.png": "595ee9aacf7263dc9a059c125d930b63",
"assets/images/tile24.png": "e7fd9b1c6939818d7f04653f0bede7a8",
"assets/images/tile25.png": "7e91456730b0263c060e3c919e1cec14",
"assets/images/tile3.png": "ecd6f56a8b1b98bb7b7da40a6d5499ee",
"assets/images/tile4.png": "3c53aed7a3d5c9b11ffeae5bbbbcc4b5",
"assets/images/tile5.png": "e78c980a73ea1b8b070e6698d4459077",
"assets/images/tile6.png": "9d743c99983c24ef84045b9e7c1e426e",
"assets/images/tile7.png": "d3961c2902ed8eadd0c584a494b644f4",
"assets/images/tile8.png": "053e4f60b96784209b7f92739873453b",
"assets/images/tile9.png": "71cf5c02d6d0cb6ae28916a3bec9417a",
"assets/images/yay.jpg": "2166bddf83309607b8e5181ae472e20b",
"assets/NOTICES": "930ef77b1d9bf668c4ecea8dcbbfa80a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "620b4edbfdfdf80351659f928ac43438",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "5495e169c12d167c8e21316fc13290dd",
"/": "5495e169c12d167c8e21316fc13290dd",
"main.dart.js": "d0b388811b2c7b8707c47ede491f016b",
"manifest.json": "b78c3dc630c94ed03941ae8e5d9c126b",
"version.json": "a48dc5c8d411d80ca1d23da4b9ee315f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
