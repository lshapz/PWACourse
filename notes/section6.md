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
