'use strict';

const find = (selector) => document.querySelectorAll(selector);
const rand = (from, to) => from + Math.floor(Math.random() * (to - from + 1));


let taskVal = 0;
let answerVal = 0;
let counterVal = 0;
let timeVal = 0;

const taskEl = find('#task')[0];
const answerEl = find('#answer')[0];
const counterEl = find('#counter')[0];
const timeEl = find('#time')[0];

const generateTask = () => {
    const a = rand(2, 9);
    const b = rand(2, 9);

    taskVal = '' + (a * b);
    taskEl.textContent = a + ' * ' + b + ' = ';

    answerEl.value = '';
    answerEl.focus();

    counterEl.textContent = '#' + ++counterVal;
};

const checkAnswerLength = (event) => {
    if (answerEl.value.length >= 2) {
        event.preventDefault();
        return;
    }
};

const checkAnswer = (event) => {
    answerVal = answerEl.value;

    console.log(taskVal, answerVal);

    if (taskVal === answerVal) {
        generateTask();
    }
};

const timer = setInterval(() => {
    ++timeVal;

    const minutes = Math.floor(timeVal / 60);
    const seconds = timeVal - minutes * 60;

    const minutesVal = ('' + minutes).length < 2 ? '0' + minutes : minutes;
    const secondsVal = ('' + seconds).length < 2 ? '0' + seconds : seconds;

    timeEl.textContent = minutesVal + ':' + secondsVal;
}, 1000);

answerEl.onkeypress = checkAnswerLength;
answerEl.onkeyup = checkAnswer;

generateTask();
