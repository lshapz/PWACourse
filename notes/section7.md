# IndexedDB and dynamic data 
<!-- ugh -->
## basics 

* made a firebase
* it uses a nosql db 
* added a photo
* used photo.id photo.image photo.title photo.location 
* why is he using so many for loops

## dynamic caching vs caching dynamic content  

### dynamic caching

* store received responses in cache for future use
* request --> SW --> network --> cache --> page 
	* store assets/resources user requests in cache
* happens in pre-caching and fetch requests

### caching dynamic content

* store for frequently changing JSON data 
* request --> SW --> network --> indexeddb --> page
* json data or XML data 
* not files or assets (no css, etc)

## IndexedDB 

* terrible name too many ds
* transactional key value DB in browser
	* transactional: if one action in transaction fails, none are applied 
* can store unstructured data (files and blobs) if you really must
* can be accessed asynchronously (for SW)
* database -> object store (table) -> object

## storing in IDB

* we are using a local copy of the script instead of a node_module
```
idb.open('database-name', #version, initializeStoreCallback(db){
	if (!db.objectStoreNames.contains('table-name')) {
		db.createObjectStore('table-name', {keyPath: 'primaryKeyColumn'})	
	}
})
```

#### write to DB transaction: 
```
dbPromise.then(function(db){
	var tx = db.transaction('table-name', 'readwrite') 
	var store = tx.objectStore('table-name')
	store.put(stuff)
	return tx.complete;
})

```

#### read from DB only
* don't need tx.complete because no writing  

```
dbPromise.then(function(db){
	var tx = db.transaction('table-name', 'readonly')  
	var store = tx.objectStore('table-name')
	return store.getAll()
	})
```

## updating and mismatch

* put method overwrites old info
	* but if gone, doesn't remove
* can do store.clear() or store.delete(id)

# Resources and Links (7.112)

* [IndexedDB Browser Support](https://caniuse.com/#feat=indexeddb)
* [IDB on Github](https://github.com/jakearchibald/idb)
* [IndexedDB explained on MDN](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
* [Alternative to IDB](http://dexie.org/)