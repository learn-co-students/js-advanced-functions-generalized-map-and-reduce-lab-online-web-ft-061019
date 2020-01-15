// Add your functions here
function map(src, callback) {
    let array = []

    for (let i = 0; i < src.length; i++) {
        let el = src[i]
        array.push(callback(el))
    }

    return array;
}

function reduce(src, callback, start) {
    let array = (start) ? start : src[0]
    let i = (!!start) ? 0 : 1

    for (; i < src.length; i++) {
        array = callback(src[i], array)
    }
    return array
}
