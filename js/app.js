'use strict';
var userPoints = 0;
var answer;
var user;
var bodyPart;
var attempts = 4;
var totalPoints = 0;

alert('Welcome to the my page, I\'d like to play a game with you');

user = prompt('Before we get started, tell me your name?');

console.log('User\'s Name: ' + user);

alert('Welcome ' + user + '.');

alert('Now the rules: For every correct answer, you get 1 point. But get one wrong, you get docked a point and a body part.');

totalPoints = 1;
answer = prompt('Do you wanna play my game?', 'Yes or No').toLowerCase();
bodyPart = 'left thumb';
if (answer === 'yes' || answer === 'y') {
  alert('I was testing you, ' + user + '. Congratulations, you get 1 point');
  userPoints++;
} else {
  alert('Not a good start, ' + user + ', you are docked a point and your ' + bodyPart + '. Schlunk!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
}
console.log('Do you want to play my game: ' + answer);
console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);

alert('I know, that first one was a bit of a trick. Now let the REAL game begin!');

answer = prompt('Does Roscoe have tattoos?', 'Yes or No').toLowerCase();
bodyPart = 'eye';
totalPoints = 2;
if (answer === 'yes' || answer === 'y') {
  alert('Good job, you\'ve got eyes');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert('No, ' + user + '. Since you have trouble using your eyes, you lose one ' + bodyPart + '. Pop!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
} else {
  alert('Not sure what you mean by ' + answer + '. -1 point. Lose an' + bodyPart + '. Pop!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
}

console.log('Does Roscoe have tattoos: ' + answer);
console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);

answer = prompt('Does Roscoe like the color pink', 'Yes or No').toLowerCase();
bodyPart = 'tongue';
totalPoints = 3;

if (answer === 'yes' || answer === 'y') {
  alert('Wrong! -1 point and your ' + bodyPart + '. Slice!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
} else if (answer === 'no' || answer === 'n') {
  alert('Not bad, on to the next question');
  userPoints++;
} else {
  alert('Not sure what you mean by ' + answer + '. -1 point and your ' + bodyPart + 'Slice!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
}

console.log('Does Roscoe like the color pink: ' + answer);
console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);

answer = prompt('Does Roscoe like any sports', 'Yes or No').toLowerCase();
bodyPart = 'arm';
totalPoints = 4;
if (answer === 'yes' || answer === 'y') {
  alert('Well done, ' + user + '. Next question.');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert(user + ', you\'re not great at this. Lose a ' + bodyPart + '. Lop!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
} else {
  alert('Not sure what you mean by ' + answer + '. -1 point and your ' + bodyPart + '. Lop!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
}

console.log('Does Roscoe like any sports: ' + answer);
console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);

answer = prompt('Does Roscoe enjoy walking?', 'Yes or No').toLowerCase();
bodyPart = 'leg';
totalPoints = 5;
if (answer === 'yes' || answer === 'y') {
  alert('Correct');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert('No, ' + user + '. Do you even know Roscoe? You lose an ' + bodyPart + '. Rrrrip!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
} else {
  alert('Not sure what you mean by ' + answer + '. -1 point and your ' + bodyPart + '. Rrrrip!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
}

console.log('Does Roscoe enjoy walking: ' + answer);
console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
// Multiple try question with a number answer
bodyPart = 'finger';
totalPoints = 9;

alert('I\'m going to give you a chance at life. + 4 points');

userPoints += 4;
console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);

answer = parseInt(prompt('How old is Roscoe? But be careful, for as you only have ' + attempts + ' fingers on your left hand (not including thumb, of course), you also only have ' + attempts + ' tries and each attempt will dock a point.'));

while (attempts > 1 && answer != 35) {
  if (answer < 35) { // if answer is not enough
    alert(user + ', your guess is too low. You lose a ' + bodyPart + '.');
    attempts--;
    userPoints--;
    console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
    console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
    console.log('Guess Roscoe\'s age: ' + answer);
  } else if (answer === 35) { // if answer is correct
    alert('Nice job and you get to keep your ' + attempts + ' fingers.');
    userPoints++;
    console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
    console.log('Guess Roscoe\'s age: ' + answer);
  } else if (answer > 35) { // if answer is too much
    alert(user + ', your guess is too high. You lose a ' + bodyPart + '.');
    attempts--;
    userPoints--;
    console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
    console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
    console.log('Guess Roscoe\'s age: ' + answer);
  } else { // all other possibilities
    alert(user + ', you must choose a number. You lose a ' + bodyPart + '.');
    attempts--;
    userPoints--;
    console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
    console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
    console.log('Guess Roscoe\'s age: ' + answer);
  }
  answer = parseInt(prompt('That\'s one ' + bodyPart + ', ' + attempts + ' to go. Again I ask, how old is Roscoe? As you only have ' + attempts + ' fingers on your left hand (not including your thumb, of course), you also only have ' + attempts + ' tries left.'));
}

console.log('Guess Roscoe\'s age: ' + answer);
console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);

alert('You\'ve done well to make it this far, ' + user + '. Here\'s a bonus 6 points.');

userPoints += 6;
bodyPart = 'tooth';
totalPoints = 15;
attempts = 6;

console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);

var foods = ['sushi', 'steak', 'pasta'];

answer = prompt('For this one, you get 6 tries. For every incorrect answer, I will dock a point and pull one of your teeth. Name one of Roscoe\'s favorite foods:').toLowerCase();

while (attempts > 1 && foods.indexOf(answer) === -1) {
  alert(user + ', you were incorrect, you lose a ' + bodyPart + '. Pull!');
  answer = prompt('Name one of Roscoe\'s favorite foods').toLowerCase();
  userPoints--;
  attempts--;
  console.log('User has ' + attempts + ' left.');
  console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
}

if (foods.indexOf(answer) !== -1) {
  alert('Well done, ' + user + '.');
  console.log('Guess Roscoe\'s fav food: ' + answer);
  console.log('Point(s) so far: ' + userPoints + ' out of ' + totalPoints);
}

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