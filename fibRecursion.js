// Fibonacy using Recursion
let n1 = 0,n2 = 1,nextTerm = 0;
const fibRecursion = (num) => {
    if(n2 > num){
        return;
    }else{
        console.log(n2);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        fibRecursion(num)
    }

}

fibRecursion(8);