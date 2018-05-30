
var CACHE_STATIC_NAME = 'static-v8';
var CACHE_DYNAMIC_NAME = 'dynamic-v8';
var STATIC_FILES = [
          '/',
          '/index.html',
          '/offline.html',          
          '/src/css/app.css',
          '/src/css/main.css',
          '/src/js/main.js',
          '/src/js/material.min.js',
          'https://fonts.googleapis.com/css?family=Roboto:400,700',
          'https://fonts.googleapis.com/icon?family=Material+Icons',
          'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css'
        ]


self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME)
      .then(function(cache) {
        cache.addAll(STATIC_FILES);
      })
  )
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys()
      .then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            return caches.delete(key);
          }
        }));
      })
  );
});

// part 4 - network, cache, fallback
self.addEventListener('fetch', function(event) {
  var url = 'https://httpbin.org/ip' 
  if (event.request.url.indexOf(url) > -1) {
    event.respondWith(
      caches.open(CACHE_DYNAMIC_NAME)
        .then(function(cache){
          return fetch(event.request)
            .then(function(res) {
              cache.put(event.request, res.clone())
              return res;
            });
        })
      );
  } else if (STATIC_FILES.includes(event.request.url)) {
    event.respondWith(
      caches.match(event.request)
    )
  } else {
     event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          if (response) {
            return response;
          } else {
            console.log('add to dynamic', event.request)
            return fetch(event.request)
              .then(function(res){
                caches.open(CACHE_DYNAMIC_NAME)
                  .then(function(cache){
                    console.log(res)
                    cache.put(event.request.url, res.clone());
                    return res 
                  })

              })
              .catch(function(err){
                // return caches.open(CACHE_STATIC_NAME)
                //   .then(function(cache){
                //     if (event.request.url.indexOf('/help') > -1 || event.request.url.indexOf('/dynamic') > -1) {
                //       return cache.match('/offline.html');
                //     } 
                //   })
              });
          }
        })
    );
  }
});
// // part 3 - cache only 
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         } 
//       })
//   );
// });
// // part 2 - network only 
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     fetch(event.request)
//   );
// });

// // original - cache then network
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//       .then(function(response) {
//         if (response) {
//           return response;
//         } else {
//           return fetch(event.request)
//             .then(function(res) {
//               return caches.open(CACHE_DYNAMIC_NAME)
//                 .then(function(cache) {
//                   cache.put(event.request.url, res.clone());
//                   return res;
//                 });
//             })
//             .catch(function(err) {

//             });
//         }
//       })
//   );
// });