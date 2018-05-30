const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
var webpush = require('web-push')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var serviceAccount = require("./pwagramkey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://pwagram-33c29.firebaseio.com/'
})

exports.storePostData = functions.https.onRequest(function(request, response){
 cors(request, response, function(){
 	admin.database().ref('posts').push({
 		id: request.body.id, 
 		title: request.body.title,
 		location: request.body.location,
 		image: request.body.image
 	})
 		.then(function(){
 			webpush.setVapidDetails('mailto:lshapwork@gmail.com', 'BJr5cDMeynODY-AjkqkSTGHH7t0lX7H-Rcn51lU0qghafp6T-TBM0q7KHnkPZXGeK5G4j7aHZ-uKEbJqRmTswwo', 'eGZoT_V4i1nB2Tx8t6_x02p63rlelQCEiIxGhODOEig')
 			return admin.database.ref('subscriptions').once('value')
 			.then(function(subscriptions){
 				subscriptions.forEach(function(sub){
 					var pushConfig = {
 						endpoint: sub.val().endpoint,
 						keys: {
 							auth: sub.val().keys.auth,
 							p256dh: sub.val().keys.p256dh
 						}
 					}
 					webpush.sendNotifcation(pushConfig, JSON.stringify({
 						title: 'new post', 
 						content: 'new post added',
 						openUrl: '/help'
 					}))
 						.catch(function(err){
 							console.error(err)
 						})
 				})
	 			response.status(201).json({message: "data stored", id: request.body.id})
 				
 			})
 		})
 		.catch(function(err){
 			response.status(500).json({error: err})
 		})
 })

});

