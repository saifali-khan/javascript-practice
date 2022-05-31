// let num2;
// function numToStr(num1) {
//   num2 = num1 + ""
// return num2
// }
// numToStr(2)
// alert(num2)
// alert(typeof num2)

// function add1(num) {
//   num++
//   alert(num)
//   return num
// }
// add1(3)

// function sub1(num) {
//   num--
//   alert(num)
//   return num
// }
// sub1(3)

// function addTwoNum(a, b) {
//   let sum = a + b;
//   alert(sum)
//   return sum;
// }
// addTwoNum(2, 3);


// function subTwoNum(a, b) {
//   let sum = a - b;
//   alert(sum)
//   return sum;
// }
// subTwoNum(5, 2);

// function multiplyTwoNum(a, b) {
//   let sum = a * b;
//   alert(sum)
//   return sum;
// }
// multiplyTwoNum(5, 2);

// function divTwoNum(a, b) {
//   let sum = a / b;
//   alert(sum)
//   return sum;
// }
// divTwoNum(15, 2);

// function performBySelf(x, y, string) {
//   let total;
//   if (string === "add") {
//   total = x + y;
//   alert(` ${x}  +   ${y}   =   ${total}`)
//   } else if (string === "sub") {
//     total = x - y;
//     alert(` ${x}  -   ${y}   =   ${total}`)
//   } else if (string === "divide") {
//     total = x / y;
//     alert(` ${x}  /   ${y}   =   ${total}`)
//   } else if (string === "multiply") {
//     total = x * y;
//     alert(` ${x}  *   ${y}   =   ${total}`)
//   }
//   return total;
// }
//   performBySelf(20, 2, "multiply")

// function checkingConditions(a, b) {

// if (a > b) {
//   alert(true)
// } else {
//     alert(false)
// }
// }
// checkingConditions(25, 20)

// function checkingConditions(a, b) {

//   if (a < b) {
//     alert(true)
//   } else {
//       alert(false)
//   }
//   }
//   checkingConditions(20, 200)

// function checkingConditions(a, b) {

//   if (a = b) {
//     alert(true)
//   } else {
//       alert(false)
//   }
//   }
//   checkingConditions(25, 25)

// function findSmallestNum(a, b) {

//   if (a < b) {
//     alert(`the smallest number is ${a}`)
//   } else {
//     alert(`the smallest number is ${b}`)
//   }
//   }
//   findSmallestNum(28, 25)

// function findLargestNum(a, b) {

//   if (a > b) {
//     alert(`the largest number is ${a}`)
//   } else {
//     alert(`the largest number is ${b}`)
//   }
//   }
//   findLargestNum(28, 25)

// function checkIfEven(n) {
//   if (n % 2 === 0) {
//     alert(`true the number ${n} is even number`)
//   } else {
//     alert(`false the number ${n} is not even number`)
//   }
// }
// checkIfEven(30)

// function checkIfOdd(n) {
//   if (n % 2 === 1) {
//     alert(`true the number ${n} is odd number`)
//   } else {
//     alert(`false the number ${n} is not odd number`)
//   }
// }
// checkIfOdd(11)

// function markSheet(marks) {

//   if (marks >= 90 || marks == 100) {
//     alert("A")
//   } else if (marks >= 80 || marks == 90) {
//     alert("B")
//   } else if (marks >= 70 || marks == 79) {
//     alert("C")
//   } else if (marks >= 60 || marks == 69) {
//     alert("D")
//   } else if (marks >= 0 || marks < 59) {
//     alert("F")
//   }

// }
// markSheet(95)

// function checkProp(restaurant) {
  

// if (restaurant.hasOwnProperty("reviews")) {
//   restaurant["reviews"]++
//   console.log(restaurant.reviews)
// } else {
//   reviews = 1;
// }
// }
// checkProp({hotel: "taj", reviews: 2.5})

// function joinString(word1, word2) {
//   let join = word1 + " " + word2;
//   alert(join)
// }
// joinString("hello", "world");

let circle = {
   circumference() {
    circumference = 2 * Math.PI * radius
  },
    area() {
    area = Math.PI * radius * radius
  }
}

function find(radius) {
  alert(radius)
  return radius
}
circle.circumference.find(2)