//clouser :- function along with its lecxical scope bunddel together forms a clouser

var firstName = 'kiran';
function outerFunction(lastName) {
    function ineerFunction(){
        console.log(`my name is ${firstName} and my sirname is ${lastName}`)
    }
    ineerFunction();
}

outerFunction('kumawat');