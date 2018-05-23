const functions = require('firebase-functions');
const admin = require('firebase-admin');
const cors = require('cors')({origin: true});
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var serviceAccount = require("./pwagramkey.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://pwagram-33c29.firebaseio.com/'
})

exports.storePostData = functions.https.onRequest((request, response) => {
 cors(request, response, function(){
 	admin.database().ref('posts').push({
 		id: request.body.id, 
 		title: request.body.title,
 		location: request.body.location,
 		image: request.body.image
 	})
 		.then(function(){
 			response.status(201).json({message: "data stored", id: request.body.id})
 		})
 		.catch(function(){
 			response.status(500).json({error: "err"})
 		})
 })

});

