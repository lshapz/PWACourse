# web app manifest
*installable*

## minimum criteria for PWA 

* manifest with
	* short_name
	* name
	* icons: [{ }] with 144x144 png icon (mime type declaration)
	* start_url 
* service worker, registered 
* served via https

#### install banner shows up if

* criteria above
* visited twice, five minutes apart 

## some browsers do not support manifest

* must include the below meta / link tags on every .html page in app

#### what to include for apple / safari / ios

* ```<meta name="apple-mobile-web-app-capable" content="yes">```
* ```<meta name="apple-mobile-web-app-status-bar-style" content="blank">```
* ```<meta name="apple-mobile-web-app-title" content="iPWAGram">```
* ```<link rel="apple-touch-icon" href="/src/images/icons/apple-icon-57x57.png" sizes="57x57">```
	* all sizes as needed

#### what to include for windows / IE / edge

* ```<meta name="msapplication-TileImage" content="/src/images/icons/app-icon-144x144.png">```
* ```<meta name="msapplication-TileColor" content="#fff">```

#### one more thing that everyone can use 

* ```<meta name="theme-color" content="#3f51b5">```

