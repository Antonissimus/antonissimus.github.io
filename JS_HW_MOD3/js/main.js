"use strict"

// Модуль 3
// Задание 1

let arr = [];
// for (let i = 1; i <= 10; i++) arr.push(i);

let showArr = function (arr, num) {

	let text = document.querySelector('#new');
	if (num == null) {
		text.textContent = 'Массив: ' + arr;
	} else {
		text.textContent = 'Значение: ' + arr[num];
	}
}
showArr(arr);

let OKBtn = document.querySelector('#OK');
OKBtn.addEventListener('click', show);
let pushBtn = document.querySelector('#push');
pushBtn.addEventListener('click', push);
let popBtn = document.querySelector('#pop');
popBtn.addEventListener('click', pop);
let shiftBtn = document.querySelector('#shift');
shiftBtn.addEventListener('click', shift);
let unshiftBtn = document.querySelector('#unshift');
unshiftBtn.addEventListener('click', unshift);

function show() {
	let index = document.querySelector('#index').value;
	let val = document.querySelector('#val').value;
	arr[index] = val;
	showArr(arr);
}

function push() {
	let val = document.querySelector('#val').value;
	arr.push(val);
	showArr(arr);
}

function pop() {
	arr.pop();
	showArr(arr);
}

function unshift() {
	let val = document.querySelector('#val').value;
	arr.unshift(val);
	showArr(arr);
}

function shift() {
	arr.shift();
	showArr(arr);
}