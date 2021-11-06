//sorting using recursion


const isSort = (arr) => {
    for(let i=0; i<arr.length;i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

let i=0;
let j=1;
const sort = (array) => {
    if(isSort(array)){
        return array;
    }else if(array[i] > array[j]){
        let temp;
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i=0;
        j=1;
    }else{
        i++;
        j++;
    }
    return sort(array);
}

console.log(sort([5,4,8,3,1,2,10,6]));