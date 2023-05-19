const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    const oldArray = arr
    let result = `Семья состоит из: `
    if(oldArray.length == 0){
        console.log(`Семья пуста`)
        return `Семья пуста`
    }else{
        result += oldArray.join(' ')
    }
    console.log(result)
    return result
}
showFamily(family)

// ---------------------------------------------------

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    const oldArray = arr
    oldArray.forEach(function(item, i){
        console.log(`${i+1}: ${item.toLowerCase()} `)
    });
}
standardizeStrings(favoriteCities)