# Web push notifications 

## why?

* show up even if app and browser closed 
  * background process 
* drive user engagement 

## how? 

* app
  * user enables (prompt for permission) 
  * check for existing subscriptions (on the SW)
    * subscriptions are per browser/app per device 
    * websockets only work if it's open! 
* sw 
  * can send subscription to backend so it persists 
* each browser vendor has a push server with API endpoints
* our own server
  * subscription exists 
  * pushes messages 

## displaying notifications 
*doesn't need to be related to a push event*

* notification API 
* set title, body, images, more
* can be used directly from page JS or SW
  * if push, must be SW 

## options, button clicks

* application level, not page level
* action clicks need to be in SW in case not running
* notification close is a good chance to send analytics 

## Push

* multi step process 
* see screenshot `section10.148.push_diagram.png`
* subscriptions - in app.js
* VAPID WebPush jwt claims 
  * push messages are sent to an endpoint on a server
  * need to make sure only our app is being listened to
  * private and public key
* webpush.setVapidDetails(email, public, private)
* Firebase has .forEach for database objects!


# Useful Resources and Links 


* [More about Web Push by Google](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/)
* [More about VAPID](https://blog.mozilla.org/services/2016/04/04/using-vapid-with-webpush/)
* [More about VAPID by Google](https://developers.google.com/web/updates/2016/07/web-push-interop-wins)
* [The web-push npm Package](https://github.com/web-push-libs/web-push)
* [More about showNotification (display Notifications from Service Workers)](https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification)
* [The Notification API](https://developer.mozilla.org/en/docs/Web/API/notification)
* [The Push API](https://developer.mozilla.org/en/docs/Web/API/Push_API)
