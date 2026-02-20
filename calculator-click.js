let num1 = "";
let num2 = "";
let operator = "";
let answer = "";

const displayDigit = document.querySelector(".display-digit");
const calculatorBody = document.querySelector(".calculator-body");
const body = document.querySelector("body");

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
        case "*":
            return multiply(num1,num2);
   
        case "/":
            return divide(num1,num2);
    }
}

//Here usually the if else is for knowing whether to put the number in num1 or in num2
const calculatorFunction = (content)=>{
    const operatorList = ["/","*","-","+"]
    const isContentNumber = !isNaN(content) || content == ".";

    if(isContentNumber){
        const num1HasDot = content == "." && num1.includes(".") && !operator;
        const num2HasDot = content == "." && num2.includes(".") && operator;
        if(num1HasDot){
            //Do nothing for num1 if it already has a period
        }
        else if(!operator){
            num1 += content;
            displayDigit.textContent = num1;
        } else if(num2HasDot){
            //Do nothing for num2
        }else{
            num2 += content;
            displayDigit.textContent = num2;
            console.log(num2);
        }
    }

    if(operatorList.includes(content)){
        if(operator && num1 && num2){
            answer = parseFloat(operate(operator, num1,num2).toFixed(2));
            num2 = "";
            num1 = answer;
            operator = content;
            displayDigit.textContent = num1;
            //Operate the two numbers and make it as num1 then put an operator
        }else if (!num1 && displayDigit.textContent){
            num1 = displayDigit.textContent;
            operator = content;
            //Clicking an operator will operate the current display as num1
        } else{
            operator = content;
        }
        console.log(operator);
    }

    switch(content){
        case "=":
            if(num1 && num2 && operator){
                answer = parseFloat(operate(operator, num1,num2).toFixed(2));
                operator = "";
                num2 = "";
                num1 =  "";
                displayDigit.textContent = answer;
                console.log(answer, "is the answer");
            }
            break;
        case "CA":
            operator = "";
            num1 = "";
            num2 = "";
            displayDigit.textContent = "";
            break;
        case "DEL":
            if(!num1 && displayDigit.textContent){
                num1 = displayDigit.textContent;
            }
            if(!operator){
                num1 = num1.toString().slice(0,-1);
                displayDigit.textContent = num1;
            } else{
                num2 = num2.toString().slice(0,-1);
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
}

calculatorBody.addEventListener("click", (event)=>{
    const targetContent = event.target.textContent;
    calculatorFunction(targetContent);
});

body.addEventListener("keydown", (event)=>{
    let eventKey = event.key;
    switch(eventKey){
        case "Enter":
            eventKey = "=";
            break;
        case "Backspace":
            eventKey = "DEL"
    }
    calculatorFunction(eventKey);
});