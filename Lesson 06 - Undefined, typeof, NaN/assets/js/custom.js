var number_one = 100,
    number_two = 45,
    result;

if(typeof result === 'undefined') {
    result = number_one + number_two;
    console.log('Result was undefined. Result now is: ' + result);
}

number_one = '100F2932';
number_two = '45';

if(isNaN(number_one)) {
    result = parseInt(number_one) - parseInt(number_two);
    console.log('Number one was not a number(NaN). Result now is: ' + result);
}