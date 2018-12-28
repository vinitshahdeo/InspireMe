const Quote = require('inspirational-quotes');

console.log(Quote.getRandomQuote());

console.log(Quote.getQuote());

setInterval(function (){
  new Notification("Your Quote is Here!", {title : "Your Quote is Ready!",body: Quote.getRandomQuote()});
},3000);
