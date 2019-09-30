// // Add your functions here
// // Your code here
// function mapToNegativize(sourceArray) {
//    let newArr = []
//    for (const num in sourceArray) {
//       const multiplied = sourceArray[num] * -1
//       newArr.push(multiplied)
//    }
//    return newArr
// }

// function mapToNoChange(sourceArray) {
//    let newArr = [...sourceArray]
//    return newArr
// }

// function mapToDouble(sourceArray) {
//    let newArr = []
//    for (const num in sourceArray) {
//       const doubled = sourceArray[num] * 2
//       newArr.push(doubled)
//    }
//    return newArr
// }

// function mapToSquare(sourceArray) {
//    let newArr = []
//    for (const num in sourceArray) {
//       const squared = sourceArray[num] ** 2
//       newArr.push(squared)
//    }
//    return newArr
// }

// function reduceToTotal(sourceArray, startingPoint = 0) {
//    let finalTotal = startingPoint
//    sourceArray.forEach(item => {
//       finalTotal = finalTotal + item
//    });
//    return finalTotal
// }

// function reduceToAllTrue(sourceArray) {
//    let allTrue = true 
//    sourceArray.forEach(item => {
//       if (!!item === false) {
//          allTrue = false
//       }
//    })
//    return allTrue
// }

// function reduceToAnyTrue(sourceArray) {
//    let anyTrue = false
//    sourceArray.forEach(item => {
//       if (!!item === true) {
//          anyTrue = true
//       }
//    })
//    return anyTrue
// }
// Above is to be used as a reference. 

function map(srcArr, fn) {
   let newArr = []
   for (let i = 0; i < srcArr.length; i++) {
      const element = fn(srcArr[i])
      newArr.push(element)
   }
   return newArr     
}

function reduce(srcArr, fn, start = 0) {  
   // this tests to see if the start value is set to something truthy (something besides 0), if it is, the value of t is whatever was passed in to start param)  Otherwise, if it 0, then set t variable to the value of the first item in the srcArr.  
   let t = (!!start ? start : srcArr[0])
   //When t goes false above, t becomes the first item in the srcArr, thus so we count correctly, we need to set our counter variable i to begin 1 "iteration in" so that we don't add the same value twice if we are just simply totallying up the value of the array. 
   let i = (!!start ? 0 : 1) 

   //this is so that I can see what all things are getting passed into my custom reduce fn during testing. 
   console.log("srcArr: ", srcArr)
   console.log("fn: ", fn.toString())
   console.log("start: ", start)
   console.log("t start value: ", t)

   for (/*i already declared*/; i < srcArr.length; i++) {
      t = fn(srcArr[i], t)
      //this allows me to see the value of t as the for loop iterates.  
      console.log("t iteration value: ", t)
   }

   //I had originally tried doing this with a forEach but found that this doesn't work. 
   // srcArr.forEach(element => {
   //    t = fn(element, t)
   // });

   return t
}
