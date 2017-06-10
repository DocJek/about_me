'use strict';
var userPoints = 0;
var answer;
var user;
var bodyPart;
var attempts = 4;
var totalPoints = 0;

intro();
question1();
alert('I know, that first one was a bit of a trick. Now let the REAL game begin!');
question2();
console.log('Does Roscoe have tattoos: ' + answer);
question3();
console.log('Does Roscoe like the color pink: ' + answer);
question4();
console.log('Does Roscoe like any sports: ' + answer);
question5();
console.log('Does Roscoe enjoy walking: ' + answer);
bonus(4);
question6();
console.log('Guess Roscoe\'s age: ' + answer);
bonus(5);
question7();
gameResult();

function dockPoint() {
  userPoints--;
  console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
}

function addPoint() {
  userPoints++;
  console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
}

function dockFingerAttempts() {
  attempts--;
  console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
}

function bonus(userPoints){
  alert('I\'m going to give you a chance at life. ' + userPoints + ' points.');
  userPoints += userPoints;
}

function intro() {
  alert('Welcome, I want to play a game with you.');

  user = prompt('Before we get started, tell me your name?');

  console.log('User\'s Name: ' + user);

  alert('Hello, ' + user + '.');

  alert('Now the rules: For every correct answer, you get 1 point. But get one wrong, you get docked a point and a body part. Click Cancel on any of the first questions to exit the game, but beware, for after the 5th question lies the point of no return!');
}

function gameResult() {
  alert(user + ', you achieved ' + userPoints + ' points out of ' + totalPoints + '.');
  if (userPoints <= 0) {
    alert('You Failed, and thus you bleed out and die');
    console.log('User died');
    console.log('Final Score: ' + userPoints + ' points out of ' + totalPoints + '.');
  } else {
    alert('Nice job, you\'ve won this time...');
    console.log('User won');
    console.log('Final Score: ' + userPoints + ' points out of ' + totalPoints + '.');
  }
}

function question1() {
  totalPoints = 1;
  answer = prompt('Do you want to play my game?', 'Yes or No').toLowerCase();
  bodyPart = 'left thumb';
  if (answer === 'yes' || answer === 'y') {
    alert('I was testing you, ' + user + '. Congratulations, you get 1 point');
    addPoint();
  } else {
    alert('Not a good start, ' + user + ', you are docked a point and your ' + bodyPart + '. Schlunk!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  }
  console.log('Do you want to play my game: ' + answer);
}

function question2() {
  totalPoints = 2;
  answer = prompt('Does Roscoe have tattoos?', 'Yes or No').toLowerCase();
  bodyPart = 'eye';
  if (answer === 'yes' || answer === 'y') {
    alert('Good job, you\'ve got eyes');
    addPoint();
  } else if (answer === 'no' || answer === 'n') {
    alert('No, ' + user + '. Since you have trouble using your eyes, you lose one ' + bodyPart + '. Pop!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  } else {
    alert('Not sure what you mean by ' + answer + '. -1 point. Lose an' + bodyPart + '. Pop!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  }
}

function question3() {
  totalPoints = 3;
  answer = prompt('Does Roscoe like the color pink', 'Yes or No').toLowerCase();
  bodyPart = 'tongue';

  if (answer === 'yes' || answer === 'y') {
    alert('Wrong! -1 point and your ' + bodyPart + '. Slice!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  } else if (answer === 'no' || answer === 'n') {
    alert('Not bad, on to the next question');
    addPoint();
  } else {
    alert('Not sure what you mean by ' + answer + '. -1 point and your ' + bodyPart + 'Slice!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  }
}

function question4() {
  totalPoints = 4;
  answer = prompt('Does Roscoe like any sports', 'Yes or No').toLowerCase();
  bodyPart = 'arm';
  if (answer === 'yes' || answer === 'y') {
    alert('Well done, ' + user + '. Next question.');
    addPoint();
  } else if (answer === 'no' || answer === 'n') {
    alert(user + ', you\'re not great at this. Lose a ' + bodyPart + '. Lop!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  } else {
    alert('Not sure what you mean by ' + answer + '. -1 point and your ' + bodyPart + '. Lop!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  }
}

function question5() {
  totalPoints = 5;

  answer = prompt('Does Roscoe enjoy walking?', 'Yes or No').toLowerCase();
  bodyPart = 'leg';
  if (answer === 'yes' || answer === 'y') {
    alert('Correct');
    addPoint();
  } else if (answer === 'no' || answer === 'n') {
    alert('No, ' + user + '. Do you even know Roscoe? You lose an ' + bodyPart + '. Rrrrip!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  } else {
    alert('Not sure what you mean by ' + answer + '. -1 point and your ' + bodyPart + '. Rrrrip!');
    dockPoint();
    console.log('Body part lost this question: ' + bodyPart);
  }
}

// Multiple try question with a number answer
function question6(){
  totalPoints = 9;
  bodyPart = 'finger';

  answer = parseInt(prompt('How old is Roscoe? But be careful, for as you only have ' + attempts + ' fingers on your left hand (not including thumb, of course), you also only have ' + attempts + ' tries and each attempt will dock a point.'));

  while (attempts > 1 && answer != 35) {
    if (answer < 35) { // if answer is not enough
      alert(user + ', your guess is too low. You lose a ' + bodyPart + '.');
      dockFingerAttempts();
      dockPoint();
      console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
      console.log('Guess Roscoe\'s age: ' + answer);
    } else if (answer === 35) { // if answer is correct
      alert('Nice job and you get to keep your ' + attempts + ' fingers.');
      dockFingerAttempts();
      console.log('Guess Roscoe\'s age: ' + answer);
    } else if (answer > 35) { // if answer is too much
      alert(user + ', your guess is too high. You lose a ' + bodyPart + '.');
      dockFingerAttempts();
      dockPoint();
      console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
      console.log('Guess Roscoe\'s age: ' + answer);
    } else { // all other possibilities
      alert(user + ', you must choose a number. You lose a ' + bodyPart + '.');
      dockFingerAttempts();
      dockPoint();
      console.log('Guess Roscoe\'s age: ' + answer);
    }
    answer = parseInt(prompt('That\'s one ' + bodyPart + ', ' + attempts + ' to go. Again I ask, how old is Roscoe? As you only have ' + attempts + ' fingers on your left hand (not including your thumb, of course), you also only have ' + attempts + ' tries left.'));
  }
}

function question7() {
  totalPoints = 15;
  bodyPart = 'tooth';
  attempts = 6;

  var foods = ['sushi', 'steak', 'pasta'];

  answer = prompt('For this one, you get 6 tries. For every incorrect answer, I will dock a point and pull one of your teeth. Name one of Roscoe\'s favorite foods:').toLowerCase();

  while (attempts > 1 && foods.indexOf(answer) === -1) {
    alert(user + ', you were incorrect, you lose a ' + bodyPart + '. Pull!');
    answer = prompt('Name one of Roscoe\'s favorite foods').toLowerCase();
    dockPoint();
    attempts--;
    console.log('User has ' + attempts + ' left.');
  }
  if (foods.indexOf(answer) !== -1) {
    alert('Well done, ' + user + '.');
    console.log('Guess Roscoe\'s fav food: ' + answer);
  }
}
