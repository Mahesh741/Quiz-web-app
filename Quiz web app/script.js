var currentQuestion=0;
var numOfQuestions=questions.length;
var numOfChoices=3;
var scores=0;
function displayQuestion()
{
   document.getElementById("question-count").innerHTML=(currentQuestion+1)+" of "+numOfQuestions+" questions ";

   document.getElementById("question").innerHTML=(questions[currentQuestion].question);
   for(let i=0;i<numOfChoices;i++)
   {
    var button= document.getElementsByClassName("choice")[i];
    button.innerHTML=(questions[currentQuestion].choices[i]);
   }
   document.getElementById("score").innerHTML="Current score ="+scores;
}

function checkAnswer(choice)
{
   //Check answer and modify the code
   if(questions[currentQuestion].correctAnswer==choice)
   {
     scores++;
   }
  currentQuestion++;
  if(currentQuestion<numOfQuestions)
  {
    displayQuestion();
  }
  else
  {
    endQuiz();
  }
}

function endQuiz()
{
    document.getElementById("question").innerHTML="Quiz Completed!"
    document.getElementById("score").innerHTML="Final Score : "+scores+"/"+numOfQuestions;
    
    document.getElementById("choices-container").innerHTML="";
    document.getElementById("question-count").innerHTML="";

}

function restart()
{
    currentQuestion=0;
    numOfQuestions=questions.length;
    scores=0;
    document.getElementById("choices-container").innerHTML=` <button class="choice btn btn-outline-primary"  onclick="checkAnswer(0) " ></button><br>
    <button class="choice btn btn-outline-primary" onclick="checkAnswer(1)" class="btn btn-info"></button><br>
    <button class="choice btn btn-outline-primary" onclick="checkAnswer(2)" class="btn btn-info"></button><br>`;
    displayQuestion();

}
displayQuestion();