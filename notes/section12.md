# Service Worker Management with Workbox

## Basics

* workbox is a google tool 
* automates managing SWs and routes and caches 

## 3.x v 2.x

* [breaking changes](https://developers.google.com/web/tools/workbox/guides/migrations/migrate-from-v2)
* 3.x : precacheAndRoute 
  * 2.x : precache
* any downloads from course will use 2.x
* `npm install --save-dev workbox-cli@^2`

## workbox cli

* fetch listener, precache automatically 
* makes an array of the url and revision ids 
* config file, many options `npm run workbox generate:sw`

## customizing 

* `workbox inject:manifest` - use existing file 
* register route 
* strategies 

## expanding dynamic caching / options and strategies 

* cacheFirst, cacheOnly, networkFirst, networkOnly, staleWhileRevalidate
* options (see docs)
* expiration - maybe you want the fonts to update once a month

## custom handlers

* basically replicating the indexeddb lectures but with workbox involved
* custom strategy, function with callback returns response 
* fallback route for offline 

## background sync and push

* slowly adding back SW features to workbox-sw

## build workflow

* webpack plugin (for work)
* uglify-js (for project)
* if you minify, change precaching to only look for .min.js

## hosted on firebase 

* totally irrelevant 

## auditing with Lighthouse

* audit tab in Dev tools 
* PWA checklist 
* performance hints 

#Useful Resources and links 

* [Official webpage/ docs](https://workboxjs.org/)
* [Configuring Workbox](https://workboxjs.org/reference-docs/latest/module-workbox-build.html#.Configuration)
* [More about Workbox Strategies](https://workboxjs.org/reference-docs/latest/module-workbox-sw.Strategies.html#main)
* [Workbox Github page](https://github.com/GoogleChrome/workbox)
* [Workbox Overview by Google](https://developers.google.com/web/tools/workbox/)
