// Add your functions here
function map(someArray, callback){
    let newArray = []
    for (let i = 0; i < someArray.length; i++){
        let element = array[i]
        newArray.push(callback(element))
    }
    return newArray
}

function reduce(array, callback, start){
    let cup = (!!start) ? start : array[0]
    let i = (!!start) ? 0 : 1
    for (; i < array.length; i++) {
        cup = callback(array[i], cup)
    }
    return cup
}