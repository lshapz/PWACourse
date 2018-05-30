# SW and caching

## offline support 

* poor connection like a big event
* elevator (subway)
* lie-fie "wifi that just is not"

## cache api

* disk cache (browser) - no control as developer - can't rely 
* key: request - value: response 
* accessed from SW or regular JS 
	* regular JS needs to be loaded so less useful
	* cache data retrieved instead of sending network request 

## what do we want to cache

* at least the app shell (frames and stuff)
* dynamic content 

## static caching at installation

* service worker installation
	* cache api
	* index.html 
		* app.js
		* app.css
		* image.png
* icon set, google fonts
	* definitely want them to be saved
* do not want to overpopulate cache 
	* browser might delete if too big
	* might show up even if network connected
* event.waitUntil - make sure cache is prepared before installation continues 
* web cache API methods ([MDN](https://developer.mozilla.org/en-US/docs/Web/API/Cache)) 
* caches.match - even if not there it is in .then as null, not .catch 
* caching CDN files only works with CORS 
* font icon definitions are calling to offline (https://fonts.gstatic.com/s/materialicons/v37/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2 )

## dynamic caching 

* for fetched resources like the fonts, not user content or w/e 
* cache.put you need to provide both key and value 

## cache versions and cleanup 

* versioning to make sure we don't interfere while updating 

## notes on assignment

* register a SW
* identify app shell 
* precache app shell
* code to prefetch cached assets 
* Precache other assets required to make the root index.html file work
* Change some styling in the main.css file and make sure that the new file gets loaded + cached (hint: versioning)
* Make sure to clean up unused caches
* Add dynamic caching (with versioning) to cache everything in your app when visited/ fetched by the user

