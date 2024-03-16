'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "67b345f6224fc06100edcfa55578868a",
"assets/AssetManifest.bin.json": "7cfe199ed315e24376530f5ae2008984",
"assets/AssetManifest.json": "0495df4a40122a6a7cfea83895189ab2",
"assets/assets/bsm/hospitality.png": "c9c47808baab9abd3dfb32621468f6f9",
"assets/assets/bsm/manufacturing.png": "292b492c5b35e4c23d122d1e24135f12",
"assets/assets/bsm/retail.png": "4fa549263b174ea51fafa80b5f7fe7b5",
"assets/assets/bsm/truck.png": "77525559e4f4484698b4a4b505c25021",
"assets/assets/bs_home/Distributin.png": "20db771497bee1d4e165ed7e88b2a19b",
"assets/assets/bs_home/Hospitality.png": "96893bf82c620d0b4b789eead2300b9c",
"assets/assets/bs_home/Manufacturing.png": "f99eb08f903bab35b05917601ffa212c",
"assets/assets/bs_home/RealEstate.png": "56704fe79ce01eb6a31fed033be08b65",
"assets/assets/bs_home/Retail.png": "5035ab9ae7ea28453c94a371e37805c6",
"assets/assets/bs_home/upcoming.png": "686dc1fc1c43aaa7aee06777877ac0e4",
"assets/assets/carousel_home/bsc1.png": "e692757fc79b6defc0fe40c61788a2c1",
"assets/assets/carousel_home/bsc2.png": "2917dd2ca7e587f7c5357211ff87dfc5",
"assets/assets/carousel_home/bsc3.png": "517922637f1f19b7897f8cdb8d3c8802",
"assets/assets/carousel_home/h3.png": "541f66160756bd59899852ff04c2091f",
"assets/assets/carousel_home/mamaron_vision.png": "b181e9287196b9894ec0a89a023e4eb2",
"assets/assets/carousel_home/mamron.png": "be6b3cbb78804f542dd143b9ef3bc0ea",
"assets/assets/carousel_home/yemmar1.png": "613d6495e4db2dd8ec5722fa7bd2ff5f",
"assets/assets/carousel_home/yemmar_office.png": "b55d297e0632a7b987818b8685af26d6",
"assets/assets/Iv/100.png": "256c1c5ec28cc85d5bb61e97f1c0ed0f",
"assets/assets/Iv/alamana.png": "62fd7a572394b325daf6c0ae0cf1f2ce",
"assets/assets/Iv/applainlogo.png": "0b88a2f2928cf37b99a12998d1f76120",
"assets/assets/Iv/fkart.png": "234b35472112c8d9ebebcef282e35fc6",
"assets/assets/Iv/mamco.png": "2c87db0cd583056734b4742014f78a27",
"assets/assets/Iv/mamron.png": "ef27c9673e4cff68c00d6e69b1642b82",
"assets/assets/Iv/SPICY.png": "8c8d938042bca924c559585d42d43ad4",
"assets/assets/Iv/yemmarplumbing.png": "8996fc57b0b0978c8fc924d6331f0d8a",
"assets/assets/social_icons/facebook.svg": "32a97ae4a450e386f5a8959b837be550",
"assets/assets/social_icons/instagram.svg": "2df6c5263cadc731eef8550510bc1728",
"assets/assets/social_icons/linkedin.svg": "d8cf13d4768d9d754530be78c7951b74",
"assets/assets/social_icons/Logo.svg": "c32906a5b4f613d4e1594f3d5c5bf419",
"assets/assets/YemmarLogoMain.png": "a02fa5ac48a83417a97687329acd825a",
"assets/FontManifest.json": "4b05c4ea0bdbfff15b18b1304fc8650b",
"assets/fonts/LibreFranklin-Bold.ttf": "f4e064862e18769184aacface2b5479c",
"assets/fonts/LibreFranklin-Regular.ttf": "a016d6707a19b2fe1b60365760ac81c3",
"assets/fonts/LogoPoppins/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/fonts/LogoPoppins/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "75a066919a658cfb4ef36f4c67ae0be0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc8046e7a30346e298eaa5ef37f793be",
"/": "bc8046e7a30346e298eaa5ef37f793be",
"main.dart.js": "4a161808d7289c119fdeda5f914bb9ff",
"manifest.json": "30553dffd457a7b9a7b4cc198dd9c277",
"version.json": "953ec4547e80b6f78fc42432c11ecb99"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
