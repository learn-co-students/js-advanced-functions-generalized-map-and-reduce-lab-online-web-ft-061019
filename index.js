// Add your functions here
function map(sourceArray, callback){
    let newArray = []

    for(let i = 0; i < sourceArray.length; i++){
        let element = sourceArray[i]
        newArray.push(callback(element))
    }
    return newArray
}


function reduce(sourceArray, callback, startingPoint){
    let newArray = (startingPoint) ? startingPoint : sourceArray[0]
    let i = (startingPoint) ? 0 : 1
    for(; i < sourceArray.length; i++){
        newArray = callback(sourceArray[i], newArray)
    }
    return newArray
}