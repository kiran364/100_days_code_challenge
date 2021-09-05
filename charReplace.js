
// Replace "w" with "v"
// 'hii i am web dewloper' ---> 'hii i am veb devloper'

function replaceChar(inputStr, replaceThis, withThis) {
    let retVal = [];
    for (let i = 0; i < inputStr.length; i++) {
      if (inputStr[i] === replaceThis) {
          retVal.push(withThis)
      }
      else {
        retVal.push(inputStr[i])
      }
   }
  return retVal.join('')
}

console.log(replaceChar("hii i am web dewloper", "w", "v"));