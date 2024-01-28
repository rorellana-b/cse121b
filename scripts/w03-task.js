/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2){
    return number1 + number2;
}
function addNumbers(){
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(addNumber1, addNumber2);
};

document.getElementById("addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2){
    return number1 - number2
}

function subtractNumbers(){
    let number1 = Number(document.getElementById("subtract1").value);
    let number2 = Number(document.getElementById("subtract2").value);

    document.getElementById("difference").value = subtract (number1,number2);
};

document.getElementById("subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (x,y) => x*y;

const multiplyNumbers = () => {
    let factor1 = parseFloat(document.getElementById("factor1").value);
    let factor2 = parseFloat(document.getElementById("factor2").value);

    let product = multiply(factor1, factor2);

    document.getElementById("product").value = product.toFixed(2);
};

document.getElementById("multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */
const divide = (x,y) => x/y;

const divideNumbers = () => {
    let dividend = parseFloat(document.getElementById("dividend").value);
    let divisor = parseFloat(document.getElementById("divisor").value);
    let quotient = divide(dividend,divisor);
    document.getElementById("quotient").value = quotient.toFixed(2);
};

document.getElementById("divideNumbers").addEventListener("click", divideNumbers)

/* Decision Structure */
// initialize varibales 
let total = 0;

function getTotal() {

    // input 
    let subtotal = parseFloat(document.getElementById("subtotal").value);

    //processing
    if (document.getElementById("member").checked) {
        total = subtotal - subtotal * 0.2;
    } else {
        total = subtotal;
    }
    //output 
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;

}

document.getElementById("getTotal").addEventListener("click", getTotal);

/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter( number => number % 2 != 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter( number => number % 2 === 0);

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").innerHTML = numbersArray.map( number => number * 2);

/* Output Sum of Multiplied by 2 Array */
const newArray = numbersArray.map( number => number * 2);

document.querySelector("#sumOfMultiplied").innerHTML = newArray.reduce((sum, number) => sum + number); 
 
