'use strict';



alert(" My name is Hadeel Al Shaer, I am 27 years old, I graduated from Amman Arab University with a bachelor's and master's degree, Bachelor's degree in Computer Information Systems (CIS) and Master's degree in Computer Science (Cs) specifically data mining. , I joined this program to develop myself in the  programming, and Always looking for the best.");

let userName = prompt('whats your name?');
// userName = userName.toLowerCase();
while (!userName) {
    userName = prompt('please write anything');
}

alert('hello there ' + userName + ' glad to have you here');

let score = 0;

let human = prompt('am i a human?');
human = human.toLowerCase();
if (human === 'yes' || human === 'y') {
    //console.log(human);
    alert('think again');


} else if (human === 'no' || human === 'n') {
    //console.log(human);
    alert('good job');
    score++;
} else {
    alert('please write yes or no');
}


let lion = prompt('do lions fly?');
lion = lion.toLowerCase();
if (lion === 'yes' || lion === 'y') {
    //console.log(lion);
    alert('are you okay?');

} else if (lion === 'no' || lion === 'n') {
    //console.log(lion);
    alert('wow really ');
    score++;
} else {
    alert('please write yes or no');
}



let education = prompt('do education Computer Science?');
education = education.toLowerCase();
if (education === 'yes' || education === 'y') {
    //console.log(education);
    alert('good');
    score++;

} else if (education === 'no' || education === 'n') {
    //console.log(education);
    alert('no no repeat my friend ');

} else {
    alert('please write yes or no');
}



let uni = prompt('do my university Amman Arab University?');
uni = uni.toLowerCase();
if (uni === 'yes' || uni === 'y') {
    //console.log(uni);
    alert('good');
    score++;

} else if (uni === 'no' || uni === 'n') {
    //console.log(uni);
    alert('no no repeat my friend ');

} else {
    alert('please write yes or no');
}


let prog = prompt('do I like programming?');
prog = prog.toLowerCase();
if (prog === 'yes' || prog === 'y') {
    //console.log(prog);
    alert('good job');
    score++;

} else if (prog === 'no' || prog === 'n') {
    //console.log(prog);
    alert('no no repeat my friend ');

} else {
    alert('please write yes or no');
}


let master = prompt('do I have master degree?');
master = master.toLowerCase();
if (master === 'yes' || master === 'y') {
    //console.log(master);
    alert('good job');
    score++;

} else if (master === 'no' || master === 'n') {
    //console.log(master);
    alert('no no repeat my friend');

} else {
    alert('please write yes or no');
}




let loveprog = prompt('do I love programming?');
loveprog = loveprog.toLowerCase();
if (loveprog === 'yes' || loveprog === 'y') {
    //console.log(loveprog);
    alert('good job my friend');
    score++;

} else if (loveprog === 'no' || loveprog === 'n') {
    //console.log(loveprog);
    alert('no no repeat my friend ');

} else {
    alert('please write yes or no');
}


alert(`you have a score of ${score} /7`);