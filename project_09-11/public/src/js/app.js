
var deferredPrompt;

var enableNotificationsButtons = document.querySelectorAll('.enable-notifications')

if (!window.Promise) {
  window.Promise = Promise;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});
 
function displayConfirmNotification() {
  var options = {
    body: 'You have enabled notifications for this pwa',
    icon: '/src/images/icons/app-icon-96x96.png', // could be a http image src too 
    image: 'src/images/sf-boat.jpg',
    dir: 'ltr', // or rtl
    lang: 'en-US', // BCP 47
    vibrate: [100, 50, 200], //vibration, pause, vibration (if supported)
    badge: '/src/images/icons/app-icon-96x96.png',
    tag: 'confirm-notification', //deals with stacking repeats 
    renotify: true,
    actions: [
      { action: 'confirm', title: 'OK', icon: '/src/images/icons/app-icon-96x96.png' },
      { action: 'cancel', title: 'NO', icon: '/src/images/icons/app-icon-96x96.png' }

    ]
  }
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(function(swreg){
        swreg.showNotification('[Server] Subscribed!', options)
      })

  }
  // new Notification('Subscribed!', options)
}

function configurePushSub(){
  if (!'serviceWorker' in navigator) {
    return
  }
  var reg 
  navigator.serviceWorker.ready
    .then(function(swreg){
      reg = swreg
      return swreg.pushManager.getSubscription()
    })
    .then(function(sub){
      if (sub === null) {
        var vapidPublicKey = 'BJr5cDMeynODY-AjkqkSTGHH7t0lX7H-Rcn51lU0qghafp6T-TBM0q7KHnkPZXGeK5G4j7aHZ-uKEbJqRmTswwo'
        var convertedPublicKey = urlBase64ToUint8Array(vapidPublicKey)
        return reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: convertedPublicKey
        })
      } else {

      }
    })
    .then(function(newSub){
      return fetch('https://pwagram-33c29.firebaseio.com/subscriptions.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(newSub)
      })
    })
    .then(function(res){
      if (res.ok) {
        displayConfirmNotification()
      }
    })
    .catch(function(err){
      console.error(err)
    })
}

function askForNotificationPermission() {
  Notification.requestPermission(function(result) {
    console.log('User choice', result)
    if (result !== "granted") {
      console.log('notifications forbidden')
    } else {
      configurePushSub()
      // displayConfirmNotification()
    }

  }) 
}


if ('Notification' in window) {
  for (var i = 0; i < enableNotificationsButtons.length; i++) {
    enableNotificationsButtons[i].style.display = 'inline-block'
    enableNotificationsButtons[i].addEventListener('click', askForNotificationPermission)
  }
}
