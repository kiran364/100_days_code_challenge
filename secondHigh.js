function secondHigh(arr) {
    let max = [];
    for(let i = 0; i <arr.length; i++) {
        for(let j=1; j<arr.length; j++) {
                if(arr[i] < arr[j]) {
                max.push(arr[j]);
            }
        }
    }
    return max[max.length-2];
  }

const arr = [1,2,3,4,5,6,7,2];
console.log(secondHigh(arr));