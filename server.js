//array rotation
function rotation(arr) {
    for(let i=0; i<4; i++) {
        var el = arr.shift();
        arr.push(el);    
        console.log(arr);  
    }
}
var arr = [1,2,3,4];
rotation(arr);
