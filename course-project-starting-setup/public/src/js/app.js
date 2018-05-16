if (!window.Promise) {
	window.Promise = Promise
	// provided by promise.js polyfill which in this folder 
	// this step is only really needed for IE 11 but w/e
}

var deferredPrompt;

if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function(){
			console.log('SW registered')
		})
		;
}

window.addEventListener('beforeinstallprompt', function(event){
	console.log('beforeinstall prompt')
	event.preventDefault()
	deferredPrompt = event 
	return false
})

fetch('https://httpbin.org/post', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		},
		body: JSON.stringify({message: 'hello kitty'})
	})
	.then(function(response){
		console.log(response)
		return response.json()
	})
	.then(function(data){
		console.log(data)
	})
	.catch(function(error){
		console.err(error)
	})