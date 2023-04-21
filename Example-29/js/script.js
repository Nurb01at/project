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

function getTimeFromMinutes(isTime) {
    let num = ''
    if (typeof (isTime) != 'number' || isTime < 0 || !Number.isInteger(isTime) || isTime > 600){
        console.log("Ошибка, проверьте данные")
        return "Ошибка, проверьте данные"
    }
    num += isTime.setHours()
    console.log(num)
}
getTimeFromMinutes(150)

let n = 150
getHours(n)
console.log(n)