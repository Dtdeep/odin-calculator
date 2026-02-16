let num1 = "";
let num2 = "";
let operator = "";
const calculatorBody = document.querySelector(".calculator-body");



const add  = (addendOne, addendTwo) => {
    return +addendOne + +addendTwo
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

calculatorBody.addEventListener("click", (event)=>{
    const targetContent = event.target.textContent;
    switch(targetContent){
        case "00":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "1":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "2":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "3":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "4":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "5":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "6":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "7":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "8":
            if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "9":
           if(!operator){
                num1 += targetContent;
                console.log(num1)
            } else{
                num2 += targetContent;
                console.log(num2)
            }
            break;
        case "+":
            operator = "+";
            break;
        case "=":
            console.log(num1, num2, operator)
            if(operator == "+"){
                console.log(add(num1,num2));
                operator = "";
            }
            break;
        
    }
})
