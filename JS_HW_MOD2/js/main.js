"use strict"

// Задание 1

let ageCalculation = function () {

	let yearOfBirth = document.querySelector('#yearOfBirth').value; // получаем значение инпута
	let actDate = new Date(); // получаем текущий год

	if (isNaN(yearOfBirth)) { // Проверяем введено ли число
		alert('Это не число') // Если нет - выводим сообщение
	} else {

		yearOfBirth = (yearOfBirth.length < 3) ? +yearOfBirth + 2000 : yearOfBirth;

		let age = actDate.getFullYear() - yearOfBirth; // Если да - вичисляем возраст
		if (age < 0) {
			alert('Вы еще не родились !!!')
		} else {
			alert('Вам : ' + age + ' лет.');
		}

	}

}

let ageCalcBtn = document.querySelector('#ageCalc');
ageCalcBtn.addEventListener('click', ageCalculation);

// Задание 2

let whichGreater = function () {
	let num1 = +document.querySelector('.ex2 #number1').value;
	let num2 = +document.querySelector('.ex2 #number2').value;
	debugger
	if (isNaN(num1) || isNaN(num2)) {
		alert('Введите два числа!!');
	} else {
		if (num1 == num2) {
			alert('Числа равны');
		} else if (num1 > num2) {
			alert('Число ' + num1 + ' больше');
		} else {
			alert('Число ' + num2 + ' больше');
		}
	}
}

let whichGreatBtn = document.querySelector('.ex2 #whichGreater');
whichGreatBtn.addEventListener('click', whichGreater);

// Задание 3

let whichEntrance = function () {
	let num = +document.querySelector('.ex3 #appartNum').value;
	let entrance;

	if (isNaN(num)) {
		alert('Введите числовое значение!!');
		return;
	} else {
		if ((num > 0) && (num <= 20)) {
			entrance = 1;
		} else if ((num > 20) && (num <= 64)) {
			entrance = 2;
		} else if ((num > 64) && (num <= 80)) {
			entrance = 3;
		} else entrance = -1;
	}
	if (entrance == -1) {
		alert('В доме нет такой квартиры!!');
		return;
	}
	alert('Квартира ' + num + ' находится в ' + entrance + '-м подъезде.')

}

let whichEntrBtn = document.querySelector('#whichEntrance');
whichEntrBtn.addEventListener('click', whichEntrance);

// Задание 4

let login = function () {
	let name = document.querySelector('.ex4 #userName').value;
	let password = document.querySelector('.ex4 #userPass').value;
	debugger

	if (((name == 'ivan') && (password == '333')) ||
		((name == 'ssss') && (password == '666')) ||
		((name == 'gibs') && (password == '0000'))) {
		alert('Добро пожаловать !!!');
	} else {
		alert('Ошибка ввода.');
	}
}

let loginBtn = document.querySelector('#loginButton');
loginBtn.addEventListener('click', login);

// Задание 5

let whichGreater2 = function () {

	let nums = document.querySelectorAll('.ex5 .number');
	let maxNum = +nums[0].value;
	for (let n = 0; n < nums.length; n++) {
		if (isNaN(nums[n].value)) {
			alert('Вводите только числа!!');
			return;
		}
	}
	for (let i = 0; i < nums.length - 1; i++) {
		if (maxNum < +nums[i + 1].value) {
			maxNum = +nums[i + 1].value;
		}
	}

	alert('Наибольшее чисто: ' + maxNum);
}

let whichGreatBtn2 = document.querySelector('.ex5 #whichGreater2');
whichGreatBtn2.addEventListener('click', whichGreater2);

// Задание 6
let submitBtn1 = document.querySelector('.ex6 .submit');
submitBtn1.addEventListener('click', outputFun);

function outputFun() {
	let arrNum = [];
	for (let i = 0; i <= 101; i++) {
		if (i % 2 == 0) arrNum.push(i);
	}
	alert(arrNum);
}

// Задание 7

let submitBtn2 = document.querySelector('.ex7 .submit');
submitBtn2.addEventListener('click', outputFun2);

function outputFun2() {
	let arrNum = [];
	for (let i = 200; i >= 0; i--) arrNum.push(i);
	alert(arrNum);
}

// Задание 8

let submitBtn3 = document.querySelector('.ex8 .submit');
submitBtn3.addEventListener('click', outputFun3);

function outputFun3() {
	let arrNum = [];
	let sum = 0;
	for (let i = 0; i <= 100; i++) sum += i;
	alert(sum);
}

// Задание 9

let toThePowBtn = document.querySelector('.ex9 #toThePow');
toThePowBtn.addEventListener('click', toPow);

function toPow() {
	let base = document.querySelector('.ex9 #base').value;
	let exp = document.querySelector('.ex9 #exp').value;
	let ans = 1;
	if (isNaN(base) || isNaN(exp)) {
		alert('Введите числовые значения!!');
		return;
	} else {
		for (let i = 0; i < exp; i++) ans *= base;
		alert(base + ' в степени ' + exp + ' равно: ' + ans);
	}
	// alert(base + ' в степени ' + exp + ' равно: ' + Math.pow(base, exp));
}

// Задание 10

let getResultBtn = document.querySelector('.ex10 #getResult');
getResultBtn.addEventListener('click', printTable);

function printTable() {
	let result = [];
	for (let i = 0; i <= 9; i++) {
		result[i] = '\n7 * ' + i + ' = ' + 7 * i;
	}
	alert(result);
}

// Задание 11

let getResultBtn2 = document.querySelector('.ex11 #getResult2');
getResultBtn2.addEventListener('click', printTable2);

function printTable2() {
	let result = 1;
	for (let i = 1; i <= 50; i++) {
		result *= i;
	}
	alert('Произведение чисел от 1 до 50: ' + result);
}

// Задание 12
let printTable3 = function () {
	let text = document.querySelector('#symbolTable');
	let result = [];
	for (let i = 0; i <= 1000; i++) {
		result[i] = "&#" + (1000 + i) + ';\n'
	}
	text.innerHTML = result;
}

let getSimboltableBtn = document.querySelector('.ex12 #getSymbolTable');
getSimboltableBtn.addEventListener('click', printTable3);