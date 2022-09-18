const thoughtArray = [
  {
    thought:
      "When you start to doubt yourself the real world will eat you alive.",
    speaker: "Henry Rollins",
  },
  {
    thought:
      "Strength is the product of struggle, you must do what others don't to achieve what others won't.",
    speaker: "Henry Rollins",
  },
  {
    thought: "You need a little bit of insanity to do great things.",
    speaker: "Henry Rollins",
  },
  {
    thought:
      "No such thing as spare time, no such thing as free time, no such thing as down time. All you got is life time. Go.",
    speaker: "Henry Rollins",
  },
  {
    thought:
      "Do not waste time with normal people. They are a plague and will only slow you down.",
    speaker: "Henry Rollins",
  },
  {
    thought: "It's sad when someone you know becomes someone you knew.",
    speaker: "Henry Rollins",
  },
  {
    thought:
      "Being an artist is dragging your innermost feelings out, giving a piece of yourself, no matter in which art form, in which medium.",
    speaker: "Henry Rollins",
  },
  {
    thought:
      "I believe that one defines oneself by reinvention. To not be like your parents. To not be like your friends. To be yourself. To cut yourself out of stone.",
    speaker: "Henry Rollins",
  },
];

const getThought = () => {
  document.getElementById("getThought");

  let thoughtToDisplay =
    thoughtArray[Math.floor(Math.random() * thoughtArray.length)];

  document.getElementById("thoughtDisplay").innerHTML =
    thoughtToDisplay.thought;
  document.getElementById("speakerDisplay").innerHTML =
    "- " + thoughtToDisplay.speaker;
};

const tweetIt = () => {
  const quoteToShare = document.getElementById("thoughtDisplay").textContent;
  const tweetURL = "https://twitter.com/intent/tweet?text=" + quoteToShare;

  document.getElementById("shareTweet").href = tweetURL;

  console.log(quoteToShare, tweetURL);
};
