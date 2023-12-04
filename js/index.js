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
  {
    thought: "Be not afraid of going slowly. Be afraid of standing still.",
    speaker: "Japanese Proverb",
  },
  {
    thought: "Never follow the crowd. Go where it's empty.",
    speaker: "Arnold Scwarzenegger",
  },
  {
    thought: "You can have results or excuses. Not both.",
    speaker: "Arnold Scwarzenegger",
  },
  {
    thought: "I don't have any other message thanb don't forget you are alive.",
    speaker: "Joe Strummer",
  },
  {
    thought:
      "Scar tissue is stronger than regular tissue. Realize the strength, move on",
    speaker: "Henry Rollins",
  },
  {
    thought: "Knowledge without miles equals bull$h!t.",
    speaker: "Henry Rollins",
  },
  {
    thought: "We live in an age where there is no heroic death.",
    speaker: "Yukio Mishima",
  },
  {
    thought:
      "You always know the mark of a coward. A coward hides behind freedom. A brave person stands in front of freedom and defends it for others.",
    speaker: "Henry Rollins",
  },
  {
    thought:
      "Less bullets, more brains. The strong don't need guns. Guns are tools of the weak. This is true. If you disagree with me, it's ok, you're wrong.",
    speaker: "Henry Rollins",
  },
  {
    thought:
      "You will become way less concerned with what other people think of you when you realize how seldom they do.",
    speaker: "David Foster Wallace",
  },
  {
    thought: "We cannot simply sit and stare at our wounds forever.",
    speaker: "Haruki Murakami",
  },
  {
    thought: "Pain is inevitable. Suffering is optional.",
    speaker: "Haruki Murakami",
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

const d = new Date();
let year = d.getFullYear();
document.getElementById("year").innerHTML = year;
