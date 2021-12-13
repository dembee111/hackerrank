function rotLeft(a, d) {
  let initialArray = a
  let isBuffer;
    // Write your code here
   for(let i = 0; i < d; i++){
     isBuffer = initialArray[0]
     initialArray.shift()
     initialArray.push(isBuffer)
   }
  return initialArray;
}

let arr = [1, 2, 3, 4, 5]

console.log(rotLeft(arr, 4))
      


