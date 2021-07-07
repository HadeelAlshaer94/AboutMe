'use strict';



alert(" My name is Hadeel Al Shaer, I am 27 years old, I graduated from Amman Arab University with a bachelor's and master's degree, Bachelor's degree in Computer Information Systems (CIS) and Master's degree in Computer Science (Cs) specifically data mining. , I joined this program to develop myself in the  programming, and Always looking for the best.");

let userName = prompt('whats your name?');
// userName = userName.toLowerCase();
while (!userName) {
    userName = prompt('please write anything');
}

alert('hello there ' + userName + ' glad to have you here');

let score = 0;



let answer1 = '';
function Q1(answer1) {
    answer1 = answer1.toLowerCase();
    if (answer1 === 'yes' || answer1 === 'y') {
        //console.log(answer1);
        alert('think again');


    } else if (answer1 === 'no' || answer1 === 'n') {
        //console.log(answer1);
        alert('good job');
        score++;
    } else {
        alert('please write yes or no');
    }
}

let answer2 = '';
function Q2(answer2) {
    answer2 = answer2.toLowerCase();
    if (answer2 === 'yes' || answer2 === 'y') {
        //console.log(answer2);
        alert('are you okay?');

    } else if (lion === 'no' || lion === 'n') {
        //console.log(answer2);
        alert('wow really ');
        score++;
    } else {
        alert('please write yes or no');
    }
}

let answer3 = '';
function Q3(answer3) {
    answer3 = answer3.toLowerCase();
    if (answer3 === 'yes' || answer3 === 'y') {
        //console.log(answer3);
        alert('good');
        score++;

    } else if (answer3 === 'no' || answer3 === 'n') {
        //console.log(answer3);
        alert('no no repeat my friend ');

    } else {
        alert('please write yes or no');
    }
}

let answer4 = '';
function Q4(answer4) {
    answer4 = answer4.toLowerCase();
    if (answer4 === 'yes' || answer4 === 'y') {
        //console.log(answer4);
        alert('good');
        score++;

    } else if (answer4 === 'no' || answer4 === 'n') {
        //console.log(answer4);
        alert('no no repeat my friend ');

    } else {
        alert('please write yes or no');
    }

}

let answer5 = '';
function Q5(answer5) {
    answer5 = answer5.toLowerCase();
    if (answer5 === 'yes' || answer5 === 'y') {
        //console.log(answer5);
        alert('good job');
        score++;

    } else if (answer5 === 'no' || answer5 === 'n') {
        //console.log(answer5);
        alert('no no repeat my friend ');

    } else {
        alert('please write yes or no');
    }
}

let answer6 = '';
function Q6(answer6) {
    answer6 = answer6.toLowerCase();
    if (answer6 === 'yes' || answer6 === 'y') {
        //console.log(answer6);
        alert('good job');
        score++;

    } else if (answer6 === 'no' || answer6 === 'n') {
        //console.log(answer6);
        alert('no no repeat my friend');

    } else {
        alert('please write yes or no');
    }
}

let answer7 = '';
function Q7(answer7) {
    answer7 = answer7.toLowerCase();
    if (answer7 === 'yes' || answer7 === 'y') {
        //console.log(answer7);
        alert('good job my friend');
        score++;

    } else if (answer7 === 'no' || answer7 === 'n') {
        //console.log(answer7);
        alert('no no repeat my friend ');

    } else {
        alert('please write yes or no');
    }

}


//Call Q1
let human = prompt('am i a human?');
Q1(human);

//Call Q2
let lion = prompt('do lions fly?');
Q2(lion);

//Call Q3
let education = prompt('do education Computer Science?');
Q3(education);

//Call Q4
let uni = prompt('do my university Amman Arab University?');
Q4(uni);

//Call Q5
let prog = prompt('do I like programming?');
Q5(prog);

//Call Q6
let master = prompt('do I have master degree?');
Q6(master);

//Call Q7
let loveprog = prompt('do I love programming?');
Q7(loveprog);

alert(`you have a score of ${score} /7`);