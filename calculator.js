let num1 = "";
let num2 = "";
let operator = "";
let answer = "";

const displayDigit = document.querySelector(".display-digit");
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
    if(divisor == 0){
        alert("Cannot divide by 0 bro")
    }else{
        return dividend / divisor;
    }
    
}

const operate = (operator,num1,num2)=>{
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "x":
            return multiply(num1,num2);
   
        case "/":
            return divide(num1,num2);
    }
}

calculatorBody.addEventListener("click", (event)=>{
    const targetContent = event.target.textContent;
    const targetClass = event.target.className;
    if(targetClass == "number"){

        if(targetContent == "." && num1.includes(".") && !operator){
        }
        else if(!operator){
            num1 += targetContent;
            displayDigit.textContent = num1;
            console.log(num1);
        } else if(targetContent == "." && num2.includes(".") && operator){
        }else{
            num2 += targetContent;
            displayDigit.textContent = num2;
            console.log(num2);
        }
    }

    if(targetClass == "operator"){
        if(operator && num1 && num2){
            answer = operate(operator, num1,num2);
            num2 = "";
            num1 = parseFloat(answer.toFixed(2));
            operator = targetContent;
            displayDigit.textContent = num1;
        }else if (!num1 && displayDigit.textContent){
            num1 = displayDigit.textContent;
            operator = targetContent;
        } else{
            operator = targetContent;
        }
        console.log(operator);
    }

    switch(targetContent){
        case "=":
            if(num1 && num2 && operator){
                console.log(operator, num1, num2)
                answer = operate(operator, num1,num2);
                console.log(parseFloat(answer.toFixed(2)));
                operator = "";
                num2 = "";
                num1 =  "";
                displayDigit.textContent = parseFloat(answer.toFixed(2));
            }
            break;
        case "CA":
            operator = "";
            num1 = "";
            num2 = "";
            answer = "";
            displayDigit.textContent = "";
            break;
        case "DEL":
            if(!operator){
                num1 = num1.slice(0,-1);
                displayDigit.textContent = num1;
            } else{
                num2 = num2.slice(0,-1);
                displayDigit.textContent = num2;
            }
            break;
        case "ANS":
            if(!operator){
                num1 = answer;
                displayDigit.textContent = num1;
                console.log(num1);
            } else{
                num2 = answer;
                displayDigit.textContent = num2;
                console.log(num2);
            }
            break;
        case "ϖ":
            if(!operator){
                num1 = 3.14;
                displayDigit.textContent = num1;
                console.log(num1);
            } else{
                num2 = 3.14;
                displayDigit.textContent = num2;
                console.log(num2);
            }
    }
})


//after the 