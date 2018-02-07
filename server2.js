// Require/import the HTTP module
var http = require("http");
var twitter = require('twitter');
var request = require('request');

var keys = require('./keys.js');
var twitterKeys = keys.twitterKeys;

// Define a port to listen for incoming requests
var PORT = 7600;
var PORT2 = 7700;
var PORT3 = 8800;



// Create a generic function to handle requests and responses
function handleRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("Such a wonderful day today " + request.url);
}


// Create a generic function to handle requests and responses
function handleRequest2(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You Suck " + request.url);
}

// Create a generic function to handle requests and responses
function handleRequest3(request, response) {
  var userInput = "ahmetburhan"
  function myTweets() {
    var client = new twitter(keys.twitterKeys);
    // Twitter parameters
    var isInputNull = userInput === "" ? userInput = "ahmetburhan" : userInput = userInput;

    var params = {
      "screen_name": userInput,
      "count": 20
    }
    client.get("statuses/user_timeline", params, function (err, tweet, response) {
      if (err) {
        return console.log(err);
      } else {
        for (var i = 0; i < tweet.length; i++) {
          console.log(tweet[i].created_at);
          console.log(tweet[i].text);

          fs.appendFile("log.txt", "\n" + tweet[i].created_at + "\n" + tweet[i].text, function (err) {
            if (err) {
              console.log(err);
            }
          })
        }
      }
    })
  }




  // Send the below string to the client when the user visits the PORT URL
  response.end(response);
}


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);
var server3 = http.createServer(handleRequest3);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});





server2.listen(PORT2, function () {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});


// Start our server so that it can begin listening to client requests.
server3.listen(PORT3, function () {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT3);
  // console.log(myTweets(response))
});