'use strict';
var userPoints = 0;
var answer;
var user;
var bodyPart;
var attempts = 4;

alert('Welcome to the my page, I\'d like to play a game with you');

user = prompt('Before we get started, tell me your name?');

console.log('User\'s Name: ' + user);

alert('Welcome ' + user + '.');
alert('Now the rules: For every correct answer, you get 1 point. But get one wrong, you get docked a point and a body part.');

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
console.log('Point(s) so far: ' + userPoints);

alert('I know, that first one was a bit of a trick. Now let the REAL game begin!');

answer = prompt('Does Roscoe have tattoos?', 'Yes or No').toLowerCase();
bodyPart = 'eye';
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
console.log('Point(s) so far: ' + userPoints);

answer = prompt('Does Roscoe like the color pink', 'Yes or No').toLowerCase();
bodyPart = 'tongue';
if (answer === 'yes' || answer === 'y') {
  alert('Wrong! -1 point and your ' + bodyPart + '. Slice!');
  userPoints--;
  console.log('Body part lost this question: ' + bodyPart);
} else if (answer === 'no' || answer === 'n') {
  alert('Not bad, on to the next question');
  userPoints++;
} else {
  alert('Not sure what you mean by ' + answer + '. -1 point and your ' + bodyPart + 'Slice!');
  console.log('Body part lost this question: ' + bodyPart);
}

console.log('Does Roscoe like the color pink: ' + answer);
console.log('Point(s) so far: ' + userPoints);

answer = prompt('Does Roscoe like any sports', 'Yes or No').toLowerCase();
bodyPart = 'arm';
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
console.log('Point(s) so far: ' + userPoints);

answer = prompt('Does Roscoe enjoy walking?', 'Yes or No').toLowerCase();
bodyPart = 'leg';
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
console.log('Point(s) so far: ' + userPoints);

// Multiple try question with a number answer
bodyPart = 'finger';
answer = parseInt(prompt('How many years has Roscoe boxed for? But be careful, for as you only have ' + attempts + ' fingers on your left hand (not including thumb), you also only have ' + attempts + ' tries and each attempt will dock a point.'));
while (attempts >= 1 && answer != 7) {
  if (answer < 7) {
    alert(user + ', your guess is too low.');
    attempts--;
    userPoints--;
    console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
  } else if (answer > 7) {
    alert(user + ', your guess is too high.');
    attempts--;
    userPoints--;
    console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
  } else if (answer === null) {
    alert(user + ', your guess is too high.');
    attempts--;
    userPoints--;
    console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
  } else {
    alert('Nice job and you get to keep your ' + attempts + ' fingers.');
    userPoints++;
    console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
  }
  answer = parseInt(prompt('That\'s one ' + bodyPart + ', ' + attempts + ' to go. Again I ask, how many years has Roscoe boxed for? As you only have ' + attempts + ' fingers on your left hand (not including thumb), you also only have ' + attempts + ' tries left.'));
  console.log('User has: ' + attempts + ' attempts and ' + attempts + ' fingers left.');
}




alert('You achieved ' + userPoints + ' points');

if (userPoints <= 0) {
  alert('You Failed, and thus you bleed out and die');
} else {
  alert('Nice job, you\'ve won this time...');
}
