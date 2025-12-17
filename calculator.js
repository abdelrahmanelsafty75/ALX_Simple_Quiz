function add(n1,n2){
    return n1 + n2;
}
function subtract(n1,n2){
    return n1 - n2;
}   
function multiply(n1,n2){
    return n1 * n2;
}
function divide(n1,n2){
    return n1 / n2;
}
document.getElementById('add').addEventListener('click', function() {
    const n1 = parseFloat(document.getElementById('number1').value) || 0;
    const n2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(n1, n2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('subtract').addEventListener('click', function() {
    const n1 = parseFloat(document.getElementById('number1').value) || 0;
    const n2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(n1, n2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('multiply').addEventListener('click', function() {
    const n1 = parseFloat(document.getElementById('number1').value) || 0;
    const n2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(n1, n2);
    document.getElementById('calculation-result').textContent = result;
});

document.getElementById('divide').addEventListener('click', function() {
    const n1 = parseFloat(document.getElementById('number1').value) || 0;
    const n2 = parseFloat(document.getElementById('number2').value) || 0;
    
    let result = divide(n1, n2); 
    if (n2 === 0) {
        result = "Can't divide by zero!";
    }
    document.getElementById('calculation-result').textContent = result;
});