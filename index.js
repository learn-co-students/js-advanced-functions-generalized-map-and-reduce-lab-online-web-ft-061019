function map(srcArr, fn) {
    let newArr = []
    for (let i = 0; i < srcArr.length; i++) {
       const element = fn(srcArr[i])
       newArr.push(element)
    }
    return newArr     
 }
 
 function reduce(srcArr, fn, start = 0) {
    let t = (!!start ? start : srcArr[0])
 
    let i = (!!start ? 0 : 1) 
 

    console.log("srcArr: ", srcArr)
    console.log("fn: ", fn.toString())
    console.log("start: ", start)
    console.log("t start value: ", t)
 
    for (/*i already declared*/; i < srcArr.length; i++) {
       t = fn(srcArr[i], t)
       console.log("t iteration value: ", t)
    }
 
    return t
 }