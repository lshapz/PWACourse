# Background synchronization 

* can store requests while outline and send when connection established 


## How does it work?

* App wants to send to Server
* you cannot cache post requests, only the responses
* SW can register a Sync Task, store the data in indexedDB for syncing
* once connectivity is back, sync event will fire, SW will make request 
  * even works if tab was closed

## SyncManager 

* API on window object `if ('SyncManager' in window)`
* interfaces ServiceWorkers for registering sync events etc

## Storing in IDB

* create a new table just for the sync posts (so no server/client confusing)

*just spent 20+ minutes looking for a 'bug' that was an 'in' where Max wrote 'of' UGH* 

## Periodic sync 

* not supported yet (?)
* not about connectivity 
* something like twitter/facebook/insta, lots of new data all the time
  * periodically fetch new data even while tab closed
  * faster load time once you actually load back up
* register periodic sync task including schedule in SW
* schedule triggers "periodicsync" event which triggers SW to request server

## server side code 

* we've been using http-server dummy node stuff
* firebase has cloud functions 
  * can act like a REST API 
  * you can use a regular node too 

#Useful Resources & Links 

* [Introducing Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)
* [A Basic Guide to Background Sync](https://ponyfoo.com/articles/backgroundsync)
* [More about Firebase Cloud Functions](https://firebase.google.com/docs/functions/)


