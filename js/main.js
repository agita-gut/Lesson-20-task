console.log('------Task 1-----------');
console.log('The natural numbers are:');
for (let i = 1; i < 10; i++) {  
       console.log(i);
     }

console.log('------Task 2-----------');

console.log('Find the first 10 natural numbers:');
console.log('--------------------');
console.log('The natural numbers are:');
let sum = 0;
for(i = 1; i <= 10; i++) {
    sum = sum + i;
    console.log(i);
}

console.log('Sum of first 10 natural numbers:' + sum);



console.log('------Task 3-----------');

console.log('Input a number of terms:');
num1 = 9;
console.log(num1);
console.log('The natural numbers up to ' + num1 + ' terms are');
let sum1 = 0;
for(i = 1; i <= num1; i++) {
    sum1 = sum1 + i;
    console.log(i);
}

console.log('Sum of the natural numbers:' + sum1);


console.log('------Task 5-----------');


let PrimeNum =true;
let num3 = 13;
console.log('Input a number to check prime or not:' + num3);
if (num3 === 1) {
    console.log('This is not prime number.');
}

else if (num3 > 1) {

    for (let i = 2; i < num3; i++) {
        if (num3 % i == 0) {
            PrimeNum = false;
            break;
        }
    }

    if (PrimeNum) {
        console.log(`${num3} is a prime number`);
    } else {
        console.log(`${num3} is a not prime number`);
    }
}

