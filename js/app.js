'use strict';
var userPoints = 0;
var answer;
var user;
var bodyPart;

alert('Welcome to the my page, I\'d like to play a game with you');

user = prompt('Before we get started, tell me your name?');

console.log('User\'s Name: ' + user);

alert('Welcome ' + user + '.');
alert('Now the rules: For every correct answer, you get 1 point. But get one wrong, you get docked a point and a body part.');

answer = prompt('Do you wanna play my game?', 'Yes or No').toLowerCase();
bodyPart = 'finger';
if (answer === 'yes' || answer === 'y') {
  alert('I was testing you, ' + user + '. Congratulations, you get 1 point');
  userPoints++;
} else {
  alert('Not a good start, ' + user + ', you are docked a point and your ' + bodyPart + '. Schlunk!');
  userPoints--;
}
console.log('Do you want to play my game: ' + answer);
console.log('Point(s) so far: ' + userPoints);
console.log('Body part lost this question: ' + bodyPart);

alert('I know, that first one was a bit of a trick. Now let the REAL game begin!');

answer = prompt('Does Roscoe have tattoos?', 'Yes or No').toLowerCase();
bodyPart = 'eye';
if (answer === 'yes' || answer === 'y') {
  alert('Good job, you\'ve got eyes');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert('No, ' + user + '. Since you have trouble using your eyes, you lose one ' + bodyPart + '. Pop!');
  userPoints--;
} else {
  alert('Not sure what you mean by ' + answer + '. -1 point. Lose an' + bodyPart + '. Pop!');
  userPoints--;
}

console.log('Does Roscoe have tattoos: ' + answer);
console.log('Point(s) so far: ' + userPoints);
console.log('Body part lost this question: ' + bodyPart);

answer = prompt('Does Roscoe like the color pink', 'Yes or No').toLowerCase();
bodyPart = 'tongue';
if (answer === 'yes' || answer === 'y') {
  alert('Wrong! -1 point and your ' + bodyPart + '. Slice!');
  userPoints--;
} else if (answer === 'no' || answer === 'n') {
  alert('Not bad, on to the next question');
  userPoints++;
} else {
  alert('Not sure what you mean by' + answer + '. -1 point and your ' + bodyPart + 'Slice!');
}

console.log('Does Roscoe like the color pink: ' + answer);
console.log('Point(s) so far: ' + userPoints);
console.log('Body part lost this question: ' + bodyPart);

answer = prompt('Does Roscoe like any sports', 'Yes or No').toLowerCase();
bodyPart = 'arm';
if (answer === 'yes' || answer === 'y') {
  alert('Well done, ' + user + '. Next question.');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert(user + ', you\'re not great at this. Lose a ' + bodyPart + '. Lop!');
  userPoints--;
} else {
  alert('Not sure what you mean by' + answer + '. -1 point and your ' + bodyPart + '. Lop!');
  userPoints--;
}

console.log('Does Roscoe like any sports: ' + answer);
console.log('Point(s) so far: ' + userPoints);
console.log('Body part lost this question: ' + bodyPart);

answer = prompt('Does Roscoe enjoy walking?', 'Yes or No').toLowerCase();
bodyPart = 'leg';
if (answer === 'yes' || answer === 'y') {
  alert('Correct');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert('No, ' + user + '. Do you even know Roscoe? You lose an ' + bodyPart + '. Rrrrip!');
  userPoints--;
} else {
  alert('Not sure what you mean by' + answer + '. -1 point and your ' + bodyPart + '. Rrrrip!');
  userPoints--;
}

console.log('Does Roscoe enjoy walking: ' + answer);
console.log('Point(s) so far: ' + userPoints);
console.log('Body part lost this question: ' + bodyPart);

alert('You achieved ' + userPoints + ' points');

if (userPoints <= 0) {
  alert('You Failed, and thus you bleed out and die');
} else {
  alert('Nice job, you\'ve won this time...');
}
