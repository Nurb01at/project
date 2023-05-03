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
    }
};

console.log(Object.keys(options).length);

// console.log(options["colors"]["border"])

// delete options.name;

// console.log(options)

let counter = 0;
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