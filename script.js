function operate(x, op, y){
    x = +x
    y = +y
    if (op === '+') {
        return x + y;
    } else if (op === '-') {
        return x - y;
    } else if (op === '*') {
        return x * y;
    } else if (op === '/') {
        return x / y;
    }
}

const keylog = document.querySelector("body");
const display = document.getElementById('display')
keylog.addEventListener("keypress", logKey);

let num1;
let num2;
let op;
let result;

function logKey(e) {
    const regEx = /[0-9]/g;

    if (regEx.test(e.key) == true){
        display.textContent += `${e.key}`;
    } else if (e.key == '+'|| e.key == '-'|| e.key == '*'|| e.key == '/' || e.key == 'Enter') {
        if (num1 === undefined) {
            num1 = display.innerHTML;
            console.log(num1)
        } else if (num1 != undefined){
            num2 = display.innerHTML;
            console.log(num2)
        }
        
        if (e.key == 'Enter') {
            result = operate(num1, op, num2);
            display.textContent = result
            num1 = result
        } else{
            op = e.key;
            console.log(op)
            clear();
        }
        
    }
    
};

const clearButton = document.getElementById('clear')
clearButton.addEventListener("click", clear);

function clear(){
    display.textContent = ''
}


