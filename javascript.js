$('document').ready(function(){
    alert('yay the document is ready!')
    $('.calc_btn.num').click(function (){
        var value = $(this).data('val');
        alert('Yay we got a click on number ' + value);
    });

    $('.calc_btn.operator').click(function (){
        var value = $(this).data('val');
        alert('Yay we got a click on operator ' + value);
    });
});

// function add(number1, number2) {
//     sum = number1 + number2
//     return sum
// };

// function multiply(number1, number2) {
//     product = number1 * number2
//     return product
// };

// function divide(number1, number2) {
//     quotient = number1 / number2
//     return quotient
// };

// function subtract(number1, number2) {
//     difference = number1 - number2
//     return difference
// };


