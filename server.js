// High order function example
var redius = [3,4,8,6];

const area = (redius) => {
    return Math.PI * redius * redius;
}

const circum = (redius) => {
    return 2 * Math.PI * redius;
}

const diameter = (redius) => {
    return 2 * redius;
}

const calculate = (redius, logic) => {
    const output = [];
    for(let i=0; i<redius.length; i++) {
        output.push(logic(redius[i]));
    }
    return output;
}

console.log(calculate(redius, area));
console.log(calculate(redius, diameter));
console.log(calculate(redius, circum));


