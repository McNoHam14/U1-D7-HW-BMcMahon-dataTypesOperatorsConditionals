console.log("Assignment")

console.log("EX:", 1);

console.log("numbers, strings, boolean, null & undefined are the 5 main data types in JS");

console.log("EX:", 2);

console.log("a variable is a store of value");


console.log("EX:", 3);

let a = 12 + 20;
console.log(a);


console.log("EX:", 4);

let x = 12;
console.log(x);


console.log("EX:", 5);

let name = "John Doe";
console.log(name);


console.log("EX:", 6);

let y = x - 12;
console.log(y);


console.log("EX:", 7);

let name1 = "john";
let name2 = "John";
if (name1 !== name2) {
    console.log("The name's do not match");
}

if (name1.toLowerCase === name2.toLowerCase) {
    console.log("The name's now match");
}


console.log("EX:", 8);
 
x = 5;
if (5 === 5) {
    x = "five";
}
console.log(x);


console.log("EX:", 9);

// condition ? exprIfTrue : exprIfFalse

let score = 10 > 20 ? "truthy" : "falsy";
console.log(score);


console.log("Assignment PT2")

console.log("EX:", 1);

// let isMale = "male";
let isMale = false;

let gender = isMale ? "male" : "female";

console.log(gender);


console.log("EX:", 2);

let b = 4;
let c = 5;

if ((b === 8) || (c === 8) || (b + c ===8)) {
    console.log("equals 8")
}
else (console.log("not equal to 8"))


console.log("EX:", 3);

let result = "This is " + "a string";
console.log(result);


console.log("EX:", 4);

let num1 = 10;
let num2 = 44;
let num3 = 20;
let largeNum;
let midNum;
let smallNum;

if (num2 > num1) {
    if (num3 > num2) {
        largeNum = num3;
        midNum = num2;
        smallNum = num1;
    } else {
        largeNum = num2;
        if (num3 > num1) {
            midNum = num3;
            smallNum = num1;
        }
        else {
            midNum = num1;
            smallNum = num3;
        }
    } 
} else if (num3 > num1) {
    largeNum = num3;
    midNum = num1;
    smallNum = num2;
} else if (num3 > num2) {
    largeNum = num1;
    midNum = num3;
    smallNum = num2;
} else {
    largeNum = num1;
    midNum = num2;
    smallNum = num3;
}

console.log("num1:", num1, "num2:", num2, "num3:", num3);
console.log("largest:", largeNum, "middle:", midNum, "smallest:", smallNum);


console.log("EX:", 5);

let g = 806;
let h = 907;

let average = (g + h) / 2;
console.log("Average:", average);


console.log("EX:", 6);

// let string1 = "This is a long string";
let string1 = "This is an even longer string";
let string2 = "This is a long string";
// let string2 = "This is an even longer string";

if (string1.length > string2.length) {
    console.log("string1 is longer");
}
else if (string1.length < string2.length) {
    console.log("string2 is longer");
}
else {
   console.log("Both strings are the same");
}


console.log("EX:", 7);

// let numCheck = Number.isInteger(12.5);
let numCheck = 12
let num = Number.isInteger(numCheck);
if (num = true) {
    console.log(numCheck, "Is an integer")
}
else {
    console.log(numCheck, "Is not an integer")
}

// console.log(num);


console.log("EX:", 8);

let givenNum = 73;
let percentDiscount = 15;

let calcPercent = (givenNum /100 * percentDiscount);

console.log(calcPercent);


console.log("EX:", 9);

// let evenCheckNum = 101;
// let evenCheckNum = 100;
let evenCheckNum = 15;

if (evenCheckNum % 2 === 0) {
    console.log("This number is even");
}
else{
    console.log("This number is odd")
}
