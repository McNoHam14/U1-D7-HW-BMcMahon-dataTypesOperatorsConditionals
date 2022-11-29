/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

/* WRITE YOUR ANSWER HERE */

// NUMBER
let number = 14;
console.log("This is a way to store numerical values such as:", number);

//STRING
let string = "word";
console.log("This is a way to store numerical values text, and other non numerical values such as punctuation marks and emoji such as:", string);

// Null
let egNull = 10;
console.log("beforeEmptyVariable:", egNull);
egNull = null;
console.log("afterEmptyVariable:", egNull);
console.log("This is a way to display that a variable is now empty:", egNull);

// Undefined
let egUndefined;
console.log("This is a way that JavaScript lets us know that a variable has not been assigned a value yet such as:", egUndefined);

// Boolean = 15
let isANumberGreaterThanFollowingNumber = 30;
egBoolean = isANumberGreaterThanFollowingNumber > 20;
console.log("This allows us to test whether a condition is True or False or 1 or 0 such as whether a number is greater than 20 or not", egBoolean);
  

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

/* WRITE YOUR ANSWER HERE */

egVariable = "This is a variable";
console.log("This is a way to store and save data within JavaScript, such as a Number, String etc that can be changed later on such as:", egVariable);


/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

/* WRITE YOUR ANSWER HERE */

egSum = 12
console.log("beforeAddition:", egSum);
egSum = egSum + 20;
console.log("afterAddition:", egSum);

egSum2 = 12 + 20;
console.log("secondExample:", egSum2);


/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

/* WRITE YOUR ANSWER HERE */

let x = 12
console.log("This a variable called x, it contains the number:", x);


/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

/* WRITE YOUR ANSWER HERE */

let name = "John Doe";
console.log("This is a variable called name, it contains the string:", name);


/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

let egSubtraction = 12 - x
console.log("This is a subtraction of 12 minus Variable x:", egSubtraction)

/* WRITE YOUR ANSWER HERE */


/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john"
let name2 = "John"
compareNames = name1 === name2
console.log("Are the 2 names the same:", compareNames)

/* WRITE YOUR ANSWER HERE */


/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

/* WRITE YOUR ANSWER HERE */

x = 8;
let word8 = "eight"

if (x === 8){
console.log(word8)
}


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

/* WRITE YOUR ANSWER HERE */

const shoeSize = 4;

(shoeSize >= 6) ? console.log("Adult Shoes") : console.log("Kids Shoes");