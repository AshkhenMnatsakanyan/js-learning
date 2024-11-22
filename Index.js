// homework 1

var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");
var operation = prompt("Choose the operation (+, -, *, /):");
var output;

switch(operation) {
    case '+': output(num1 + num2);break;
    case '-': output(num1 - num2);break;
    case '*': output(num1 * num2);break;
    case '/': output(num1 / num2);break;
    case '/':
        if (num !== 0) {
            console.log(num1/num2)
        } else console.log('Zero value')
}

console.log(output)


// homework 2

var day = prompt('Please input day');
day = day.toLowerCase();

var translatedDay;
switch(day) {
    case 'monday': translatedDay = 'Երկուշաբթի';break;
    default: translatedDay = 'wrong day'
}

    console.log(translatedDay);



// homework 3

var month = +prompt('please enter month');

if (month === 12 || month === 1 || month === 2) {
    output = 'Winter'
} else if (month === 3 || month === 4 || month === 5) {
    output = 'Winter'
} else {
    output = 'Wrong month'
}

console.log(output, 'output')

    

// homework 3

var n = 2;

if (n % 2 === 0) {
    console.log('Even')
} else {
    console.log('Odd')
}




//// let var

if (true) {
    var x = 10;
}

console.log(x)



if (true) {
    let x = 10;
}

console.log(x)