// Add your functions here
function map(array, func){
    return array.map(func)
}

function reduce(array, func, initial){
    if (!!initial == false){
        initial = array.shift();
    }
    return array.reduce(func, initial)
}