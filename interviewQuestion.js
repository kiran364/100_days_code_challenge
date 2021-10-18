

function sumZero(arr){

    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero(arr));

let i = 0;
let arr = [ -9, -5, -4, 1, 4, 5, 6];
let j = arr.length -1;


function sumZero(arr){
    while(i<j){
        if(arr[i] + arr[j] === 0){
            return [arr[i], arr[j]]
        }else if(arr[i] + arr[j] > 0){
            j--;
        }else{
            i++
        }
    }
}


console.log(sumZero(arr));

let num1 = 0, num2 = 1, nextTerm;
function fib(n){
    for(let i=0; i<n; i++){
        console.log(num2)
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }
}

fib(8);


    for(var i = 0; i<5; i++){
        function abc(num){
            setTimeout(() => {
                console.log(num)
            },num*1000)

        }
        abc(i);
      
    }




for(let i=0; i< 5; i++){
    setTimeout(() => {
        console.log(i)
    },i * 1000)
}


function abc(num){
    return promese = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log(num));
        }, 1000)
    })
}

async function xyz(){
    await abc(1).then(() => console.log('resoleved 1'));
    await abc(2);
    await abc(3);
    await abc(4);
    await abc(5);
    await abc(6);

}

xyz();

let i=0;
function abc(){
    setInterval(() => {
        console.log(++i);
    }, 50)
}

abc();