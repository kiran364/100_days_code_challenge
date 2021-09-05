
// Replace "l" with "X"
// 'hello world' ---> 'heXXo worXd'

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