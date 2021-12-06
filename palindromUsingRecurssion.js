const ispalindrom = (front, reare) => {
    if(front != reare)
        return true;

}

const palindrom  = (string) => {
    if(string.length == 1 || string.length == 0){
        return 'string is palindrom';
    }
    let front, reare;
    front = string.shift();
    reare = string.pop();
    if(ispalindrom(front, reare)){
        return 'string is not palindrom';
    }else{
       return palindrom(string)
    }    
}
let string = "maddmam"
let stringArray = string.split("");
console.log(palindrom(stringArray));