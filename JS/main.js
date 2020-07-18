const author = [
  "- Oscar Wilde", 
  "- Frank Zappa", 
  "- Mae West", 
  "- Hermann Hesse", 
  "- Erich Maria Remarque", 
  "- Jack London", 
  "- Isaac Asimov",
  "- Anonymous",
  "- Mary Shelley",
  "- J.K. Rowling"
];

const citata = [
  "“Be yourself; everyone else is already taken.”", 
  "“So many books, so little time.”", 
  "“You only live once, but if you do it right, once is enough.”", 
  "“If I know what love is, it is because of you.”", 
  "“We were all at once terribly alone; and alone we must see it through.”", 
  "“You can't wait for inspiration. You have to go after it with a club.”", 
  "“In life, unlike chess, the game continues after checkmate.”",
  "“A little nonsense now and then, is cherished by the wisest men.”",
  "“Life, although it may only be an accumulation of anguish, is dear to me, and I will defend it.”",
  "“I don't believe in the kind of magic in my books. But I do believe something very magical can happen when you read a good book.”"
];

const my_div = document.getElementById("new-quote");

window.addEventListener('load', function () {
  let randomAuthor = author[Math.floor(Math.random()*author.length)];
  let indexOfRandomAuthor = author.indexOf(randomAuthor);
  document.getElementById("author").innerHTML = randomAuthor;
  document.getElementById("text").innerHTML = citata[indexOfRandomAuthor];
});

my_div.addEventListener("click", function(){
  let randomAuthor = author[Math.floor(Math.random()*author.length)];
  let indexOfRandomAuthor = author.indexOf(randomAuthor);
  document.getElementById("author").innerHTML = randomAuthor;
  document.getElementById("text").innerHTML = citata[indexOfRandomAuthor];
});