$(document).ready(() => {

  const theThoughts = [

    'Pain is weakness leaving the body.',

    'All who wander are not lost.',

    'Do or do not. There is not try.',

    'It is never too late to become what you want to be.',

    'The two saddest words are "What if...".'

  ];

  function createButton() {
    let quoteToShare = $('#thoughtToDisplay').text();

    let newTwitterBtn = $('<a>')
      .addClass('twitter-share-button')
      .attr('href', 'https://twitter.com/intent/tweet?text=' + quoteToShare)
      .attr('data-size', 'large')
      .attr('data-text', quoteToShare)
      
    $('#twitterBtnDiv').append(newTwitterBtn);
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
