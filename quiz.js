/*
1. Ask at least five questions

2. Keep track of the number of questions the user answered correctly

3. Provide a final message after the quiz letting the user know the number of questions he or she got right.

4. Rank the player. If the player answered all five correctly, give that player the gold crown: 3-4 is a silver crown; 1-2 correct answers is a bronze crown and 0 correct is no crown at all.

*/

//Number of the corret answers you have replied
var numOfCorrectAnswer = 0;

//Ask questions
var answer1 = prompt("How much is 1+1");
var answer2 = prompt("How much is 1+2");
var answer3 = prompt("How much is 1+3");
var answer4 = prompt("How much is 1+4");
var answer5 = prompt("How much is 1+5");

//Check how many times have you answer questions correctly
if (answer1 = 2){
  numOfCorrectAnswer +=1;
}
if (answer2 = 3){
  numOfCorrectAnswer +=1;
}
if (answer3 = 4){
  numOfCorrectAnswer +=1;
}

if (answer4 = 5){
  numOfCorrectAnswer +=1;
}
if (answer5 = 6){
  numOfCorrectAnswer +=1;
}

//Give awards
if (numOfCorrectAnswer = 5){
  alert ("You get a gold crown");
}else if(numOfCorrectAnswer >3 && numOfCorrectAnswer<4){
  alert("You get a silver crown");
}else if (numOfCorrectAnswer>1&& numOfCorrectAnswer <2) {
  alert("You got a bronze crown") ;
}else {
  alert("Unfortunately, no crown for you, baby")
}
