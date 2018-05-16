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