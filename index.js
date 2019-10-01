
function map(src, fn) {
    let newArr = []
    for (let i = 0; i < src.length; i++) {
        const element = fn(src[i])
        newArr.push(element)
     }
     return newArr
}