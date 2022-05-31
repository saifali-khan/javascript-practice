// function tellFortune(job, location, wife, child) {
//   return console.log(`i am a ${job}, i am lives in ${location} and married with ${wife} with ${child} kids`)
// }
// tellFortune("programmer", "california", "molly", 2)

// function calculateDogAge(humanAge) {
//   dogAge = humanAge * 7;
//   alert("1 human  year is equals to 7 dog years")
// return alert(`your doggie is ${dogAge} years old in dog years`)
// }
// calculateDogAge(2)

// function celsiusToFahrenhiet(celsius) {
//   let fahrenhiet = celsius * 9/5 + 32;
//   return console.log(`the ${celsius} degree celsius is ${fahrenhiet} degree fahrenhiet`)
// }

// celsiusToFahrenhiet(22)

// function fahrenhietToCelsius(fahrenhiet) {
//   let celsius = (fahrenhiet - 32) * 5/9;
//   return console.log(`the ${fahrenhiet} degree fahrenhiet is ${celsius} degree celsius`)
// }
// fahrenhietToCelsius(99)

// function checkAge(age) {
//   (age > 18 || age > 20) ? alert(true) : confirm("did your parents allowed you?")
// }
// checkAge(21)

// function pow(x, n) {
//   let sum;
//   x = prompt("enter a number")
//   n = prompt("enter another digit")
//   for (let i = 0;i <= n;i++) {
//   sum = x * i * n;
//   }
//   return alert(sum)
// }
// pow()

// function pow(x, n){
//    x = prompt("enter a number")
//    n = prompt("enter a number")
//   let sum = x**n;
//   console.log(sum);
//   }
//   pow()

// function countVowels(string) {
//   let count = string.match(/[aeiou]/gi).length;
//   return alert(count)
// }
// countVowels("hello my name is john")

// function findPalindromeString(string) {
  
// }

function checkPalindrome(string) {
  palindromeStr = string.split("").reverse().join("");
  if (palindromeStr === string) {
    alert("the word entered by the user is palindrome")
  } else {
    alert("the word entered by the user is not palindrome")
  }
}
checkPalindrome("nurses run")