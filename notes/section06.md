# dynamic caching

## on button click

* user requested save, like an article for later
* caches.open available anywhere that `if ('caches' in window)` is true

## offline fallback

* if never visited help, give them a "404" type page in our style
* better UX
* add fallback to SW
* side effect: if you're looking for JSON or data, you'll get the fallback page too 

## cache with network fallback

#### so far
* SW intercepts request
* SW checks cache 
* if not in cache, SW makes network request

#### but what if updated page on network? 

## caches only ($)

* ignores step 3 above 
* no requests get to internet 
* silly 

## network then cache

* good idea but
* what about slow connection? 60 seconds wait until fallback?
* use this for background assets or things that are not vital

## cache then network

* page checks the cache
* simultaneously SW intercepts request and checks network 
	* stores fetch in cache (optional, dynamic)
	* returns fetch to page 

## different strategies for different requests

* cache then network for things like the URL / card 
* network then for things

## strategies and routing 

* things like help only go to offline.html

## cache only

* maybe useful for app shell if you assume it's not going to change 


## advanced caching assignment notes

* Identify the strategy we currently use in the Service Worker (for caching)
* Replace it with a "Network only" strategy => Clear Storage (in Dev Tools), reload & try using your app offline
* Replace it with a "Cache only" strategy => Clear Storage (in Dev Tools), reload & try using your app offline
* Replace it with "Network, cache fallback" strategy =>  => Clear Storage (in Dev Tools), reload & try using your app offline
* Replace it with a "Cache, then network" strategy => Clear Storage (in Dev Tools), reload & try using your app offline
* Add "Routing"/ URL Parsing to pick the right strategies: Try to implement "Cache, then network", "Cache with network fallback" and "Cache only" (all of these, with appropriate URL selection)

## better way for static urls 

* I don't think Array.prototype.includes existed?
	* nevermind he made a helper because of root 

## fallback

* don't use the event.request.url.indexOf('/help')
* use request headers
	* `event.request.headers.get('accept').includes('text/html')`
	* can do this as a fallback image or css file 
	* as long as you precache the fallback file for the filetype

## POST requests

* don't work straightforward like this
* caches response not request

## clean caches

* dynamic cache especially gets big 
* recursive trimCache function that removes oldest things 
* cache.keys() and cache.delete() return promises
* probably want this in activate or install 
	* could do every time you add something to cache
* you can always do this in regular js code 

## deleting/uninstalling a sw

```
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations()
      .then(function(registrations){
        for (var i = 0; i < registrations.length; i++) {
          registrations[i].unregister()
        }
      })
  }
```

* where is `Array.prototype.forEach`
* you can do this to clear the cache (for forcing refresh)
* 'you're a true caching monster now'
	* thanks Max

# Links and resources (6.95)

* Great overview over Strategies - the [Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)
* [Advanced Caching Guide](https://www.afasterweb.com/2017/01/31/upgrading-your-service-worker-cache/)
* [Mozilla Strategy Cookbook](https://serviceworke.rs/strategy-cache-and-update_service-worker_doc.html)