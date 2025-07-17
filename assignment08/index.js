//  Assignment # 35-38 Functions
// QUESTION 1;
function showTime(){
    var now = new Date();
    alert(now);
}
showTime();
// QUESTION 2
function greetFullname(){
    var firstName = prompt("Enter your first name:");
    var lastName = prompt("Enter your last name:");
    alert("Hello " + firstName + " " + lastName + "! Welcome to our website.");
}
greetFullname();
// QUESTION 3
function addNumbers(){
    var num1 = parseFloat
}
// QUESTION 4;
function calculator(num1, num2, operator) {
  let result; 

  
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
  } else {
    result = "Invalid operator"; 
  }

  return result; 
}


let answer = calculator(10, 5, "+");
alert("Result: " + answer); 
// QUESTION 5
function square(num) {
  return num * num;
}


let result = square(5);
alert("Square is: " + result);
// QUESTION 6
function factorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }

  return fact;
}


let reslt = factorial(5);
alert("Factorial is: " + reslt);
// QUESTION 7
function showCounting(start, end) {
  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}
showCounting(5, 10);
// QUESTION 8
function calculateHypotenuse(base, perpendicular) {
  function calculateSquare(num) {
    return num * num;
  }

  var baseSquare = calculateSquare(base);
  var perpSquare = calculateSquare(perpendicular);

  
  var hypotenuse = Math.sqrt(baseSquare + perpSquare);

  
  document.write("Hypotenuse is: " + hypotenuse.toFixed(2));
}
calculateHypotenuse(3, 4);
// QUESTION 9
function calculateArea(width, height) {
  var area = width * height;
  document.write("Area is: " + area + "<br>");
}


calculateArea(5, 10);

var w = 7;
var h = 3;

calculateArea(w, h); 
// question 10
function isPalindrome(str) {
  var cleanStr = str.toLowerCase();  
  var reversed = cleanStr.split("").reverse().join(""); 

  if (cleanStr === reversed) {
    document.write(str + " is a palindrome.<br>");
  } else {
    document.write(str + " is NOT a palindrome.<br>");
  }
}


isPalindrome("madam");
isPalindrome("Nimra");
// question 11
function titleCase(str) {
  var words = str.split(" "); 
  var result = [];

  for (var i = 0; i < words.length; i++) {
    var firstLetter = words[i].charAt(0).toUpperCase(); 
    var restLetters = words[i].slice(1).toLowerCase(); 
    result.push(firstLetter + restLetters); 
  }

  var finalResult = result.join(" "); 
  document.write(finalResult + "<br>");
}

titleCase("the quick brown fox");
// question 12
function findLongestWord(str) {
  var words = str.split(" ");
  var longest = "";

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i]; 
    }
  }

  document.write("Longest word: " + longest + "<br>");
}


findLongestWord("Web Development Tutorial");
// question 13
function countLetter(str, letter) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }

  document.write("Letter '" + letter + "' appears " + count + " times.<br>");
}
countLetter("JSResourceS.com", "o");
// question 14
function calcCircumference(radius) {
  var circumference = 2 * Math.PI * radius;
  document.write("The circumference is " + circumference.toFixed(2) + "<br>");
}

function calcArea(radius) {
  var area = Math.PI * radius * radius;
  document.write("The area is " + area.toFixed(2) + "<br>");
}

calcCircumference(5);
calcArea(5);
