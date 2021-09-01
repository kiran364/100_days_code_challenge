function secondHigh(arr) {
    let temp;
    for(let i = 0; i <arr.length; i++) {
        for(let j=i+1; j<arr.length; j++) {
            if(arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const arr = [11,2,3,4,5,6,7];
var result = secondHigh(arr);
console.log(result)
console.log(result[result.length - 2]);