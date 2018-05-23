
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


function askForNotificationPermission() {
  Notification.requestPermission(function(result) {
    console.log('User choice', result)
    if (result !== "granted") {
      console.log('notifications forbidden')
    } else {
      displayConfirmNotification()
      // Notification
      // hide button 
    }

  }) 
}
 
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
        swreg.showNotification('[SW] Subscribed!', options)
      })

  }
  // new Notification('Subscribed!', options)
}

if ('Notification' in window) {
  for (var i = 0; i < enableNotificationsButtons.length; i++) {
    enableNotificationsButtons[i].style.display = 'inline-block'
    enableNotificationsButtons[i].addEventListener('click', askForNotificationPermission)
  }
}
