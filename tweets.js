//requirements:
require("dotenv").config();
const Twitter = require('twitter');
const keys = require("./keys.js");
const client = new Twitter(keys.twitter);

let command = process.argv[2];
let tweet = process.argv[3];

switch (command) {
    case "get-tweets":
        theTweets();
        break;

    case "tweet-this":
        tweetThis();
        break;
};

//functions
function theTweets(){
    client.get('statuses/user_timeline', {q: 'HmBootcamp', count: 20}, function (error, tweets, response) {
        if (error) {
            console.log(error);
        } else {
            for (let i = 0; i < tweets.length; i++) {
                console.log("Tweet: " + tweets[i].text + 
            "\nCreated at: " + tweets[i].created_at);
            }
        }
    });
};