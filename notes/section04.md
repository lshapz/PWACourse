# fetch and promises refresher 

## Fetch basics

* ajax uses XMLHttpRequest()
* fetch is an alternative 
* has built in response.json() helper which returns its own promise

### second argument, object 

* allows you to do things other than GET
* `mode: no-cors` gets you a response but not the content (CORS is set on server side)

## polyfills

* fetch and promises supported all but IE 11 and Opera Mini ([fetch](https://caniuse.com/#feat=fetch) [promises](https://caniuse.com/#feat=promises))
* download some polyfills 
	* import them before the .js files that use them 

## listener in SW 

* listener triggered
	* implicit requests (script tag, link tag)
	* explicit use of fetch API like above

## assignment notes

* create a new promise, wrap setTimeout in it 
* listen to promise resolve then 
	* value should be return of star wars api in the app.js
	* handle result, extract json data
	* output data.name of characters in paragraph 
* put request with a mirroring thing 
	* adjust output accordingly 
	* json.data.person.name
* add an error 
	* catch with .then second argument
	* catch with .catch 

*I did this with three different buttons and output sections, see ../section4_assignment*

## Links & Resources (from 4.55)

### Want to dive deeper into Promises?

* [Introduction to Promises (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [Introduction to Promises (Google)](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

### Dive deeper into the Fetch API:

* [An Overview on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [Detailed Usage Guide (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [Detailed Usage Guide (and comparison with XMLHttpRequest)](https://davidwalsh.name/fetch)
* [Introduction to Fetch (Google)](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
