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

