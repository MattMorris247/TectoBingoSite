'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "722ed7e5c20a4f1ffeff2beda1c46e9e",
"assets/AssetManifest.json": "f60f2ef2573ff9e77df250eb9a69151c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9d4b4936f00f2c06016e2931d4dad402",
"assets/images/flip10.png": "8a58e0d585989c603367854295e842ba",
"assets/images/flip11.png": "b0b59d7bd6d9de86e7ffac237dca2bda",
"assets/images/flip12.png": "4b4680a435b98aba714644c082fb0d05",
"assets/images/flip13.png": "bf354b93b88f8d237b411130fd12dee5",
"assets/images/flip14.png": "47a4d91072f4c4ddfb0355c05f1056f4",
"assets/images/flip15.png": "0ab316b373524dbe3dcfcfacc5bd5e6e",
"assets/images/flip16.png": "25f33df29ee5a7d2bc47e1655b985905",
"assets/images/flip17.png": "f284e8bed1d1890467f5d6024da50276",
"assets/images/flip18.png": "055aed2f45d218c8851006476cf0928d",
"assets/images/flip19.png": "e83c11bf82fd3aaa38d9477b7e334673",
"assets/images/flip20.png": "3f756782ba25f26d83a5dba7a79e1a1a",
"assets/images/flip21.png": "0228ebf10017fe904088a0c725b41d03",
"assets/images/flip22.png": "063eb872218b5d9086e722f788561226",
"assets/images/flip23.png": "f8c0ad893c726d2fa232fd16bb65acbf",
"assets/images/flip24.png": "33ee3377d0a96a0470e3b6cb895b70f6",
"assets/images/flip25.png": "8b6999e3b14bd7bc92b2cc84d6a7b46a",
"assets/images/flip3.png": "36c8783a10893bb51fa1d0edce152cf7",
"assets/images/flip4.png": "e35387d196045f4d6dc8a7d27e30b2cc",
"assets/images/flip5.png": "4af4f4cbd8abe5eb7da724207635d23b",
"assets/images/flip6.png": "610aaba2927691779c746a903f4afd94",
"assets/images/flip7.png": "97dbd9b6dc22d0ff2e0e9a0af3471a29",
"assets/images/flip8.png": "724b25c5998ee560eafd0f70006e5448",
"assets/images/flip9.png": "b256a3f166209efad9ae43930cde9c01",
"assets/images/flipTile1.png": "7993014ac26cb9a7a203a8cc581a5863",
"assets/images/flipTile2.png": "379e392297178d128f4a387f80f50e94",
"assets/images/noimgfound.jpg": "6fc6e9672170ba98a2a03a1f40f5e8fe",
"assets/images/tile1.png": "2e08befd7d45265a9649848f5bbbf854",
"assets/images/tile10.png": "7dbc85de607a2615cd336923751c701a",
"assets/images/tile11.png": "bb99f05d15a4db9eaae51ad69dddcd78",
"assets/images/tile12.png": "47399328d6660a2312d0ee240c44ed83",
"assets/images/tile13.png": "a452aaa25d8d22ba7ee301562131f182",
"assets/images/tile14.png": "f2ac06a63c40776369754915184a2d3a",
"assets/images/tile15.png": "1f2266a533a2f2ffa20aaae5486dc1e4",
"assets/images/tile16.png": "a65d18dd4c23ca832245c1504902cee5",
"assets/images/tile17.png": "247512e2e52796cc66ef75820fa6cc45",
"assets/images/tile18.png": "487eb009331e85c07777f226fa1d450d",
"assets/images/tile19.png": "a3c392c557ed46ee74aad6521c15bb94",
"assets/images/tile2.png": "2acac3a9a532d95d1cc1b7f1f4a2704a",
"assets/images/tile20.png": "2cba8b68d30d5839731a196ac70e554d",
"assets/images/tile21.png": "eb00ea2518bb20df5ed399dcaf02f710",
"assets/images/tile22.png": "973310fc611123d56cd8d86b459c6b29",
"assets/images/tile23.png": "e419eaad45a03e24553dd406e82854d1",
"assets/images/tile24.png": "8fc5c57fd711769ef1ddea7a6155a9f3",
"assets/images/tile25.png": "9b1abe93ea74b2f41c15797c15006586",
"assets/images/tile3.png": "d40d0ae2aff13bbeb7a4161a62b9bb94",
"assets/images/tile4.png": "2f4451f8b8f38b9dcf7890e6b00a555e",
"assets/images/tile5.png": "748f02261df4c3ab7edd78de5130a74b",
"assets/images/tile6.png": "816d51060907ff120074987a80296d20",
"assets/images/tile7.png": "23d36939c79949d7605c52a487ead7b9",
"assets/images/tile8.png": "5105a435d23166f7622c1a99358653a3",
"assets/images/tile9.png": "2550607620ffdcd9730af08a0f83e0b1",
"assets/images/tiles8.png": "5105a435d23166f7622c1a99358653a3",
"assets/images/yay.png": "8bf94b575b0ffeaba360428c37057994",
"assets/NOTICES": "235f873756b7076d5e5ac3a0e26ce75c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "feb6c1f5f05317da5be0aea955dfb508",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f46b826157e379b1e43f951f119edeb4",
"/": "f46b826157e379b1e43f951f119edeb4",
"main.dart.js": "8f46ea092b2336b8bf6a0f4545d9886c",
"manifest.json": "f25d42c6cf563b0b151d0ae976d5a540",
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
