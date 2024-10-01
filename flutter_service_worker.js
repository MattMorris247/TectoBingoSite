'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2b4a89e3ee775cbd26988cbc6aa0500e",
"assets/AssetManifest.bin.json": "8aca3bae29b4e2c455a3f6b1fb8326d6",
"assets/AssetManifest.json": "3abae3950e5b5a00165a894edc3587b0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/images/stuffablesList.png": "c523d3ff3e9d8ff25c2b637d9c8c7e13",
"assets/images/Tile01.png": "db4a615756a7f590c29ccb11d4eae5b2",
"assets/images/Tile02.png": "db5cf2b611a8fcd4b20969959019a1c9",
"assets/images/Tile03.png": "8d5f63e045cb690b86d8841f1b4f9eca",
"assets/images/Tile04.png": "887b9ad67a5f7b7dbe6ae5ba66d618ba",
"assets/images/Tile05.png": "7f9531c4e4fb085e93e641a8a61b29c9",
"assets/images/Tile06.png": "870ec19f0a611e17f4ad2db53ad76c39",
"assets/images/Tile07.png": "0863c8dcc7577bb0d043d78291cdf6d4",
"assets/images/Tile08.png": "8b42dc6ba5834f4bc9f77e36e6094f63",
"assets/images/Tile09.png": "13743c7e48b96b32bdc281452560addd",
"assets/images/Tile10.png": "be93f6aa792a9897bda9c2633b4437c8",
"assets/images/Tile11.png": "af36a56d58d07f9e31cfd3f1b60bb36b",
"assets/images/Tile12.png": "a33cc1186baaedd2c95bb1ffa5e61856",
"assets/images/Tile13.png": "9b837de0973c28da236df0be3f9e9167",
"assets/images/Tile14.png": "3c108f7a86e3a89f78e4da90930b39b0",
"assets/images/Tile15.png": "03f5186e816a6949f71597c37255bb16",
"assets/images/Tile16.png": "ea8bb4211f9f69f8efe69f901c741f8f",
"assets/images/Tile17.png": "24a6ff2a431ab8aa0848723e977800f3",
"assets/images/Tile18.png": "105ebee11ea7aa22c6171ce5a1144380",
"assets/images/Tile19.png": "bbb1507883b2e763f3b12ece34c6a3da",
"assets/images/Tile20.png": "8a5b6a75d36481f6b1162214ffea88e7",
"assets/images/Tile21.png": "6f456a2febf72b61eb8de45380dec242",
"assets/images/Tile22.png": "f33b231d06aa3c5c90d9159830466fe9",
"assets/images/Tile23.png": "c4b033ed268f00610b4e54da65477190",
"assets/images/Tile24.png": "0e8c65b33104b0aa358462cc6f542329",
"assets/images/Tile25.png": "cb17a1ba8e9e7fdb7d9c8d8d456b2a47",
"assets/images/yay.png": "8bf94b575b0ffeaba360428c37057994",
"assets/NOTICES": "4e479b0acdac51ad542330243fca07c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "cfec26a117d16804a832d0cedaa498b4",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c6a083bde9c5ab89f276bacbeb315834",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "dd03fef94dafcd3a1708ce63ef30fcfc",
"/": "dd03fef94dafcd3a1708ce63ef30fcfc",
"main.dart.js": "37085365c91db14056ea57e6eb7e0264",
"manifest.json": "b78c3dc630c94ed03941ae8e5d9c126b",
"version.json": "a48dc5c8d411d80ca1d23da4b9ee315f"};
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
