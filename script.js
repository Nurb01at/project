/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

//========================================

const str = "test"

console.log(str[2] = 'd')
console.log(str.toUpperCase())

console.log(str.toLowerCase())

// --------------------------------

const fruit = "Some fruit"

console.log(fruit.indexOf("f"))

// ------------------------------

const logg = "Hello World!"

console.log(logg.slice(6, 11))

console.log(logg.substring(6, 11))

console.log(logg.substr(6, 5))

// ----------------------------
const  num = 12.2
console.log(Math.round(num))

const test = "12.2px"
console.log(parseInt(test))

console.log(parseFloat(test))
// =================================================== callback

function first(){
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}
function second(){
    console.log(2)
}

first();
second();
// -----------------------------------------

function learnJS(lang, callback){
    console.log(`Я учу: ${lang}`);
    callback();
}

function done(){
    console.log('Я прошел этот урок!')
}
// -------------------------
learnJS('JavaScript', done)
// ---------------|анонимное функция|----
learnJS('JavaScript', function(){
    console.log('Я прошел этот урок!')
});

// =================================================

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};
options.makeTest()

const {border, bg} = options.colors;
console.log(border);

// console.log(Object.keys(options).length); // количество элементов

// console.log(options["colors"]["border"])

// delete options.name;

// console.log(options)

let counter = 0; // счетчик
for (let key in options){
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
            // counter++;
        }
    }
        else {
            console.log(`Свойство ${key} имеет значение ${options[key]}`)
            counter++;
    }
}
console.log(counter)

// =========================массивы
const arr = [5, 4, 8, 15, 2]
arr.sort(compareNum)
console.log(arr)

function compareNum(a, b) {
    return a - b
}

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr)

arr.forEach(function(item, i, arr){
    console.log(`${i}: ${item} внутри массива ${arr}`)
});

// arr.pop()
// arr.push(10)

// console.log(arr)

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(let value of arr){
//     console.log(value)
// }

const str = prompt("", "")
const products = str.split(", ")
products.sort()
console.log(products.join(', '))
// ================================================ Передача по ссылке

let a = 5,
    b = a;
b = b + 5

console.log(a);
console.log(b)

const obj = {
    a: 5,
    b: 1
}

const copy = obj;

copy.a = 10

console.log(obj)
console.log(copy)
// ----------------------

function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key]
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    } 
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 20

console.log(newNumbers)
console.log(numbers)

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add))

const clone = Object.assign({}, add)

clone.d = 25

console.log(add)
console.log(clone)
// ------------------------------------

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdasdasdas';
console.log(newArray);
console.log(oldArray);
// ----------------------------

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 6];

log(...num);

const array = ["a", "b"];

const newArray = [...array];

const q = {
    one: 1,
    two: 2
}

const newObj = {...q}
console.log(newObj)