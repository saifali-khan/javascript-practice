// let getPass = prompt("enter a password");
// let confirmPass = prompt("confirm your password");
// if (confirmPass == getPass) {
//   alert("password validate")
// } else {
//   alert("password do not match");
// }

// logical and operator

// let a = 20;
// let b = 30;
// if (a < b && b > a) {
//   alert(true)
// } else if (b > a && a > b) {
//   alert(true)
// } else if (b < a && b > a) {
//   alert(true)
// } else if (a > b && b < a) {
//   alert(true)
// }
// else {
//   alert(false)
// }

// logical or operator

// let a = 20;
// let b = 30;
// if (b > a || a < b) {
//   alert(true)
// } else if (a < b || b < a) {
//   alert(true)
// } else if (a > b || a < b) {
//   alert(true)
// } else if (a > b || b < a) {
//   alert(true)
// } else {
//   alert(false)
// }

// logical and operations

// var firstName = "dalla";
// var lastName = "bahua";
// if (firstName != "" && lastName != "") {
//   document.write(`your first name is ${firstName} and your last name is ${lastName}`);
// } else if (firstName == "" && lastName != "") {
//   alert("please enter your First Name")
// } else if (firstName != "" && lastName == "") {
//   alert("please enter your Last Name")
// } else {
//   alert("please enter your full name")
// }

// logical or operations

// let selectVar = "foo" || "bar";
// if (selectVar == "foo") {
//   alert("you selected foo for your variable name")
// } else if (selectVar == "bar") {
//   alert("you selected bar for your variable name")
// } else {
//   alert("please select your variable from foo or bar")
// }

// function calc() {
//   let num1 = parseInt(prompt("please enter a number greater than 50 :"));
//   let num2 = parseInt(prompt("please enter another number smaller than or equals to 50 :"));
//   let sum;
//   let sub;
//   let multiply;
//   let division;

//   if (num1 && num2) {
//     sum = num1 + num2;
//     sub = num1 - num2;
//     multiply = num1 * num2;
//     division = num1 / num2;
//   }
//   alert(`the addition of the given value is ${sum},
// the sub of the given value is ${sub},
// the multiply of the given value is ${multiply},
// and the division of the given value is ${division} `)

//   return sum, sub, multiply, division
// }
// calc()

// function calc(a, b) {

//   let num1 = parseInt(prompt("please enter a number greater than 50"));
//   let num2 = parseInt(prompt("please enter another number smaller than or equals to 50 which you want to add result"));

//   function add(a, b) {
//     if (num1 && num2) {
//       alert(num1 + num2)
//     }
//   }
//   function sub(a, b) {
//     if (num1 && num2) {
//       alert(num1 - num2)
//     }
//   }
//   function div(a, b) {
//     if (num1 && num2) {
//       alert(num1 / num2)
//     }
//   }
//   function multiply(a, b) {
//     if (num1 && num2) {
//       alert(num1 * num2)
//     }
//   }
//   div()
// }
// calc()

// function calc(a, b, ass) {
//   if (ass == "/") {
//     total = a / b;
//     alert(`${a} divide by ${b} is equals to = ${total}`)
//   } else if (ass == "*") {
//     total = a * b;
//     alert(`${a} multiply by ${b} is equals to = ${total}`)
//   } else if (ass == "+") {
//     total = a * b;
//     alert(`${a} plus ${b} is equals to = ${total}`)
//   } else if (ass == "-") {
//     total = a - b;
//     alert(`${a} subtract by ${b} is equals to = ${total}`)
//   }
//   return total;
// }
// calc(10, 20, "/")

// function convertToNum(negativeNum) {
//   if (negativeNum < 0) {
//     negativeNum = negativeNum * -1
//   } else {
//     alert("please enter a negative number")
//   }
//   return negativeNum
// }
// convertToNum(-55)

// function findSum(number) {
//   let sum = 0;
//   for (i = 0; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   console.log(sum)
//   return sum
// }
// findSum(1000)

// function displayNone(number) {
//   if (number > 0) {
//     alert("")
//   } else {
//     alert(number)
//   }
// }
// displayNone(1)

// function checkOddEve(number) {
//   if (number % 2 == 0) {
//     alert(`the given number ${number} is even`)
//   } else {
//     alert(`the given number ${number} is odd`)
//   }
// }
// checkOddEve(11)

// function checkRel(a, b) {
//   if (a > b) {
//     alert(`True : the number ${a} is greater than number ${b}`)
//   } else {
//     alert(`False : the number ${a} is not greater than number ${b}`)
//   }
// }
// checkRel(18, 20)

// function checkVowelsOrConsonant(alphabet) {
//   switch (alphabet) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//       alert("vowels")
//       break;

//     default:
//       alert("consonants")
//       break;
//   }
// }
// checkVowelsOrConsonant("b")

// function findLongestNum(num1, num2, num3) {

//   if (num1 >= num2 && num1 >= num3) {
//     alert(`the biggest number is ${num1}`)
//   } else if (num2 >= num1 && num2 >= num3) {
//     alert(`the biggest number is ${num2}`)
//   } else {
//     alert(`the biggest number is ${num3}`)
//   }

// }
// findLongestNum(2002, 25, 223)

// let number = 2;

// switch (number) {
//   case 1:
//     alert("ONE")
//     break;
//   case 2:
//     alert("TWO")
//     break;
//   case 3:
//     alert("THREE")
//     break;
//   case 4:
//     alert("FOUR")
//     break;
//   case 5:
//     alert("FIVE")
//     break;
//   case 6:
//     alert("SIX")
//     break;
//   case 7:
//     alert("SEVEN")
//     break;
//   case 8:
//     alert("EIGHT")
//     break;
//   case 9:
//     alert("NINE")
//     break;
//   default:
//     alert("PLEASE TRY AGAIN")
//     break;
// }

// let marks = 25;
// if (marks > 90) {
//   alert("AA");
// } else if (marks <= 90) {
//   alert("AB");
// } else if (marks <= 80) {
//   alert("BB");
// } else if (marks <= 70) {
//   alert("BC");
// } else if (marks <= 60) {
//   alert("CC");
// } else if (marks <= 50) {
//   alert("CD");
// } else if (marks <= 40) {
//   alert("DD");
// } else if (marks <= 30) {
//   alert("ff");
// }

// function table(num) {
//   for (let i = 1; i <= num * 10; i++) {
//     if (i % num === 0) {
//       alert(i)
//     }
//   }
// }
// table(2)

// function findFactorial(num) {
//   let fact = 1;

//   if (fact == 0) {
//     alert("the factorial of zero is one")
//   } else {
//     for (let i = 1; i <= num; i++) {
//       fact = fact * i;
//     }
//     alert(`the factorial of ${num} is ${fact}`)
//   }

// }
// findFactorial(20)

// let x = 10 + "1";
// console.log(x)
// console.log(typeof x)

// let num1 = 225;
// let num2 = num1 % 6;
// alert(num2)
