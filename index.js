var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question("whats your Name?" );

console.log("welcome " + userName + " To, Do you know Atul...") 

console.log(" Pro Tip- Answer your question in small letters only :) " + "All The Best")

function play(question, answer) {
 var userAnswer = readlineSync.question(question);
 
 if(userAnswer === answer) {
   console.log(" You are right")
   score = score + 1
 } else {
   console.log(" You are wrong")
   score = score + 0
 } console.log ("Your score is " + score);
   console.log("-------------")


}

var questions = [{
  question: "1. who is my favourite Cricketer?",
  answer: "rohit sharma"
},{
  question:"2. What is my hobby?",
  answer: "singing"
}, {
  question: "3. Which is my favourite dish?",
  answer: "pav-bhaji"

}, {
  question: "4. Which anime character I like the most?",
  answer: "naruto"

},
{
  question: "5. Who is my favourite character in Mahabharat?",
  answer: "krishna"

}];

for (var i=0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)

}

console.log("YO Yo  " + "You have completed the test And your final score is " + score + "\n Thank You :) " )

