(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
$(document).ready(() => {

  // window.twttr = (function(d, s, id) {
  //   var js, fjs = d.getElementsByTagName(s)[0],
  //     t = window.twttr || {};
  //   if (d.getElementById(id)) return t;
  //   js = d.createElement(s);
  //   js.id = id;
  //   js.src = "https://platform.twitter.com/widgets.js";
  //   fjs.parentNode.insertBefore(js, fjs);
  
  //   t._e = [];
  //   t.ready = function(f) {
  //     t._e.push(f);
  //   };
  
  //   return t;
  // }(document, "script", "twitter-wjs"));

  const theThoughts = require('./inspiration.js');

  function createButton() {
    let quoteToShare = $('#thoughtToDisplay').text().replace(/\s/g, '+');

    let tweetURL = 'https://twitter.com/intent/tweet?text=' + quoteToShare;
      
    $('#shareTweet').attr('href', tweetURL);
    console.log(quoteToShare);
  }

  $(document).on('click', '#getThought', () => {
    $('#thoughtDisplay').empty();

    let randomThought = theThoughts[Math.floor(Math.random() * theThoughts.length)];
    let thoughtToDisplay = $('<div>')
      .text(randomThought)
      .attr('id', 'thoughtToDisplay')
      .addClass('thought-to-display');

    $('#thoughtDisplay').append(thoughtToDisplay);
    createButton()
  });

});

},{"./inspiration.js":2}],2:[function(require,module,exports){
module.exports = [

  'Pain is weakness leaving the body.',

  'All who wander are not lost.',

  'Do or do not. There is no try.',

  'It is never too late to become what you want to be.',

  'The two saddest words are "What if...".',

  'He who dares, wins.'

];
},{}]},{},[1,2]);
