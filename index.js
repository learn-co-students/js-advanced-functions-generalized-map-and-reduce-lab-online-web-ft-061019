// Add your functions here
function map(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++){
        let element = array[i]
        newArray.push(callback(element))
    }
    return newArray
}

function reduce(array, callback, start) {
    let truthy = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1

    for (; i < array.length; i++) {
        truthy = callback(array[i], truthy)
    }
    return truthy
}