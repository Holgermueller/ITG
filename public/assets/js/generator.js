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

  const theThoughts = [

    'Pain is weakness leaving the body.',

    'All who wander are not lost.',

    'Do or do not. There is no try.',

    'It is never too late to become what you want to be.',

    'The two saddest words are "What if...".',

    'He who dares, wins.'

  ];

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
