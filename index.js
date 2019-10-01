
function map(src, fn) {
    let newArr = []
    for (let i = 0; i < src.length; i++) {
        const element = fn(src[i])
        newArr.push(element)
     }
     return newArr
}

function reduce(src, cb, starting){
    let s = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      s = cb(src[i], s)
    }
  
    return s;
  }