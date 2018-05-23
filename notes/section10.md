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
