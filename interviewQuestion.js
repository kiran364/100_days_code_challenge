

// function sumZero(arr){

//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length;j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]];
//             }
//         }
//     }
// }

// console.log(sumZero(arr));

// let i = 0;
// let arr = [ -9, -5, -4, 1, 4, 5, 6];
// let j = arr.length -1;


// function sumZero(arr){
//     while(i<j){
//         if(arr[i] + arr[j] === 0){
//             return [arr[i], arr[j]]
//         }else if(arr[i] + arr[j] > 0){
//             j--;
//         }else{
//             i++
//         }
//     }
// }


// console.log(sumZero(arr));

// let num1 = 0, num2 = 1, nextTerm;
// function fib(n){
//     for(let i=0; i<n; i++){
//         console.log(num2)
//         nextTerm = num1 + num2;
//         num1 = num2;
//         num2 = nextTerm;
//     }
// }

// fib(8);


//     for(var i = 0; i<5; i++){
//         function abc(num){
//             setTimeout(() => {
//                 console.log(num)
//             },num*1000)

//         }
//         abc(i);
      
//     }




// for(let i=0; i< 5; i++){
//     setTimeout(() => {
//         console.log(i)
//     },i * 1000)
// }


// function abc(num){
//     return promese = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(console.log(num));
//         }, 1000)
//     })
// }

// async function xyz(){
//     await abc(1).then(() => console.log('resoleved 1'));
//     await abc(2);
//     await abc(3);
//     await abc(4);
//     await abc(5);
//     await abc(6);

// }

// xyz();

// let i=0;
// function abc(){
//     setInterval(() => {
//         console.log(++i);
//     }, 50)
// }

// abc();




// string anagram

// const isAnagram = (string1, string2) => {
//     if(string1.length != string2.length){
//         return 'string is not Anagram';
//     }else{
//         let counter = {};
//         for(letters of string1){

//             counter[letters] = (counter[letters] || 0) + 1;
               
//         }
//         for(items of string2){
//             if(!counter[items]){
//                 return 'string is not Anagram'
//             }
//             counter[items]--;
//         }
//         return 'is Anagram';
//     }

// }

// console.log(isAnagram('hello', 'lllhe'));


// unique number count 


// const unique = (array) => {
//     let i = 0;
//     let j = 1;
//     while(j < array.length){
//         if(array[i] == array[j]){
//             j++;
//         }else{
//             i++;
//             array[i] = array[j]
//         }
//     }
//     return i+1;

// }

// console.log('unique number count is ', unique([1, 1, 1, 1, 1, 1, 2, 2, 5, 9, 7]));


// largest sum of consequetive numbers
// [1, 2, 3, 4, 3, 5, 4, 6, 7, 8, 9, 5]

// const largestSum = (array, num) => {
//     let max = 0;
//     for(let i=0; i< (array.length - num) + 1; i++){
//         let temp=0;
//         for(let j=0; j<num; j++){
//             temp = temp + array[i+j];
//             console.log(temp)
//         }
//         if(temp> max){
//             max= temp;
//         }
//     }
//     return max;
// }

// console.log('largest sum is ', largestSum([1, 2, 3, 4, 3, 5, 4, 6, 7, 8, 9, 5], 4));

// const findDuplicate = (array) => {
//     let duplicate = {};
//     let flag = 0;
//     array.forEach(element => {
//         if(duplicate[element]){
//             console.log(element)
//             flag = 1;
//         }else{
//             duplicate[element] = element
//         }
//     });
//     if(flag == 0){
//         console.log('no dupicate elemet in array');
//     }
// }
// findDuplicate([1, 2, 3, 4, 5, 3, 6]);