function add(num1, num2) {return num1 + num2 };
function substract(num1, num2) {return num1 - num2 };
function multiply(num1, num2) {return num1 * num2 };
function divide(num1, num2) {return num1 / num2 };

function operate(x, op, y){
    x = +x
    y = +y
    if (op === '+') {
        return add(x, y);
    } else if (op === '-') {
        return substract(x, y);
    } else if (op === '*') {
        return multiply(x, y);
    } else if (op === '/') {
        return divide(x, y);
    }
}

function clearMainDisplay(){
    display.textContent = ''
}

function clearAll(){
    display.textContent = ''
    secondaryDisplay.textContent = ''
    num1 = undefined
    num2 = undefined
    op = undefined
}

const clearButton = document.getElementById('clear')
clearButton.addEventListener("mouseup", clearAll);
const keylog = document.querySelector("body");
const display = document.getElementById('display')
const secondaryDisplay = document.getElementById('secondaryDisplay')
keylog.addEventListener("keypress", logKey);


let num1 = undefined;
let num2 = undefined;
let op = undefined;
let result = undefined;

function logKey(e) {
    const regEx = /[0-9]/g;

    if (regEx.test(e.key) == true){
        display.textContent += `${e.key}`;

        
    } else if (['+', '-', '*', '/', 'Enter'].includes(e.key)) {

        if (num1 === undefined) {
            num1 = display.innerHTML;
        } else if (num1 != undefined){
            num2 = display.innerHTML;
        }        
        
        if (op === undefined){
            op = e.key;
            clearMainDisplay();
            secondaryDisplay.textContent = `${num1} ${op}`
        } else if (num1 != undefined && num2 != undefined) {
            clearMainDisplay();
            result = operate(num1, op, num2);
            display.textContent = result

            if(e.key == 'Enter'){
                secondaryDisplay.textContent = `${num1} ${op} ${num2} =`
                op  = undefined
                num1 = undefined
                num2 = undefined
            } else {
                num1 = result
                op = e.key;
                secondaryDisplay.textContent = `${num1} ${op}`
                clearMainDisplay();
            }
            num2 = undefined
        }  
        
     }
    
};