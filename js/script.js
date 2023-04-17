"use strict";
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const obj = {
//     name: 'John',
//     age: '25',
//     city: 'Astana'
// }
// console.log(obj['name'])

// let arr = ['assasa','asdasd', 5, {}, []]
// console.log(arr[4])


// alert('Hello');

// const result = confirm("Are you here?");
// console.log(result)
//---------------------Функция-----------------------------------------------------------------------

//Глобальная
let num = 20
function showFirstMessage(text) {
    //Локальная
    console.log(text)
    num = 13
}

showFirstMessage('Hello World!')
console.log(num)

//------------------------------------------

function calc(a, b){
    return (a + b)
}

console.log(calc(5, 4))
console.log(calc(2, 7))
console.log(calc(9, 8))

//------------------------------------------

function ret () {
    let num = 50




    return num;
}

const anotherNum = ret()
console.log(anotherNum)

//------------------------------------------------
const logger = function () {
    console.log('Hello!');
};
logger();

//--------------------------------------------

const calc = (a, b) => {
    console.log('Hi')
    return a + b
}
calc()

//--------------------------------------------

const usdCurr = 28
// const eurCurr = 32
const discount = 0.9

function convert (amount, curr) {
    // console.log(curr * amount)
    return curr * amount
}

function promotion (result) {
    console.log(result * discount)
}

// convert(500, usdCurr)
// convert(500, eurCurr)

promotion(convert(500, usdCurr))

//-------------------------------------------
function test () {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}
test();

//================================================

function doNothing(){};
console.log(doNothing() === undefined);

//===============================================

function sayHello (text) {
    return 'Привет,' + text
    // console.log('Привет, ' + text + '!')
}
sayHello('Антон')

//===============================================

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1]
    // console.log([num - 1, num, num + 1])
}
returnNeighboringNumbers(5)

//============================

function getMathResult(num,times) {
    if (typeof(times) !== 'number' || times <= 0){
        return num
        // console.log(num)
    }
    let str = ''
    for (let i = 1; i <= times; i++){
        if (i === times){
            str += `${num * i}`
        }
        else{
            str += `${num * i}---`
        }
    }
    return str
    // console.log(str)
}
getMathResult(5, 3)