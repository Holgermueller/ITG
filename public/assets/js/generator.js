const theThoughts = [

  'Pain is weakness leaving the body.',

  'All who wander are not lost.',

  'Do or do not. There is not try.'

];

function createButton() {
  let quoteToShare = $('#thoughtToDisplay');
  console.log(quoteToShare);
}

$(document).on('click', '#getThought', () => {
  let randomThought = theThoughts[Math.floor(Math.random() * theThoughts.length)];

  let thoughtToDisplay = $('<div>')
    .text(randomThought)
    .attr('id', 'thoughtToDisplay')
    .addClass('thought-to-display');

  $('#thoughtDisplay').empty();
  $('#thoughtDisplay').append(thoughtToDisplay);
  createButton()
});
