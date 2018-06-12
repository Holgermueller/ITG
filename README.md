# Twitter-Toy

## Tech needed:

* Twitter API keys and Access tokens - you get these with your Twitter account.

* [Twitter node package](https://www.npmjs.com/package/twitter)

* [dotenv node package](https://www.npmjs.com/package/dotenv)

### Steps:
1) Run npm init to create package.json .gitignore, then download node packages.

2) Create a .env folder and add it to your .gitignore; this is where you'll store your API keys and access tokens.

3) Require: require("dotenv").config();
Put this at the top of the file from which you'll run your commands

4) Create a keys.js file and create an exports.Twitter object to run your keys to your main file.

5) Require the following just below your require("dotenv):
* const Twitter = require('twitter');
* const keys = require("./keys.js");
* const client = new Twitter(keys.twitter);