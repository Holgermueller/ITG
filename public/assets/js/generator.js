const theThoughts = require('inspiration.js');

const randomThought = theThoughts[Math.floor(Math.random() * theThoughts.length)];

$(document).on('click', '#getThought', () => {
  console.log(randomThought);
});
