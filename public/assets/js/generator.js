const theThoughts = [

  'Pain is weakness leaving the body.',

  'All who wander are not lost.',

  'Do or do not. There is not try.'

];

$(document).on('click', '#getThought', () => {
  let randomThought = theThoughts[Math.floor(Math.random() * theThoughts.length)];
  console.log(randomThought);

  $('#thoughtDisplay').empty();
  $('#thoughtDisplay').append(randomThought);
});
