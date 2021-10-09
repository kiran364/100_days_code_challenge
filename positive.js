let array = [-9, 4, -10, 15, 19, -8, -2, 3, 3, 9, -15, 10, -20];
let len = array.length;

function number(arr, len) {
    for(let i = 0; i<len; i++){
        if(arr[i] > 0){
            for(let j= 0; j<arr.length; j++){
                if(Math.sign(arr[j]) == -1){
                    if(Math.sign(arr[i]) == 1 &&  Math.sign(arr[j]) == -1){
                        if(arr[i] == Math.abs(arr[j])){
    
                            console.log(arr[i], arr[j])
                        }
                        
                    }
                    
                }
    
            }
            
        }
    
    }

}

number(array, len);
