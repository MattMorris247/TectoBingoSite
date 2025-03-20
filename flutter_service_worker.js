'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f49fc3fb7f3151de4925a2cb2a3f984b",
"assets/AssetManifest.bin.json": "2961a6e24f1ee02e3980157ba93b2928",
"assets/AssetManifest.json": "b24a782921bd438bb783b67faf32f3ea",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9ebfc6bfa04506ca078a0099895c0174",
"assets/images/stuffablesList.png": "c523d3ff3e9d8ff25c2b637d9c8c7e13",
"assets/images/tile1.png": "3444d0f1b39fb25f50abba1b7e82bd73",
"assets/images/tile10.png": "f3d9faba6f6b8ed109bf6ed29e4a9dcf",
"assets/images/tile11.png": "17aa7209c462c9f4e649790514fd8fdc",
"assets/images/tile12.png": "568d0474a85d2ffec48a0a0fb31dd615",
"assets/images/tile13.png": "5967a88c165d7982e7c3cbfe45803541",
"assets/images/tile13flip.png": "68fb5302edc78813b70bb222d15b4d11",
"assets/images/tile14.png": "0b62b9cfd4bbb56d94e9e62139dc6173",
"assets/images/tile15.png": "3f2e424dda4d15afb0516942d797170a",
"assets/images/tile16.png": "7d215f400edb9948fd31fb0f4e0c377f",
"assets/images/tile16flip.png": "90309a093947277b7f5e25223e453a9c",
"assets/images/tile17.png": "6d05e6ba1c7174f1130ce401c66f51ce",
"assets/images/tile18.png": "34c50baa16f04505ba1a359ac7c01da3",
"assets/images/tile19.png": "c84fb5d71def672ada9ca3f55731b394",
"assets/images/tile2.png": "3e83d0d5ad593010e2aefc63fb6cd637",
"assets/images/tile20.png": "1fcb74c7dcbe536fd7263dd2986dca41",
"assets/images/tile21.png": "f7c7601f9ef297a68cdbc13343229a40",
"assets/images/tile22.png": "b53e2bba3eb7d560701bd1edb9690df9",
"assets/images/tile23.png": "fd79be027a5c7e81186551ffca1a11f8",
"assets/images/tile23flip.png": "30a39b18bd2f9365b8598e85fa9bc3e0",
"assets/images/tile24.png": "294b719f542b7254fca9c19966932441",
"assets/images/tile24flip.png": "d13e17bf231bce383c24e11bb0403c9e",
"assets/images/tile25.png": "f971eeb1a92f9b29b609d7818012b178",
"assets/images/tile26.png": "f25c905137af77550be1f2e0094eacd0",
"assets/images/tile27.png": "a39775c139d572fdf0edc68aa1177aa3",
"assets/images/tile28.png": "7941b62d16c8cfaca0e088ac3c350bf9",
"assets/images/tile29.png": "b9fc4aac6e30b9d0dcdb6a727b93f51d",
"assets/images/tile3.png": "e66cd648ef1bea9e77271f4eb9c62b24",
"assets/images/tile30.png": "678c6ee45f1b7fa9d8806fe33028323d",
"assets/images/tile30flip.png": "3b27bce8743695b53697ebef15c7381d",
"assets/images/tile31.png": "d6f0ebab262e98c96ed05ad7d1aaf1c5",
"assets/images/tile32.png": "8fcc03cbb6c8ab48cad93b8a90b2ffa7",
"assets/images/tile32flip.png": "885ae362a564a2d0643967b2bf66b800",
"assets/images/tile33.png": "dd2f4f112f68d14759729905b75feca5",
"assets/images/tile34.png": "1bae8828938abdc573f3313dd4507478",
"assets/images/tile35.png": "32d34d4b53b8dcfdcd0eb88e64d7991d",
"assets/images/tile36.png": "1a771b8efaf82408c354560fc358167e",
"assets/images/tile36flip.png": "cb779086938f53d31e387f3e008d3a99",
"assets/images/tile37.png": "db1e07d1d2074130165c64b3dc0606f6",
"assets/images/tile38.png": "2342f4374e74d202de0de2966f72cd5f",
"assets/images/tile39.png": "23517f8a0c75d5066adf4a0dc9feaec4",
"assets/images/tile3flip.png": "469beae9a3c748b3a86336dc39de6cc5",
"assets/images/tile4.png": "4638aa5cc097e0d849ff89f07a326827",
"assets/images/tile40.png": "3cb6270a5e8db1bb4538e630df842fc1",
"assets/images/tile40flip.png": "49df29ef759224cdb9dfac097c8d2764",
"assets/images/tile41.png": "6ef803bdc811ef427445a5c05d04ab0d",
"assets/images/tile41flip.png": "a987be4b3000d55615358eb78862293f",
"assets/images/tile42.png": "0eed76c8a71f8e962dff89feb3189455",
"assets/images/tile43.png": "545bb8ae60afa646803ca21fead91bda",
"assets/images/tile44.png": "eb4b7ed55870ae5ae5914de044c9ed52",
"assets/images/tile45.png": "eca24c5a5138dee94bf6f1ef9270f7d2",
"assets/images/tile46.png": "f05a82ba87defea6770412b6929571ba",
"assets/images/tile47.png": "ca6a1f5b69a26ba3aee070c8b60fadaa",
"assets/images/tile48.png": "752ba11efa7e484005bc96d307fb5cc7",
"assets/images/tile48flip.png": "7884988100ff5e061e9e303fb228141b",
"assets/images/tile49.png": "953ed37009d7a5627b342b30d8496a61",
"assets/images/tile5.png": "a76b6a5fe5f9fb3d12bc5accfc947f44",
"assets/images/tile50.png": "4c7ec58218969b8bd9f9d69ad6fd71c2",
"assets/images/tile50flip.png": "28f54bd407929d4ec3fe94f67f770512",
"assets/images/tile51.png": "ac8bf26eead0d97aac9b137f37556744",
"assets/images/tile52.png": "e9ecb1a8dd28e0674e6bd2c5145dfdb1",
"assets/images/tile53.png": "639af33e267bcbd13ac4f3ad7a101e8c",
"assets/images/tile54.png": "d06986b7c42f9d5db7316c26be16d9c2",
"assets/images/tile55.png": "76df2c536331a0f319aadc9940d67040",
"assets/images/tile56.png": "90e5e5a74e523092fd580e982945673d",
"assets/images/tile56flip.png": "e4297105cb57c74f6e2fe755087cbdcf",
"assets/images/tile57.png": "70d4c6c7da966cd1c0a41c20f36342b6",
"assets/images/tile58.png": "ac41bde98732be60f33137ca05dab36e",
"assets/images/tile59.png": "a007f56e9088865facc5642520a30650",
"assets/images/tile6.png": "4d00c091b7265097a98d2ac628e64ad9",
"assets/images/tile60.png": "2c2a6e427637b018836b33b3e5daeb99",
"assets/images/tile61.png": "355aa8843b0db2bf85b50cadeaba91eb",
"assets/images/tile62.png": "a841912a2969d537fc3cc6b8a2d94bb8",
"assets/images/tile63.png": "dfff8cc7c0d09980523b21654b90fcbd",
"assets/images/tile64.png": "b92c47b19b22db2107db3f11ea582c5e",
"assets/images/tile64flip.png": "b92c47b19b22db2107db3f11ea582c5e",
"assets/images/tile7.png": "244ab6399dcf73db63df6a2c5735af46",
"assets/images/tile8.png": "fa7ad0463c90c8558318ca7f7eaf8414",
"assets/images/tile8flip.png": "320b356f3f55c2e2535b39a93acb60f5",
"assets/images/tile9.png": "7db1a72fa4bf69680e1afb43a1b51b86",
"assets/images/yay.png": "a860e94d220a81b001c7e47a32ebf690",
"assets/NOTICES": "66ca58c709a9fb0a6aab733a50d5afdb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5fdb39f043234e571f8de8579d4bf93c",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "cdbfc17b276b70370672df9201b66941",
"HalloweenFav.png": "cfec26a117d16804a832d0cedaa498b4",
"icons/favicon.png": "5fdb39f043234e571f8de8579d4bf93c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4aa390c7b4a1eef4349d7eeb69c6609a",
"/": "4aa390c7b4a1eef4349d7eeb69c6609a",
"main.dart.js": "30283288af371bce0a2ec76a3b91e1f7",
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
