const num1 = 0;
const num2 = 0;
const operator = "";


const add  = (addendOne, addendTwo) => {
    return addendOne + addendTwo
}

const subtract = (minuend, subrahend) =>{
    return minuend - subrahend;
}

const multiply = (multiplicand, multiplier) => {
    return multiplicand * multiplier;
}

const divide = (dividend, divisor) =>{
    return dividend / divisor;
}

const operate = (operator,num1,num2)=>{
    switch(operator){
        case "+":
            add(num1,num2);
            break;
        case "-":
            subtract(num1,num2);
            break;
        case "x":
            multiply(num1,num2);
            break;
        case "/":
            divide(num1,num2);
            break;
    }
}
