'use strict';
function calculateVolumeAndArea(sum) {
    let result
    if (typeof sum != 'number' || sum <= 0 || !Number.isInteger(sum)) {
        return 'При вычислении произошла ошибка'
    }else{
        for (let i = 1; i <= 1; i++){
            console.log(`Объем куба: ${Math.pow(sum, 3)}, площадь всей поверхности: ${6 * Math.pow(sum, 2)}`)
            return `Объем куба: ${Math.pow(sum, 3)}, площадь всей поверхности: ${6 * Math.pow(sum, 2)}`
        }
    }
}
calculateVolumeAndArea(15)

// --------------------------------------------------------

function getCoupeNumber(num) {
    if (typeof (num) != 'number' || num < 0 || !Number.isInteger(num)){
        console.log("Ошибка. Проверьте правильность введенного номера места")
        return "Ошибка. Проверьте правильность введенного номера места"
    }
    if (num === 0 || num > 36){
        console.log("Таких мест в вагоне не существует")
        return "Таких мест в вагоне не существует"
    }
    console.log(`Ваш вагон: ${Math.ceil(num / 4)}`)
    return Math.ceil(num / 4)
}
getCoupeNumber(25)

// ------------------------------------------------------------------

function getTimeFromMinutes(gadTime) {
    const hours = Math.floor(gadTime / 60),
          minutes = gadTime % 60;
    if (typeof(gadTime) != 'number' || gadTime < 0 || !Number.isInteger(gadTime)){
        // return "Ошибка, проверьте данные"
        console.log("Ошибка, проверьте данные")
    }
    let hourStr = ''
    switch (hours){
        case 0:
            hourStr = 'часов'
            break;
        case 1:
            hourStr = 'час'
            break;
        case 2:
        case 3:
        case 4:
            hourStr = 'часа'
            break;
        default:
            hourStr = 'часов'
    }
    console.log(`Это ${hours} ${hourStr} и ${minutes} минут`)
}
getTimeFromMinutes(50)


//---------------------------------------
function findMaxNumber(a,b,c,d) {
    if (typeof (a) != 'number' ||
        typeof (b) != 'number' ||
        typeof (c) != 'number' ||
        typeof (d) != 'number'){
        console.log('0')}
    else{
        console.log(Math.max(a,b,c,d))
    }
}
findMaxNumber(6, 6.5, -15, 111)

// -------------------

function fib(n) {
    let a = 0;
    let b = 1;
    let fibNum = ''
    for (let i = 0; i < n; i++) {
        if (typeof(n) != 'number'){
            console.log('""')
            return ""
        }
        let c = a + b;
            a = b;
            b = c;
            fibNum += b
    }
    console.log(fibNum)
    return fibNum;
}
fib(7)