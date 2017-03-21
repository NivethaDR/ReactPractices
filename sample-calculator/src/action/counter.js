export function addition(number1,number2){
    return{type:'ADDITION',number1,number2}
}
export function subtraction(number1,number2){
    return{type:'SUBTRACTION',number1,number2}
}
export function multiply(number1,number2){
    return{type:'MULTIPLY',number1,number2}
}
export function divide(number1,number2){
    return{type:'DIVIDE',number1,number2}
}