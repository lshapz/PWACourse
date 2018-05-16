
var button = document.querySelector('#start-button');
var output = document.querySelector('#output');
var button2 = document.querySelector('#second-button');
var output2 = document.querySelector('#output2');
var button3 = document.querySelector('#third-button');
var output3 = document.querySelector('#output3');

var lukeFacts
var meFacts = {name: "LS", github: "lshapz", task: "this assignment"}

button.addEventListener('click', function() {
  // Create a new Promise here and use setTimeout inside the function you pass to the constructor


  var promise = new Promise(function(resolve, reject) {

      setTimeout(function() { // <- Store this INSIDE the Promise you created!
        // Resolve the following URL: https://swapi.co/api/people/1
        resolve('https://swapi.co/api/people/1')
      }, 500);
  })

  promise.then(value=>{
    fetch(value)
  // Handle the Promise "response" (=> the value you resolved) and return a fetch()
  // call to the value (= URL) you resolved (use a GET request)
      .then(response=>{
  // Handle the response of the fetch() call and extract the JSON data, return that
  // and handle it in yet another then() block
        response.json().then(data=>{
  // Finally, output the "name" property of the data you got back (e.g. data.name) inside
  // the "output" element (see variables at top of the file)
          lukeFacts = data
          output.innerText = data.name 
        })
      })
  })

});

button2.addEventListener('click',function() {
  // Repeat the exercise with a PUT request you send to https://httpbin.org/put
  // Make sure to set the appropriate headers (as shown in the lecture)
  // Send any data of your choice, make sure to access it correctly when outputting it
  // Example: If you send {person: {name: 'Max', age: 28}}, you access data.json.person.name
  // to output the name (assuming your parsed JSON is stored in "data")

 fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(meFacts)
  })
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function(data){
    output2.innerText = data.json.github
    console.log(data)
  })
  .catch(function(error){
    console.error(error)
  })
  // Repeat the exercise with a PUT request you send to https://httpbin.org/put
  // Make sure to set the appropriate headers (as shown in the lecture)
  // Send any data of your choice, make sure to access it correctly when outputting it
  // Example: If you send {person: {name: 'Max', age: 28}}, you access data.json.person.name
  // to output the name (assuming your parsed JSON is stored in "data")

})

button3.addEventListener('click',function() {
 fetch('https://httpbeamPLUS.org/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(meFacts)
  })
  .then(function(response){
    console.log(response)
    return response.json()
  })
  .then(function(data){
    console.log(data)
  })
  .catch(function(error){
    output3.innerText = error
    console.error(error)
  })

  var promise = new Promise(function(resolve, reject) {

      setTimeout(function() { // <- Store this INSIDE the Promise you created!
        // Resolve the following URL: https://swapi.co/api/people/1
        reject({code: 500, message: 'not Luke'})
      }, 500);
  })


  promise
    .then(function(data){
      output3 += '\n' + data.name
    }, function(err){
      console.error(err.code)
      console.error(err.message)
      output3.innerText += '\n' + err.message
    })

  // To finish the assignment, add an error to URL and add handle the error both as
  // a second argument to then() as well as via the alternative taught in the module

})