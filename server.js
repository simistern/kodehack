var express = require('express');
app = express();
var r = require("rethinkdbdash")();
var bodyParser = require("body-parser");

require("rethink-config")({
  "r": r,
  "database": "kodehack",
  "tables": ["points", "user", "ticket", "message"]
});

var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-22120650326-THgfUj45JwykOKAqmmwTJIyt', // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'circleacademybot'
});

/*bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':robot_face:'
    };
    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    //bot.postMessageToChannel('general', 'Greetings students, I am your slackbot. The following three features are available to you. If you would like to see your next tutorial type "next tutorial" ', params);

    bot.postMessageToChannel('random', 'Greetings nerds, I am a slackbot. Please respond to my messages while I test my systems. Also, titty sprinkles.', params);


    // define existing username instead of 'user_name'
    //bot.postMessageToUser('chriscates', 'BEEP BOOP I AM A SLACK BOAT ', params);
    // define private group instead of 'private_group', where bot exist
    //bot.postMessageToGroup('private_group', 'meow!', params);
});


/**
 * @param {object} data
 */
/*bot.on('message', function(data) {
    // all ingoing events https://api.slack.com/rtm
    console.log(data);
}); */

var msg = "new ticket how do I do things"

getContext = function(msg){
  var msgarray = "";
  msgarray = msg.match("get points");
  if(msg.match("get points")){
    console.log("get points check");
    getPoints(data);
  }
  else if (msg.match("which tutorial")) {
    console.log("which tutorial check");
    checkTutorial(data);
  }
  else if(msg.match("new ticket")){
    console.log("new ticket check");
    AddTicket(data);
  }
}

getPoints = function(data){
    //PARSE USER DATA
    r.db("kodehack").table("points").filter({
      "user" : username;
    }).getField("user").then(function(res){
        console.log("Here is the data " + res);
    })
}

checkTutorial = function(data){
    //PARSE USER DATA
    r.db("kodehack").table("TUTORIAL").filter({
      "user" : username;
    }).getField("user").then(function(res){
        console.log("Here is the data " + res);
    })
}

checkTutorial = function(data){
    //PARSE USER DATA



    r.db("kodehack").table("TUTORIAL").filter({
      "user" : username;
    }).getField("user").then(function(res){
        console.log("Here is the data " + res);
    })
}


//ClientId: 19855363600.22359464534
//ClientSecret: 394afe7c34f6eb5bad8fd33eda04bb18

/*
slackbot features:
  - ask for points
  - ask which tutorial they're on
   -submit help ticket to instructor
*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(express.static('./public'));

app.get("*", function(request, result){
  result.sendFile(__dirname + "/public/index.html");
})

var PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log("You are listening on port " + PORT);
