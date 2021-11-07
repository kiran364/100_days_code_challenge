//even odd using recursion
let evenElement = [];
let oddElement = [];

const isEven = (array) => {
    if(array.length == 0){
        return 'Array is empty';
    }else if(array[0] % 2 == 0){
        evenElement.push(array[0]);  
    }else{
        oddElement.push(array[0]);
    }
    array.shift();
    isEven(array)
    return([evenElement, oddElement])
}

const result = isEven([5,4,8,3,1,2,10,6]);
console.log(`\n Even element is ${result[0]} \n And Odd element is ${result[1]}`)
