var CACHE_STATIC_NAME = 'static-v02'
var CACHE_DYNAMIC_NAME = 'dynamic-v01'
var STATIC_FILES = [
	'/',
	'/index.html',
	// 'manifest.json',
	'/src/css/app.css',
	'/src/css/dynamic.css',
	'/src/css/main.css',
	'/src/js/main.js',
	'/src/js/material.min.js',
	// '/src/dynamic/index.html'
]

self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker ...', event);
  event.waitUntil(
  	caches.open(CACHE_STATIC_NAME) // any name you like - subcache, precache
  		.then(function(cache){
  			console.log('[SW] Precaching App Shell')
  			cache.addAll(STATIC_FILES)
  			// cache.add('/')
  		})
  );
});

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker ....', event);
  event.waitUntil(
	caches.keys()
		.then(function(keyList){
			return Promise.all(keyList.map(function(key){
				if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
					console.log('[SW] removing old cache', key)
					return caches.delete(key)
				}
			}));
		})
  );

  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {

  event.respondWith(
  	caches.match(event.request)
		.then(function(response){
			if (response) {
				return response 
			} else {
				return fetch(event.request)
					.then(function(res) {
						caches.open(CACHE_DYNAMIC_NAME)
							.then(function(cache){
								cache.put(event.request.url, res.clone());
								return res
							})
					})
			}
		})
	)

});
