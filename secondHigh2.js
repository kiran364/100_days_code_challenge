const arr = [101, 101, 1, 24, 5, 15 ,25 , 45, 66, 88, 98, 101, 98, 1];

const secondLarge = (array) => {
    let firstLarge = 0;
    let secondLarge = 0;
    for(let i=0; i<array.length; i++){
        if(firstLarge < array[i]){
            secondLarge = firstLarge;
            firstLarge = array[i];
        }else if(array[i] > secondLarge && array[i] != firstLarge){
            secondLarge = array[i];
        }
    }
    return secondLarge;
}
console.log(secondLarge(arr));