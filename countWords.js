function WordCount(str) {
  let totalSoFar = 0;
  if(str.length == 0)
    return 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === " ") { // if a space is found in str
      totalSoFar = +1; // add 1 to total so far
    }
    totalSoFar += 1; // add 1 to totalsoFar to account for extra space since 1 space = 2 words
  }
  return totalSoFar;
}

console.log(WordCount("hiiii"));