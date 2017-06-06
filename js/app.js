'use strict';
var userPoints = 0;
var answer;
var user;

alert('Welcome to the my page, I\'d like to play a game with you');

user = prompt('Before we get started, tell me your name?');

console.log('User\'s Name: ' + user);

alert('Well hello ' + user + '!');
alert('Now the rules: For every correct answer, you get 1 point. But get one wrong, and get docked a point.');

answer = prompt('Do you wanna play my game?', 'Yes or No').toLowerCase();

if (answer === 'yes' || answer === 'y') {
  alert('I was testing you ' + user + '. Congratulations, you get 1 point');
  userPoints++;
} else {
  alert('Not a good start ' + user + ', you are docked a point');
  userPoints--;
}
console.log('Do you want to play my game: ' + answer);
console.log('Point(s) so far' + userPoints);

alert('I know, that first one was a bit of a trick. Now let the REAL game begin!');

answer = prompt('Does Roscoe like the color pink', 'Yes or No').toLowerCase();

if (answer === 'yes' || answer === 'y') {
  alert('Wrong! -1 point');
  userPoints--;
} else if (answer === 'no' || answer === 'n') {
  alert('Not bad, on to the next question');
  userPoints++;
} else {
  alert('Not sure what you mean by' + answer + '. -1 point.');
}

console.log('Does Roscoe like the color pink: ' + answer);
console.log('Point(s) so far' + userPoints);

answer = prompt('Does Roscoe like any sports', 'Yes or No').toLowerCase();

if (answer === 'yes' || answer === 'y') {
  alert('Well done, ' + user + '. Next question.');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert(user + ', you\'re not great at this.');
  userPoints--;
} else {
  alert('Not sure what you mean by' + answer + '. -1 point.');
  userPoints--;
}

console.log('Does Roscoe like any sports: ' + answer);
console.log('Point(s) so far' + userPoints);

answer = prompt('Does Roscoe enjoy walking?', 'Yes or No').toLowerCase();

if (answer === 'yes' || answer === 'y') {
  alert('Correct');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert('No, ' + user + '. Do you even know Roscoe?');
  userPoints--;
} else {
  alert('Not sure what you mean by' + answer + '. -1 point.');
  userPoints--;
}

console.log('Do you want to play my game: ' + answer);
console.log('Point(s) so far' + userPoints);

answer = prompt('Does Roscoe enjoy walking?', 'Yes or No').toLowerCase();

if (answer === 'yes' || answer === 'y') {
  alert('Correct');
  userPoints++;
} else if (answer === 'no' || answer === 'n') {
  alert('No, ' + user + '. Do you even know Roscoe?');
  userPoints--;
} else {
  alert('Not sure what you mean by' + answer + '. -1 point.');
  userPoints--;
}

console.log('Does Roscoe enjoy walking: ' + answer);
console.log('Point(s) so far' + userPoints);

alert('You achieved ' + userPoints + ' points');

if (userPoints < 0) {
  alert('You Failed');
} else {
  alert('Nice job, you\'ve won this time...');
}
